package jfsd.project.ehrservices.controller;
import jfsd.project.ehrservices.model.MedicalRecord;
import jfsd.project.ehrservices.service.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/records")
public class MedicalRecordController {

    @Autowired
    private MedicalRecordService medicalRecordService;

    @GetMapping("/{patientId}")
    public List<MedicalRecord> getRecords(@PathVariable Long patientId) {
        return medicalRecordService.getRecordsByPatientId(patientId);
    }

    @PostMapping
    public MedicalRecord createRecord(@RequestBody MedicalRecord record) {
        return medicalRecordService.saveMedicalRecord(record);
    }

    @PutMapping("/{id}")
    public MedicalRecord updateRecord(@PathVariable Long id, @RequestBody MedicalRecord record) {
        record.setId(id);
        return medicalRecordService.updateMedicalRecord(record);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        medicalRecordService.deleteMedicalRecord(id);
    }
}
