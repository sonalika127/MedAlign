package com.healthcare.appointmentscheduling.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.AttributeOverrides;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

@Entity
public class Doctor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    @CollectionTable(name = "doctor_available_slots", joinColumns = @JoinColumn(name = "doctor_id"))
    @AttributeOverrides({
        @AttributeOverride(name = "date", column = @Column(name = "slot_date")),
        @AttributeOverride(name = "time", column = @Column(name = "slot_time"))
    })
    private Set<AvailableSlot> availableSlots = new HashSet<>();
    
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "specialization", nullable = false)
    private String specialization;

    @Column(name = "contact_info", nullable = false)
    private String contactInfo; // JSON format or another suitable format

    // Constructors
    public Doctor() {
        // Default constructor
    }

    public Doctor(String name, String specialization, String contactInfo, Set<AvailableSlot> availableSlots) {
        this.name = name;
        this.specialization = specialization;
        this.contactInfo = contactInfo;
        this.availableSlots = availableSlots;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public Set<AvailableSlot> getAvailableSlots() {
        return availableSlots;
    }

    public void setAvailableSlots(Set<AvailableSlot> availableSlots) {
        this.availableSlots = availableSlots;
    }

    // Utility methods
    public boolean isAvailable(LocalDate date, LocalTime time) {
        return availableSlots.stream()
                .anyMatch(slot -> slot.getDate().equals(date) && slot.getTime().equals(time));
    }
}
