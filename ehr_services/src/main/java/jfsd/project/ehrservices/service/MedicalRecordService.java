package jfsd.project.ehrservices.service;

import jfsd.project.ehrservices.model.MedicalRecord;
import jfsd.project.ehrservices.repository.MedicalRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class MedicalRecordService {

    @Autowired
    private MedicalRecordRepository medicalRecordRepository;

    public List<MedicalRecord> getRecordsByPatientId(Long patientId) {
        return medicalRecordRepository.findByPatientId(patientId);
    }

    public MedicalRecord saveMedicalRecord(MedicalRecord record) {
        record.setCreatedAt(new Date());
        record.setUpdatedAt(new Date());
        return medicalRecordRepository.save(record);
    }

    public MedicalRecord updateMedicalRecord(MedicalRecord record) {
        record.setUpdatedAt(new Date());
        return medicalRecordRepository.save(record);
    }

    public void deleteMedicalRecord(Long id) {
        medicalRecordRepository.deleteById(id);
    }
}
