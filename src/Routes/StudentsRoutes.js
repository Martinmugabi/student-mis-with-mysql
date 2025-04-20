import { Router } from 'express';
import {
  createStudent,
  deleteStudent,
  getStudentById,
  getStudents,
  updateStudent
} from "../controller/controller.js"

const StudentRoutes = Router();

StudentRoutes.route('/')
  .get(getStudents)
  .post(createStudent);

StudentRoutes.route('/:StudentId')
  .get(getStudentById)
  .put(updateStudent)
  .delete(deleteStudent);

export default StudentRoutes;
