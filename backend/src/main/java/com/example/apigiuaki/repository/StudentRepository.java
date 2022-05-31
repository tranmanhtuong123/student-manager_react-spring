package com.example.apigiuaki.repository;

import com.example.apigiuaki.entiry.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
    Student findByStudentId(String studentId);
}
