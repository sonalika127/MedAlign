package jfsd.project.ehrservice.controller;


import jfsd.project.ehrservice.model.HealthRecord;
import jfsd.project.ehrservice.service.HealthRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/health-records")
public class HealthRecordController {

    @Autowired
    private HealthRecordService service;

    @PostMapping
    public HealthRecord createHealthRecord(@RequestBody HealthRecord record) {
        return service.createHealthRecord(record);
    }

    // Get all health records for a specific patient by patient ID
    @GetMapping("/patient/{patientId}")
    public List<HealthRecord> getRecordsByPatientId(@PathVariable String patientId) {
        return service.getRecordsByPatientId(patientId);
    }

    @PutMapping("/{id}")
    public HealthRecord updateHealthRecord(@PathVariable Long id, @RequestBody HealthRecord updatedRecord) {
        return service.updateHealthRecord(id, updatedRecord);
    }

    @DeleteMapping("/{id}")
    public void deleteHealthRecord(@PathVariable Long id) {
        service.deleteHealthRecord(id);
    }
}

