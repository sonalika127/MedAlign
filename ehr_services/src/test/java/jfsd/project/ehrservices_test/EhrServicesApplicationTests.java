package jfsd.project.ehrservices_test;

import jfsd.project.ehrservices.model.MedicalRecord;
import jfsd.project.ehrservices.service.MedicalRecordService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class EhrServicesApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private MedicalRecordService medicalRecordService;

    @Test
    void contextLoads() {
        assertThat(medicalRecordService).isNotNull();
    }

    @Test
    void testGetRecords() throws Exception {
        MedicalRecord record = new MedicalRecord();
        record.setPatientId(1L);
        record.setRecordType("Type1");
        record.setRecordData("Sample Data");
        medicalRecordService.saveMedicalRecord(record);

        MvcResult result = mockMvc.perform(get("/records/1"))
                .andExpect(status().isOk())
                .andReturn();

        String responseContent = result.getResponse().getContentAsString();
        assertThat(responseContent).contains("Sample Data");
    }

    @Test
    void testCreateRecord() throws Exception {
        String jsonRecord = "{\"patientId\": 1, \"recordType\": \"Type1\", \"recordData\": \"Sample Data\"}";

        MvcResult result = mockMvc.perform(post("/records")
                .contentType("application/json")
                .content(jsonRecord))
                .andExpect(status().isOk())
                .andReturn();

        String responseContent = result.getResponse().getContentAsString();
        assertThat(responseContent).contains("Sample Data");
    }

    @Test
    void testUpdateRecord() throws Exception {
        MedicalRecord record = new MedicalRecord();
        record.setPatientId(1L);
        record.setRecordType("Type1");
        record.setRecordData("Sample Data");
        MedicalRecord savedRecord = medicalRecordService.saveMedicalRecord(record);

        String jsonUpdate = "{\"recordType\": \"Updated Type\", \"recordData\": \"Updated Data\"}";

        MvcResult result = mockMvc.perform(put("/records/" + savedRecord.getId())
                .contentType("application/json")
                .content(jsonUpdate))
                .andExpect(status().isOk())
                .andReturn();

        String responseContent = result.getResponse().getContentAsString();
        assertThat(responseContent).contains("Updated Data");
    }

    @Test
    void testDeleteRecord() throws Exception {
        MedicalRecord record = new MedicalRecord();
        record.setPatientId(1L);
        record.setRecordType("Type1");
        record.setRecordData("Sample Data");
        MedicalRecord savedRecord = medicalRecordService.saveMedicalRecord(record);

        mockMvc.perform(delete("/records/" + savedRecord.getId()))
                .andExpect(status().isOk());

        List<MedicalRecord> records = medicalRecordService.getRecordsByPatientId(1L);
        assertThat(records).isEmpty();
    }
}
