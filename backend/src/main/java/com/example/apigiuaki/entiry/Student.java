package com.example.apigiuaki.entiry;

import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Student {
    @Id
    private String studentId;
    @Column
    private String name;
    @Column
    private String male;
    @JsonFormat
    @Column
    private Calendar birthday;
    @Column
    private String placeofbirth;
    @Column
    private String address;
    @Column
    private String depname;

    public Student() {

    }

    public Student(String studentId, String name, String male, Calendar birthday, String placeofbirth, String address,
            String depname) {
        this.studentId = studentId;
        this.name = name;
        this.male = male;
        this.birthday = birthday;
        this.placeofbirth = placeofbirth;
        this.address = address;
        this.depname = depname;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMale() {
        return male;
    }

    public void setMale(String male) {
        this.male = male;
    }

    public Calendar getBirthday() {
        return birthday;
    }

    public void setBirthday(Calendar birthday) {
        this.birthday = birthday;
    }

    public String getPlaceofbirth() {
        return placeofbirth;
    }

    public void setPlaceofbirth(String placeofbirth) {
        this.placeofbirth = placeofbirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDepname() {
        return depname;
    }

    public void setDepname(String depname) {
        this.depname = depname;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", name='" + name + '\'' +
                ", male=" + male +
                ", birthday=" + birthday +
                ", placeofbirth='" + placeofbirth + '\'' +
                ", address='" + address + '\'' +
                ", depname='" + depname + '\'' +
                '}';
    }
}
