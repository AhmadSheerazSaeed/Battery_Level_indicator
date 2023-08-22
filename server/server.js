import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import batteryRouter from "./routes/levels/battery/batteryRoutes.js";

//imports for locating our directory (for deployment)
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const portNumber = process.env.PORT;

app.use("/api", batteryRouter);

app.listen(portNumber, (req, res) => {
  console.log(`Server started on http://localhost:${portNumber}`);
});

//serve our files statically
app.use(express.static(path.join(__dirname, "../dist")));
//any other request made serve the index.html of our production build frontend.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "../dist/index.html");
});
