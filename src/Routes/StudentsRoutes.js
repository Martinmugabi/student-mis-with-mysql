import { Router } from 'express';
import {
  createStudent,
  deleteStudent,
  getStudentById,
  getStudents,
  updateStudent
} from "../controller/controller.js"

const StudentRoutes = Router();

StudentRoutes.route('/get/all-students').get(getStudents)
StudentRoutes.route('/create/new-student').post(createStudent);

StudentRoutes.route('/get/student-by-id/:StudentId').get(getStudentById)
StudentRoutes.route('/update/student-by-id/:StudentId').put(updateStudent)
StudentRoutes.route('/get/student-by-id/:StudentId').delete(deleteStudent);

export default StudentRoutes;
