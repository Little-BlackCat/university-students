import express from 'express';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger-docs/swagger.json" assert { type: "json" };
import { createTable } from './utils/db.js';

import { universityRoute } from './routes/universityRoute.js';
import { studentRoute } from './routes/studentRoute.js';

 
const app = express();
const PORT = 3000;
app.use(cors()); 
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  // #swagger.tags = ["Testing"]
	// #swagger.summary = "Test API"
	// #swagger.description = "Test API before use another."
  res.send(
    "<h1 style='font-size: 40px; color: green; text-align: center;'>Welcome!! <br /> Your server is running and healthy!!!!!</h1>" 
  );
});

app.use('/universities', universityRoute);
app.use('/students', studentRoute);


createTable().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
});


