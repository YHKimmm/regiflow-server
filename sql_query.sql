------------ CREATE TABLE query -------------
CREATE TYPE age_group AS ENUM ('Junior', 'Teenager', 'Adult');

CREATE TABLE users (
  user_id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skype_id           VARCHAR(250),
  email              VARCHAR(100),
  password           VARCHAR(150),
  phone_number       VARCHAR(20),
  local_name         VARCHAR(30),
  english_name       VARCHAR(30),
  age_group          age_group,
  last_modified_date TIMESTAMP
);

CREATE TABLE teachers (
  teacher_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(user_id)
);

CREATE TABLE students (
  student_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(user_id)
);

CREATE TABLE course_name (
  course_name_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_name    VARCHAR(50) NOT NULL
);

CREATE TABLE class_type (
  class_type_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  class_type    VARCHAR(50) NOT NULL
);

CREATE TABLE courses (
  course_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id         UUID REFERENCES students(student_id),
  teacher_id         UUID REFERENCES teachers(teacher_id),
  class_type_id      UUID REFERENCES class_type(class_type_id),
  course_name_id     UUID REFERENCES course_name(course_name_id),
  start_time         TIMESTAMP,
  end_time           TIMESTAMP,
  last_modified_date TIMESTAMP
);

------------------- TEST INSERT query -------------------
INSERT INTO users (skype_id, email, password, phone_number, local_name, english_name, age_group, last_modified_date)
VALUES ('user1_skype', 'user1@example.com', 'password1', '1234567890', 'Brayden', 'Brayden', 'Adult', NOW()),
       ('user2_skype', 'user2@example.com', 'password2', '0987654321', 'Jay', 'Jay', 'Adult', NOW()),
       ('user3_skype', 'user3@example.com', 'password3', '5554443333', 'FirePunch', 'FirePunch', 'Adult', NOW());
