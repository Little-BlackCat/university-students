import { pool } from "../utils/db.js";

async function getAllUniversities (req, res) {
  // #swagger.tags = ["Universities"]
	// #swagger.summary = "Get all Universities"
  const query = 'SELECT * FROM universities;'

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

async function getUniversityById (req, res) {
  // #swagger.tags = ["Universities"]
	// #swagger.summary = "Get University by id"
  const university_id = parseInt(req.params.id); 
  const query = `
    SELECT university_id, university_name, student_name, degree 
    FROM universities 
    JOIN students 
    ON universities.id = students.university_id 
    WHERE universities.id = $1;
  `

  await pool.query(query, [university_id], (error, result) => {
    if(error) {
      throw error
    }

    res.status(200).json({
      message: 'Find university success',
      data: result.rows[0]
    })
  })
}

async function createUniversity (req, res) {
  // #swagger.tags = ["Universities"]
	// #swagger.summary = "Create University"
  const { university_name } = req.body;
  const query = 'INSERT INTO universities (university_name) VALUES ($1);'

  await pool.query(query, [university_name], (error, result) => {
    if(error) {
      throw error
    }
    res.status(201).json({
      message: `Create university: ${university_name} success.`,
      data: result.rows[0]
    })
  })
}

async function updateUniversityById (req, res) {
  // #swagger.tags = ["Universities"]
	// #swagger.summary = "Update University by id"
  const university_id = parseInt(req.params.id);
  const { university_name } = req.body;
  const query = 'UPDATE universities SET university_name = $1 WHERE id = $2;'

  await pool.query(query, [university_name, university_id], (error, result) => {
    if(error) {
      throw error
    }

    res.status(200).json({
      message: 'Update university success',
      data: result.rows[0]
    })
  })
}

async function deleteUniversityById (req, res) {
  // #swagger.tags = ["Universities"]
	// #swagger.summary = "Delete University by id"
  const university_id = parseInt(req.params.id);
  const query = 'DELETE FROM universities WHERE id = $1;'

  await pool.query(query, [university_id], (error, result) => {
    if(error) {
      throw error
    }

    res.status(200).json({
      message: 'Delete university success',
      data: result.rows[0]
    })
  })
}

export { 
  getAllUniversities,
  getUniversityById,
  createUniversity,
  updateUniversityById,
  deleteUniversityById,
}