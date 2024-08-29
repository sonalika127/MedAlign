package jfsd.project.authservices.service;

import jfsd.project.authservices.model.Role;
import jfsd.project.authservices.model.User;
import jfsd.project.authservices.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Fetch and validate the role provided by the user
        String role = user.getRoles(); // This should be a single role name

        // Default role as PATIENT if no role is provided
        if (role == null || role.isEmpty()) {
            role = Role.ROLE_PATIENT.name();
        } else {
            try {
                // Validate the role
                Role.valueOf(role.trim()); // Check if the role is valid
            } catch (IllegalArgumentException e) {
                return "Invalid role provided";
            }
        }

        user.setRoles(role); // Set the single role as a string

        userRepository.save(user);
        return "User registered successfully";
    }
}
