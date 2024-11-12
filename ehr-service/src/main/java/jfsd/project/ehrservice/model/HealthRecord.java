package jfsd.project.ehrservice.model;
import jakarta.persistence.*;
import java.util.Date;

@Entity
public class HealthRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String patientId;
    private String doctorName;
    private String doctorSpeciality;
    private String clinicAddress;
    private String provisionalDiagnosis;

    private String bloodPressure;
    private double temperature;
    private int spo2;
    private String roomAir;

    private String chiefComplaint;
    private String generalExamination;
    private String systemicExamination;

    private String dietAdvice;
    private String medicationDetails;
    private String investigationOrder;

    @Temporal(TemporalType.TIMESTAMP)
    private Date visitDate;

    // Constructors
    public HealthRecord() {}

    public HealthRecord(String patientId, String doctorName, String doctorSpeciality,
                        String clinicAddress, String provisionalDiagnosis, String bloodPressure,
                        double temperature, int spo2, String roomAir, String chiefComplaint,
                        String generalExamination, String systemicExamination, String dietAdvice,
                        String medicationDetails, String investigationOrder, Date visitDate) {
        this.patientId = patientId;
        this.doctorName = doctorName;
        this.doctorSpeciality = doctorSpeciality;
        this.clinicAddress = clinicAddress;
        this.provisionalDiagnosis = provisionalDiagnosis;
        this.bloodPressure = bloodPressure;
        this.temperature = temperature;
        this.spo2 = spo2;
        this.roomAir = roomAir;
        this.chiefComplaint = chiefComplaint;
        this.generalExamination = generalExamination;
        this.systemicExamination = systemicExamination;
        this.dietAdvice = dietAdvice;
        this.medicationDetails = medicationDetails;
        this.investigationOrder = investigationOrder;
        this.visitDate = visitDate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public String getDoctorName() {
        return doctorName;
    }

    public void setDoctorName(String doctorName) {
        this.doctorName = doctorName;
    }

    public String getDoctorSpeciality() {
        return doctorSpeciality;
    }

    public void setDoctorSpeciality(String doctorSpeciality) {
        this.doctorSpeciality = doctorSpeciality;
    }

    public String getClinicAddress() {
        return clinicAddress;
    }

    public void setClinicAddress(String clinicAddress) {
        this.clinicAddress = clinicAddress;
    }

    public String getProvisionalDiagnosis() {
        return provisionalDiagnosis;
    }

    public void setProvisionalDiagnosis(String provisionalDiagnosis) {
        this.provisionalDiagnosis = provisionalDiagnosis;
    }

    public String getBloodPressure() {
        return bloodPressure;
    }

    public void setBloodPressure(String bloodPressure) {
        this.bloodPressure = bloodPressure;
    }

    public double getTemperature() {
        return temperature;
    }

    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }

    public int getSpo2() {
        return spo2;
    }

    public void setSpo2(int spo2) {
        this.spo2 = spo2;
    }

    public String getRoomAir() {
        return roomAir;
    }

    public void setRoomAir(String roomAir) {
        this.roomAir = roomAir;
    }

    public String getChiefComplaint() {
        return chiefComplaint;
    }

    public void setChiefComplaint(String chiefComplaint) {
        this.chiefComplaint = chiefComplaint;
    }

    public String getGeneralExamination() {
        return generalExamination;
    }

    public void setGeneralExamination(String generalExamination) {
        this.generalExamination = generalExamination;
    }

    public String getSystemicExamination() {
        return systemicExamination;
    }

    public void setSystemicExamination(String systemicExamination) {
        this.systemicExamination = systemicExamination;
    }

    public String getDietAdvice() {
        return dietAdvice;
    }

    public void setDietAdvice(String dietAdvice) {
        this.dietAdvice = dietAdvice;
    }

    public String getMedicationDetails() {
        return medicationDetails;
    }

    public void setMedicationDetails(String medicationDetails) {
        this.medicationDetails = medicationDetails;
    }

    public String getInvestigationOrder() {
        return investigationOrder;
    }

    public void setInvestigationOrder(String investigationOrder) {
        this.investigationOrder = investigationOrder;
    }

    public Date getVisitDate() {
        return visitDate;
    }

    public void setVisitDate(Date visitDate) {
        this.visitDate = visitDate;
    }
}
