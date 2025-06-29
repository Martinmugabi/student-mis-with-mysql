import { deleteteacherById, fetchteacherById, fetchTeachers, insertteacher, updateteacherById } from "../service/TeacherServices.js";
import { HttpResponse } from "../Response/Response.js";
//import { Teacher } from "../interface/Teacher.js";

export const getTeachers = async (req, res) => {
  try {
    const [rows] = await fetchTeachers();
    res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "Teachers retrieved", rows));
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// GET teacher by ID
export const getteacherById = async (req, res) => {
  try {
    const [rows] = await fetchteacherById(req.params.teacherId);
    if (rows.length > 0) {
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "teacher retrieved", rows));
    } else {
      res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "teacher does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// PUT update teacher
export const updateteacher = async (req, res) => {
  try {
    const [existing] = await fetchteacherById(req.params.teacherId);
    if (existing.length > 0) {
      const teacher = { ...req.body };
      await updateteacherById( teacher, req.params.teacherId);
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "teacher updated", { ...teacher, id: req.params.teacherId }));
    } else {
      res.status(Code.NOT_FOUND). send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "teacher does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// POST create teacher
export const createteacher = async (req, res) => {
    try {
      const teacher = { ...req.body };
      const [result] = await insertteacher(teacher);
      const createdteacher = { id: result.insertId, ...teacher };
      res.status(Code.CREATED).send(new HttpResponse(Code.CREATED, Status.CREATED, "teacher created", createdteacher));
    } catch (err) {
      res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
    }
  };



// DELETE teacher
export const deleteteacher = async (req, res) => {
  try {
    const [existing] = await fetchteacherById(req.params.teacherId);
    if (existing.length > 0) {
      await deleteteacherById(req.params.teacherId);
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, " teacher deleted"));
    } else {
      res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "teacher does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};