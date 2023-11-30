import express from 'express'
import { createStudent, deleteStudentById, getAllStudents, getStudentById, updateStudentById } from '../controllers/studentController.js';

const router = express.Router();

router.route("/")
  .get(getAllStudents)
  .post(createStudent)

router.route("/:id")
  .get(getStudentById)
  .put(updateStudentById)
  .delete(deleteStudentById)

export {
  router as studentRoute
}
