package com.healthcare.appointmentscheduling.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import com.healthcare.appointmentscheduling.model.Appointment;
import com.healthcare.appointmentscheduling.model.AppointmentDto;
import com.healthcare.appointmentscheduling.model.AppointmentStatus;
import com.healthcare.appointmentscheduling.model.Doctor;
import com.healthcare.appointmentscheduling.repository.AppointmentRepository;
import com.healthcare.appointmentscheduling.repository.DoctorRepository;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class AppointmentService {

    private static final Logger logger = LoggerFactory.getLogger(AppointmentService.class);

    private final AppointmentRepository appointmentRepository;
    private final DoctorRepository doctorRepository;

    public AppointmentService(AppointmentRepository appointmentRepository, DoctorRepository doctorRepository) {
        this.appointmentRepository = appointmentRepository;
        this.doctorRepository = doctorRepository;
    }

    public Appointment scheduleAppointment(AppointmentDto appointmentDto) {
        logger.info("Scheduling appointment for patient ID: {}", appointmentDto.getPatientId());

        Doctor doctor = doctorRepository.findById(appointmentDto.getDoctorId())
                .orElseThrow(() -> new IllegalArgumentException("Doctor not found"));

        logger.info("Found doctor with ID: {}", doctor.getId());

        Appointment appointment = new Appointment(
                appointmentDto.getPatientId(),
                doctor,
                appointmentDto.getAppointmentDate(),
                appointmentDto.getAppointmentTime(),
                AppointmentStatus.SCHEDULED,
                appointmentDto.getVisitType(), 
                appointmentDto.getSpecialization() 
        );

        appointment.setCreatedAt(LocalDateTime.now());
        appointment.setUpdatedAt(LocalDateTime.now());

        logger.info("Appointment details: {}", appointment);

        Appointment savedAppointment = appointmentRepository.save(appointment);

        logger.info("Appointment successfully scheduled with ID: {}", savedAppointment.getId());

        return savedAppointment;
    }

    public List<Appointment> getAllAppointments() {
        logger.info("Fetching all appointments");
        return appointmentRepository.findAll();
    }

    public Appointment getAppointmentById(Long appointmentId) {
        logger.info("Fetching appointment with ID: {}", appointmentId);
        return appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found"));
    }

    public List<Appointment> getAppointmentsByDoctor(Long doctorId) {
        logger.info("Fetching appointments for doctor ID: {}", doctorId);
        return appointmentRepository.findByDoctorId(doctorId);
    }

    public List<Appointment> getAppointmentsByPatient(Long patientId) {
        logger.info("Fetching appointments for patient ID: {}", patientId);
        return appointmentRepository.findByPatientId(patientId);
    }

    public void cancelAppointment(Long appointmentId) {
        logger.info("Cancelling appointment with ID: {}", appointmentId);
        Appointment appointment = getAppointmentById(appointmentId);
        appointment.setStatus(AppointmentStatus.CANCELLED);
        appointment.updateTimestamps();
        appointmentRepository.save(appointment);
    }

    public void completeAppointment(Long appointmentId) {
        logger.info("Completing appointment with ID: {}", appointmentId);
        Appointment appointment = getAppointmentById(appointmentId);
        appointment.setStatus(AppointmentStatus.COMPLETED);
        appointment.updateTimestamps();
        appointmentRepository.save(appointment);
    }

    public void deleteAppointment(Long appointmentId) {
        logger.info("Deleting appointment with ID: {}", appointmentId);
        appointmentRepository.deleteById(appointmentId);
    }
}
