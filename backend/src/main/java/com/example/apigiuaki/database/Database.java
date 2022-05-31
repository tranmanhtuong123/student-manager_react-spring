package com.example.apigiuaki.database;

import java.util.Calendar;

import com.example.apigiuaki.entiry.Student;
import com.example.apigiuaki.repository.StudentRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Database {
    private static final Logger logger = LoggerFactory.getLogger(Database.class);

    @Bean
    CommandLineRunner initDatabase(StudentRepository studentRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                Student s1 = new Student("02231034", "Cuong", "male", Calendar.getInstance(), "HCM", "123/456",
                        "Anh văn");
                Student s2 = new Student("02231035", "Cuong1", "female", Calendar.getInstance(), "HCM", "123/456",
                        "Kinh tế");
                Student s3 = new Student("02231036L", "Cuong2", "male", Calendar.getInstance(), "HCM", "123/456",
                        "Hóa học");
                Student s4 = new Student("02231037L", "Cuong3", "male", Calendar.getInstance(), "HCM", "123/456",
                        "Sinh vật học");
                Student s5 = new Student("0223103", "Cuong4", "female", Calendar.getInstance(), "HCM", "123/456",
                        "Tin học");
                logger.info("insert data:" + studentRepository.save(s1));
                logger.info("insert data:" + studentRepository.save(s2));
                logger.info("insert data:" + studentRepository.save(s3));
                logger.info("insert data:" + studentRepository.save(s4));
                logger.info("insert data:" + studentRepository.save(s5));
                // System.out.println(new Date());

            }
        };
    }
}
