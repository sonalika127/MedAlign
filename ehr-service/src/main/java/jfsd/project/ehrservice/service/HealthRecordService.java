package jfsd.project.ehrservice.service;

import jfsd.project.ehrservice.model.HealthRecord;
import jfsd.project.ehrservice.repository.HealthRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HealthRecordService {

    @Autowired
    private HealthRecordRepository repository;

    public HealthRecord createHealthRecord(HealthRecord record) {
        return repository.save(record);
    }

    public List<HealthRecord> getRecordsByPatientId(String patientId) {
        return repository.findByPatientId(patientId);
    }

    public Optional<HealthRecord> getHealthRecordById(Long id) {
        return repository.findById(id);
    }

    public HealthRecord updateHealthRecord(Long id, HealthRecord updatedRecord) {
        return repository.findById(id)
                .map(record -> {
                    record.setPatientId(updatedRecord.getPatientId());
                    record.setDoctorName(updatedRecord.getDoctorName());
                    record.setDoctorSpeciality(updatedRecord.getDoctorSpeciality());
                    record.setClinicAddress(updatedRecord.getClinicAddress());
                    record.setProvisionalDiagnosis(updatedRecord.getProvisionalDiagnosis());
                    record.setBloodPressure(updatedRecord.getBloodPressure());
                    record.setTemperature(updatedRecord.getTemperature());
                    record.setSpo2(updatedRecord.getSpo2());
                    record.setRoomAir(updatedRecord.getRoomAir());
                    record.setChiefComplaint(updatedRecord.getChiefComplaint());
                    record.setGeneralExamination(updatedRecord.getGeneralExamination());
                    record.setSystemicExamination(updatedRecord.getSystemicExamination());
                    record.setDietAdvice(updatedRecord.getDietAdvice());
                    record.setMedicationDetails(updatedRecord.getMedicationDetails());
                    record.setInvestigationOrder(updatedRecord.getInvestigationOrder());
                    record.setVisitDate(updatedRecord.getVisitDate());
                    return repository.save(record);
                })
                .orElseThrow(() -> new RuntimeException("Health Record not found with id " + id));
    }

    public void deleteHealthRecord(Long id) {
        repository.deleteById(id);
    }
}
