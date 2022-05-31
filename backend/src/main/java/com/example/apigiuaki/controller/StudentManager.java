package com.example.apigiuaki.controller;

import java.util.List;

import com.example.apigiuaki.entiry.Student;
import com.example.apigiuaki.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "*")
public class StudentManager {
    @Autowired
    StudentRepository studentRepository;

    @GetMapping()
    public ResponseEntity<?> getListStudent() {
        return ResponseEntity.ok(studentRepository.findAll());
    }

    @GetMapping("/{studentId}")
    public ResponseEntity<?> StudentDetail(@PathVariable(name = "studentId") String studentId) {
        Student student = studentRepository.findByStudentId(studentId);
        if (student == null) {
            return ResponseEntity.badRequest().body("vui lòng nhập ID");
        }
        return ResponseEntity.ok(student);
    }

    @PostMapping("/newStudent")
    public ResponseEntity<?> addStudent(@RequestBody Student student) {
        return ResponseEntity.ok(studentRepository.save(student));
    }

    @PatchMapping("/{studentId}")
    public ResponseEntity<?> editStudent(@RequestBody Student newStudent,
            @PathVariable(name = "studentId") String studentId) {
        Student student = studentRepository.findByStudentId(studentId);
        if (student == null) {
            throw new RuntimeException("KO TÌM THẤY STUDENT");
        }
        student.setStudentId(newStudent.getStudentId());
        student.setName(newStudent.getName());
        student.setMale(newStudent.getMale());
        student.setBirthday(newStudent.getBirthday());
        student.setPlaceofbirth(newStudent.getPlaceofbirth());
        student.setAddress(newStudent.getAddress());
        student.setDepname(newStudent.getDepname());
        return ResponseEntity.ok(studentRepository.save(student));
    }

    @PostMapping("/delStudent")
    public ResponseEntity<?> delStudent(@RequestBody List<String> listIdStrudent) {
        
        return null;
        // return ResponseEntity.ok(studentRepository.save(student));
    }
}
