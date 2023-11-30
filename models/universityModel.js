const createUniversityTable = `
  CREATE TABLE IF NOT EXISTS universities (
    id SERIAL PRIMARY KEY,
    university_name VARCHAR(255) NOT NULL
  );
`

export { createUniversityTable };