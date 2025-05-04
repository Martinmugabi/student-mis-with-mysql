use studentmis;

create table teacher(
id int primary key auto_increment,
first_name varchar(30) not null,
last_name varchar (30)not null,
Email varchar(255) unique,
address varchar(30)
);

create table course(
id int primary key auto_increment,
course_Name varchar (45) not null,
faculty varchar(45)
);

create table course_units(
id int primary key auto_increment,
course_id int not null,
course_unit_code varchar (45),
course_unit_name varchar(45),
constraint foreign key(course_id) references course(id) on delete cascade
);

create table assignstudent_course(
id int primary key auto_increment,
student_id int not null,
course_id int not null,
course_unit_id int not null,
constraint foreign key(student_id ) references students(id) on delete cascade,
constraint foreign key course_fk(course_id) references course(id) on delete cascade,
constraint foreign key course_unit_fk(course_unit_id) references course_units(id)
);

create table assignteacher_course(
id int primary key auto_increment,
teacher_id int not null,
course_id int not null,
course_unit_id int not null,
constraint foreign key(teacher_id ) references teacher(id) on delete cascade,
constraint foreign key course_fk(course_id) references course(id) on delete cascade,
constraint foreign key course_unit_fk(course_unit_id) references course_units(id)
);


