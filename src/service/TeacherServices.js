import { TEACHER_QUERY } from "../query/mysqlQueries.js";
import { connection } from "../mysqlConn/Connection.js";


export const fetchTeachers = async () => {
  const pool = await connection();
  const result = await pool.query(TEACHER_QUERY.SELECT_TEACHER);
  return result;
};


/**
 * Fetch a single TEACHER by ID.
 */
export const fetchteacherById = async (id) => {
  const pool = await connection();
  const result = await pool.query(TEACHER_QUERY.SELECT_TEACHER_BY_ID, [id]);
  return result;
};

/**   
 * Update an existing teacher.
 */
export const updateteacherById = async (teacher, id) => {
    const pool = await connection();
    const result = await pool.query(TEACHER_QUERY.UPDATE_TEACHER, [...Object.values(teacher), id]);
    return result;
  };
  


 /**
  * Insert a new teacher into the database.
  */
 export const insertteacher = async (teacher) => {
   const pool = await connection();
   const result = await pool.query(TEACHER_QUERY.INSERT_TEACHER, Object.values(teacher));
   return result;
 };


 /**
  * Delete a teacher by ID.
  */
 export const deleteteacherById = async (id) => {
   const pool = await connection();
   const result = await pool.query(TEACHER_QUERY.DELETE_TEACHER, [id]);
   return result;
 };
