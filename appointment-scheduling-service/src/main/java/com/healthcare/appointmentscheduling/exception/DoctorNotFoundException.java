package com.healthcare.appointmentscheduling.exception;

public class DoctorNotFoundException extends RuntimeException {
    public DoctorNotFoundException(Long doctorId) {
        super("Doctor with ID " + doctorId + " not found.");
    }
}
