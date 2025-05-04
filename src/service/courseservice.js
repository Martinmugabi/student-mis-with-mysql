// services/Studentervice.js
import { connection } from "../mysqlConn/Connection.js";
import { COURSE_QUERY} from "../query/mysqlQueries.js";

/**
 * Fetch all course from the database.
 */
export const fetchcourse = async () => {
  const pool = await connection();
  const result = await pool.query(COURSE_QUERY.SELECT_COURSE);
  return result;
};

/**
 * Fetch a single course by ID.
 */
export const fetchcourseById = async (id) => {
  const pool = await connection();
  const result = await pool.query(COURSE_QUERY.SELECT_COURSE_BY_ID, [id]);
  return result;
};

/**
 * Insert a new course into the database.
 */
export const insertcourse = async (course) => {
  const pool = await connection();
  const result = await pool.query(COURSE_QUERY.INSERT_COURSE, Object.values(course));
  return result;
};

/**   
 * Update an existing course.
 */
export const updatecourseById = async (course, id) => {
  const pool = await connection();
  const result = await pool.query(COURSE_QUERY.UPDATE_COURSE, [...Object.values(course), id]);
  return result;
};

/**
 * Delete a course by ID.
 */
export const deletecourseById = async (id) => {
  const pool = await connection();
  const result = await pool.query(COURSE_QUERY.DELETE_COURSE, [id]);
  return result;
};
