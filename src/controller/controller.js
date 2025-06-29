// controllers/StudentController.js
import { request,response } from "express";
import { Student } from "../types/Students.js";
import { HttpResponse } from "../Response/Response.js";
import {
  fetchStudents,
  fetchStudentById,
  insertStudent,
  updateStudentById,
  deleteStudentById
} from "../service/StudentService.js"



// GET all Students
export const getStudents = async (req, res) => {
  try {
    const [rows] = await fetchStudents();
    res.status(200).send(new HttpResponse(200, "OK", "Students retrieved", rows));
  } catch (err) {
    res.status(500).send(new HttpResponse(500, "INTERNAL SERVER ERROR", "An error occurred"));
  }
};

// GET Student by ID
export const getStudentById = async (req, res) => {
  try {
    const [rows] = await fetchStudentById(req.params.StudentId);
    if (rows.length > 0) {
      res.status(200).send(new HttpResponse(200, "OK", "Student retrieved", rows));
    } else {
      res.status(404).send(new HttpResponse(404, "NOT_FOUND", "Student does not exist"));
    }
  } catch (err) {
    res.status(500).send(new HttpResponse(500, "INTERNAL_SERVER_ERROR", "An error occurred"));
  }
};

// POST create Student
export const createStudent = async (req, res) => {
  try {
    const Student = { ...req.body };
    const [result] = await insertStudent(Student);
    const createdStudent = { id: result.insertId, ...Student };
    res.status(Code.CREATED).send(new HttpResponse(Code.CREATED, Status.CREATED, "Student created", createdStudent));
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// PUT update Student
export const updateStudent = async (req, res) => {
  try {
    const [existing] = await fetchStudentById(req.params.StudentId);
    if (existing.length > 0) {
      const Student = { ...req.body };
      await updateStudentById(Student, req.params.StudentId);
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "Student updated", { ...Student, id: req.params.StudentId }));
    } else {
      res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "Student does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// DELETE Student
export const deleteStudent = async (req, res) => {
  try {
    const [existing] = await fetchStudentById(req.params.StudentId);
    if (existing.length > 0) {
      await deleteStudentById(req.params.StudentId);
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "Student deleted"));
    } else {
      res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "Student does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};
