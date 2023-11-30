import { pool } from "../utils/db.js";

async function getAllStudents (req, res) {
  // #swagger.tags = ["Students"]
	// #swagger.summary = "Get all Students"
  const query = 'SELECT * FROM students;'

  await pool.query(query, (error, result) => {
    if(error) {
      throw error
    }

    res.json({
      message: "Get data success.",
      data: result.rows
    })
  });
}

async function getStudentById (req, res) {
  // #swagger.tags = ["Students"]
	// #swagger.summary = "Get Student by id then show all Student's name"
  const student_id = parseInt(req.params.id);
  const query_name = 'SELECT student_name FROM students WHERE id = $1'
  const student_name = await pool.query(query_name, [student_id]);

  if(student_name.rows.length === 0) {
    res.status(404).json({ message: 'Student not found' });
      return;
  }

  const studentData = student_name.rows[0].student_name

  const query = `
    SELECT students.*, universities.university_name 
    FROM students
    JOIN universities
    ON students.university_id = universities.id
    WHERE students.student_name = $1;
  `

  await pool.query(query, [studentData], (error, result) => {
    if(error) {
      throw error
    }

    res.status(200).json({
      message: 'Find student success',
      data: result.rows
    })
  })
}

async function createStudent (req, res) {
  // #swagger.tags = ["Students"]
	// #swagger.summary = "Create Student"
  const { student_name, degree, university_id } = req.body;
  const query = 'INSERT INTO students (student_name, degree, university_id) VALUES ($1, $2, $3);'

  await pool.query(query, [student_name, degree, university_id], (error, result) => {
    if(error) {
      throw error
    }
    res.status(201).json({
      message: `Create student: ${student_name} success.`,
      data: result.rows[0]
    })
  })
}

async function updateStudentById (req, res) {
  // #swagger.tags = ["Students"]
	// #swagger.summary = "Update Student by id"
  const student_id = parseInt(req.params.id);
  const { student_name, degree } = req.body;
  const query = 'UPDATE students SET student_name = $1, degree = $2 WHERE id = $3;'

  await pool.query(query, [student_name, degree, student_id], (error, result) => {
    if(error) {
      throw error
    }

    res.status(200).json({
      message: 'Update student success',
      data: result.rows[0]
    })
  })
}

async function deleteStudentById (req, res) {
  // #swagger.tags = ["Students"]
	// #swagger.summary = "Delete Student by id"
  const student_id = parseInt(req.params.id);
  const query = 'DELETE FROM students WHERE id = $1;'

  await pool.query(query, [student_id], (error, result) => {
    if(error) {
      throw error
    }

    res.status(200).json({
      message: 'Delete student success',
      data: result.rows[0]
    })
  })
}

export {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
}