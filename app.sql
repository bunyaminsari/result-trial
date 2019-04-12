-- STUDENT SCHEMA 
CREATE TABLE students(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    grade INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- TEACHER SCHEMA 
CREATE table teachers(
    id  INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- SUBJECT SCHEMA 
CREATE TABLE subjects(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    student_id INT,
    teacher_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id)
);

INSERT INTO students(firstname,lastname,grade) VALUES 
("Jack","Sparrow","5"),("Heidi","Merry","6"),("Anthony","Hopkins","7");

INSERT INTO teachers(firstname,lastname,title) VALUES 
("Karen","Harvey","Homeroom 5"),("Ashley","Nunes","Homeroom 3"),("Hannah","Dashiell","Homeroom 1");

INSERT INTO subjects(title,student_id,teacher_id) VALUES 
("I&S",1,2),("L&L",2,3),("Math",3,1);


SELECT firstname, lastname FROM students JOIN subjects ON 
subjects.student_id = students.id WHERE subjects.title = "Math";

SELECT firstname, lastname FROM teachers JOIN subjects ON 
subjects.teacher_id = teachers.id WHERE subjects.title = "I&S";

