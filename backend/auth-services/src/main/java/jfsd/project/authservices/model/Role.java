package jfsd.project.authservices.model;


import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ROLE_PATIENT, ROLE_DOCTOR, ROLE_ADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}
