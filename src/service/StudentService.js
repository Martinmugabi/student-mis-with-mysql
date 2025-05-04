// services/Studentervice.js
import { connection } from "../mysqlConn/Connection.js";
import { QUERY } from "../query/mysqlQueries.js";

/**
 * Fetch all Student from the database.
 */
export const fetchStudents = async () => {
  const pool = await connection();
  const result = await pool.query(QUERY.SELECT_STUDENTS);
  return result;
};

/**
 * Fetch a single student by ID.
 */
export const fetchStudentById = async (id) => {
  const pool = await connection();
  const result = await pool.query(QUERY.SELECT_STUDENT_BY_ID, [id]);
  return result;
};

/**
 * Insert a new Student into the database.
 */
export const insertStudent = async (Student) => {
  const pool = await connection();
  const result = await pool.query(QUERY.INSERT_STUDENT, Object.values(Student));
  return result;
};

/**   
 * Update an existing Student.
 */
export const updateStudentById = async (Student, id) => {
  const pool = await connection();
  const result = await pool.query(QUERY.UPDATE_STUDENT, [...Object.values(Student), id]);
  return result;
};

/**
 * Delete a Student by ID.
 */
export const deleteStudentById = async (id) => {
  const pool = await connection();
  const result = await pool.query(QUERY.DELETE_STUDENT, [id]);
  return result;
};
