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

    public List<HealthRecord> getRecordsByPatientId(String patientId) {
        return repository.findByPatientId(patientId);
    }

    public Optional<HealthRecord> getRecordById(Long id) {
        return repository.findById(id);
    }

    public HealthRecord createRecord(HealthRecord record) {
        return repository.save(record);
    }

    public HealthRecord updateRecord(Long id, HealthRecord updatedRecord) {
        return repository.findById(id).map(record -> {
            record.setBloodPressure(updatedRecord.getBloodPressure());
            record.setChiefComplaint(updatedRecord.getChiefComplaint());
            record.setClinicAddress(updatedRecord.getClinicAddress());
            record.setDietAdvice(updatedRecord.getDietAdvice());
            record.setDoctorName(updatedRecord.getDoctorName());
            record.setDoctorSpecialty(updatedRecord.getDoctorSpecialty());
            record.setGeneralExamination(updatedRecord.getGeneralExamination());
            record.setInvestigationOrder(updatedRecord.getInvestigationOrder());
            record.setMedicationDetails(updatedRecord.getMedicationDetails());
            record.setPatientId(updatedRecord.getPatientId());
            record.setProvisionalDiagnosis(updatedRecord.getProvisionalDiagnosis());
            record.setRoomAir(updatedRecord.getRoomAir());
            record.setSpo2(updatedRecord.getSpo2());
            record.setSystemicExamination(updatedRecord.getSystemicExamination());
            record.setTemperature(updatedRecord.getTemperature());
            record.setVisitDate(updatedRecord.getVisitDate());
            return repository.save(record);
        }).orElseThrow(() -> new RuntimeException("Record not found with id " + id));
    }

    public void deleteRecord(Long id) {
        repository.deleteById(id);
    }
}
