
const createStudentTable = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    degree VARCHAR(50) NOT NULL,
    university_id INTEGER REFERENCES universities(id) ON DELETE CASCADE
  );
`

export { createStudentTable };