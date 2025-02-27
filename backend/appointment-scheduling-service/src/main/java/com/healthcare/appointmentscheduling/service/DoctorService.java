package com.healthcare.appointmentscheduling.service;

import org.springframework.stereotype.Service;
import com.healthcare.appointmentscheduling.model.Doctor;
import com.healthcare.appointmentscheduling.repository.DoctorRepository;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DoctorService {

    private final DoctorRepository doctorRepository;

    public DoctorService(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Map<String, String> getDoctorAvailableSlots(Long doctorId) {
        Doctor doctor = doctorRepository.findById(doctorId)
            .orElseThrow(() -> new IllegalArgumentException("Doctor not found"));

        return doctor.getAvailableSlots().stream()
            .collect(Collectors.toMap(
                slot -> slot.getDate().toString() + " " + slot.getTime().toString(), 
                slot -> "Available"  // Or any other representation
            ));
    }

    public Doctor createDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    public Doctor updateDoctor(Long doctorId, Doctor updatedDoctor) {
        if (!doctorRepository.existsById(doctorId)) {
            throw new IllegalArgumentException("Doctor not found");
        }
        
        updatedDoctor.setId(doctorId); // Ensure the ID is set for the update
        return doctorRepository.save(updatedDoctor);
    }

    public void deleteDoctor(Long doctorId) {
        if (!doctorRepository.existsById(doctorId)) {
            throw new IllegalArgumentException("Doctor not found");
        }

        doctorRepository.deleteById(doctorId);
    }
}
