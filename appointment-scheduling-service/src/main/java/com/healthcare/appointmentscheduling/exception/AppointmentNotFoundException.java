package com.healthcare.appointmentscheduling.exception;

public class AppointmentNotFoundException extends RuntimeException {
    public AppointmentNotFoundException(Long appointmentId) {
        super("Appointment with ID " + appointmentId + " not found");
    }
}

