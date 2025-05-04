export const QUERY = {
    SELECT_STUDENTS: 'SELECT * FROM STUDENTS',
    SELECT_STUDENT_BY_ID: 'SELECT * FROM STUDENTS WHERE id = ?',
    INSERT_STUDENT: 'INSERT INTO STUDENTS (first_name, last_name, email, address,phone, status) VALUES (?, ?, ?, ?,?,?)',
    UPDATE_STUDENT: 'UPDATE STUDENTS SET first_name = ?, last_name = ?, email = ?, address = ?, phone = ?, status = ? WHERE id = ?',
    DELETE_STUDENT: 'DELETE FROM STUDENTS WHERE id = ?'

};

export const TEACHER_QUERY = {
    SELECT_TEACHER: 'SELECT * FROM TEACHER',
    SELECT_TEACHER_BY_ID: 'SELECT * FROM TEACHER WHERE id = ?',
    INSERT_TEACHER: 'INSERT INTO TEACHER(first_name, last_name, email, address,) VALUES (?, ?, ?, ?,)',
    UPDATE_TEACHER: 'UPDATE TEACHER SET first_name = ?, last_name = ?, email = ?, address = ?, WHERE id = ?',
    DELETE_TEACHER: 'DELETE FROM TEACHER WHERE id = ?'

}


export const COURSE_QUERY = {
    SELECT_COURSE: 'SELECT * FROM COURSE',
    SELECT_COURSE_BY_ID: 'SELECT * FROM COURSE WHERE id = ?',
    INSERT_COURSE: 'INSERT INTO COURSE(course_name, faculty,) VALUES (?, ?,)',
    UPDATE_COURSE: 'UPDATE COURSE SET course_name = ?, faculty = ?, WHERE id = ?',
    DELETE_COURSE: 'DELETE FROM COURSE WHERE id = ?'

}