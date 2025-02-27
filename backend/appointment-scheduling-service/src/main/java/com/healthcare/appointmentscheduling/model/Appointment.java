package com.healthcare.appointmentscheduling.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import jakarta.persistence.*;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @Column(name = "patient_id", nullable = false)
    private Long patientId;

    @Column(name = "appointment_date", nullable = false)
    private LocalDate appointmentDate;

    @Column(name = "appointment_time", nullable = false)
    private LocalTime appointmentTime;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private AppointmentStatus status;

    @Column(name = "visit_type", nullable = false) // New field for type of visit
    private String visitType;

    @Column(name = "specialization", nullable = false) // New field for doctor's specialization
    private String specialization;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    // Constructors
    public Appointment() {
        // Default constructor
    }

    public Appointment(Long patientId, Doctor doctor, LocalDate appointmentDate, LocalTime appointmentTime, 
                      AppointmentStatus status, String visitType, String specialization) {
        this.patientId = patientId;
        this.doctor = doctor;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.status = status;
        this.visitType = visitType; // Set visit type
        this.specialization = specialization; // Set specialization
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { 
        return id; 
    }
    
    public void setId(Long id) { 
        this.id = id; 
    }
    
    public Long getPatientId() { 
        return patientId; 
    }
    
    public void setPatientId(Long patientId) { 
        this.patientId = patientId; 
    }
    
    public Doctor getDoctor() { 
        return doctor; 
    }
    
    public void setDoctor(Doctor doctor) { 
        this.doctor = doctor; 
    }
    
    public LocalDate getAppointmentDate() { 
        return appointmentDate; 
    }
    
    public void setAppointmentDate(LocalDate appointmentDate) { 
        this.appointmentDate = appointmentDate; 
    }
    
    public LocalTime getAppointmentTime() { 
        return appointmentTime; 
    }
    
    public void setAppointmentTime(LocalTime appointmentTime) { 
        this.appointmentTime = appointmentTime; 
    }
    
    public AppointmentStatus getStatus() { 
        return status; 
    }
    
    public void setStatus(AppointmentStatus status) { 
        this.status = status; 
    }

    public String getVisitType() { 
        return visitType; 
    }
    
    public void setVisitType(String visitType) { 
        this.visitType = visitType; 
    }

    public String getSpecialization() { 
        return specialization; 
    }
    
    public void setSpecialization(String specialization) { 
        this.specialization = specialization; 
    }

    public LocalDateTime getCreatedAt() { 
        return createdAt; 
    }
    
    public void setCreatedAt(LocalDateTime createdAt) { 
        this.createdAt = createdAt; 
    }
    
    public LocalDateTime getUpdatedAt() { 
        return updatedAt; 
    }
    
    public void setUpdatedAt(LocalDateTime updatedAt) { 
        this.updatedAt = updatedAt; 
    }

    // Utility methods
    public void updateTimestamps() {
        this.updatedAt = LocalDateTime.now();
    }
}
