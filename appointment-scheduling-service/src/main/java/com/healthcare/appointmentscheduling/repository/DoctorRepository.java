package com.healthcare.appointmentscheduling.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.healthcare.appointmentscheduling.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}
