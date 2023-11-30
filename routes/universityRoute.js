import express from 'express'
import { 
  createUniversity, 
  deleteUniversityById, 
  getAllUniversities, 
  getUniversityById, 
  updateUniversityById
} from '../controllers/universityController.js'

const router = express.Router();

router.route("/")
  .get(getAllUniversities)
  .post(createUniversity)
  
router.route("/:id")
  .get(getUniversityById)
  .put(updateUniversityById)
  .delete(deleteUniversityById)

export { router as universityRoute }; 
