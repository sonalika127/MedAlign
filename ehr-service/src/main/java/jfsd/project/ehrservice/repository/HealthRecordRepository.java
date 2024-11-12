package jfsd.project.ehrservice.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import jfsd.project.ehrservice.model.HealthRecord;
import java.util.List;

public interface HealthRecordRepository extends JpaRepository<HealthRecord, Long> {
    List<HealthRecord> findByPatientId(String patientId);
}
