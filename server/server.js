import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import batteryRouter from "./routes/levels/battery/batteryRoutes.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const portNumber = process.env.PORT;

// app.get("/batterylevel", (req, res) => {
//   return res.status(200).json({ battery_level: 50 });
// });

app.use("/api", batteryRouter);

app.listen(portNumber, (req, res) => {
  console.log(`Server started on http://localhost:${portNumber}`);
});
