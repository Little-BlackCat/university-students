import * as pg from 'pg';
import { createUniversityTable } from '../models/universityModel.js';
import { createStudentTable } from '../models/studentModel.js';
 
const { Pool } = pg.default;
 
// Create a PostgreSQL connection pool 
const pool = new Pool({ 
  user: 'postgres',
  host: 'db',
  database: 'university-students',
  password: 'example',
  port: '5432', 
});   

/** 
 * The function `createTable` creates two tables in a PostgreSQL database: `universities` and
 * `students`, with the necessary columns and constraints.
 */
async function createTable() {
  // Add a delay of 3 seconds 
  await new Promise(resolve => setTimeout(resolve, 3000));
  const client = await pool.connect(); 

  try {
    //Create the 'university' table
    await client.query(createUniversityTable);

    // Create the 'student' table
    await client.query(createStudentTable);

    console.log('Table create successfully!');
  } catch (err) {
    console.error('Error connecting database', err);
  } finally {
    client.release();
  }
};

// Handle database errors
/* The code `pool.on('error', (err) => { ... })` is setting up an event listener for any errors that occur on the database connection pool. 
If an error occurs, the callback function `(err) => { ... }` will be executed. In this case, the callback function logs the error message to the console and exits the process with a status code of -1. 
This ensures that any unexpected errors on the database connection are properly handled and the application does not continue running in an unstable state. */
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export { pool, createTable };