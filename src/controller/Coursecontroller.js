import { deletecourseById, fetchcourse, fetchcourseById, insertcourse, updatecourseById } from "../service/courseservice";


export const getcourses = async (req, res) => {
  try {
    const [rows] = await fetchcourse();
    res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "courses retrieved", rows));
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// GET teacher by ID
export const getcourseById = async (req, res) => {
  try {
    const [rows] = await fetchcourseById(req.params.courseId);
    if (rows.length > 0) {
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "course retrieved", rows));
    } else {
      res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "course does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};

// PUT update course
export const updatecourse= async (req, res) => {
  try {
    const [existing] = await fetchcourseById(req.params.courseId);
    if (existing.length > 0) {
      const course = { ...req.body };
      await updatecourseById( course, req.params.courseId);
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, "course updated", { ...course, id: req.params.coursetId }));
    } else {
      res.status(Code.NOT_FOUND). send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "course does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};




// DELETE course
export const deletecourse = async (req, res) => {
  try {
    const [existing] = await fetchcourseById(req.params.StudentId);
    if (existing.length > 0) {
      await deletecourseById(req.params.teacherId);
      res.status(Code.OK).send(new HttpResponse(Code.OK, Status.OK, " course deleted"));
    } else {
      res.status(Code.NOT_FOUND).send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, "course does not exist"));
    }
  } catch (err) {
    res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
  }
};


// POST create teacher
export const createcourse = async (req, res) => {
    try {
      const course = { ...req.body };
      const [result] = await insertcourse(course);
      const createdcourse = { id: result.insertId, ...course };
      res.status(Code.CREATED).send(new HttpResponse(Code.CREATED, Status.CREATED, "course created", createdcourse));
    } catch (err) {
      res.status(Code.INTERNAL_SERVER_ERROR).send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, "An error occurred"));
    }
  };