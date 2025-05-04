import { Router } from 'express';
import { createteacher, deleteteacher, getteacherById, getTeachers, updateteacher } from '../controller/TeacherController.js';


const TeacherRoutes = Router();

TeacherRoutes.route('/').get(getTeachers);
  
TeacherRoutes.route('/').post(createteacher);

TeacherRoutes.route('/:teacherId').get(getteacherById);
  
TeacherRoutes.route('/:teacherId').put(updateteacher);
TeacherRoutes.route('/:teacherId').delete(deleteteacher);

export default TeacherRoutes ;
