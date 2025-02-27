package jfsd.project.ehrservice.controller;

import jfsd.project.ehrservice.model.HealthRecord;
import jfsd.project.ehrservice.service.HealthRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/health-records")
public class HealthRecordController {

    @Autowired
    private HealthRecordService service;

    @GetMapping("/patient/{patientId}")
    public List<HealthRecord> getRecordsByPatientId(@PathVariable String patientId) {
        return service.getRecordsByPatientId(patientId);
    }

    @GetMapping("/{id}")
    public Optional<HealthRecord> getRecordById(@PathVariable Long id) {
        return service.getRecordById(id);
    }

    @PostMapping
    public HealthRecord createRecord(@RequestBody HealthRecord record) {
        return service.createRecord(record);
    }

    @PutMapping("/{id}")
    public HealthRecord updateRecord(@PathVariable Long id, @RequestBody HealthRecord record) {
        return service.updateRecord(id, record);
    }

    @DeleteMapping("/{id}")
    public void deleteRecord(@PathVariable Long id) {
        service.deleteRecord(id);
    }
}
