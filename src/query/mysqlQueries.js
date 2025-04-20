export const QUERY = {
    SELECT_STUDENTS: 'SELECT * FROM STUDENTS',
    SELECT_STUDENT_BY_ID: 'SELECT * FROM STUDENTS WHERE id = ?',
    INSERT_STUDENT: 'INSERT INTO STUDENTS (first_name, last_name, email, address,phone, status) VALUES (?, ?, ?, ?,?,?)',
    UPDATE_STUDENT: 'UPDATE STUDENTS SET first_name = ?, last_name = ?, email = ?, address = ?, phone = ?, status = ? WHERE id = ?',
    DELETE_STUDENT: 'DELETE FROM STUDENTS WHERE id = ?'

};