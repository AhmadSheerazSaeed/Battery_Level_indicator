import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import batteryRouter from "./routes/levels/battery/batteryRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const portNumber = process.env.PORT;

app.use("/api", batteryRouter);

app.listen(portNumber, (req, res) => {
  console.log(`Server started on http://localhost:${portNumber}`);
});
