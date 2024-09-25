package com.healthcare.appointmentscheduling.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import java.time.LocalDate;
import java.time.LocalTime;

@Embeddable
public class AvailableSlot {

    @Column(name = "slot_date")
    private LocalDate date;

    @Column(name = "slot_time")
    private LocalTime time;

    // Constructors
    public AvailableSlot() {
    }

    public AvailableSlot(LocalDate date, LocalTime time) {
        this.date = date;
        this.time = time;
    }

    // Getters and Setters
    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    // Equals and HashCode
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AvailableSlot that = (AvailableSlot) o;

        if (!date.equals(that.date)) return false;
        return time.equals(that.time);
    }

    @Override
    public int hashCode() {
        int result = date.hashCode();
        result = 31 * result + time.hashCode();
        return result;
    }
}
