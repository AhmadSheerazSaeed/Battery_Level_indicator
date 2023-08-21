import express from "express";
import {
  batteryLevel,
  batteryStartCharging,
} from "../../../controllers/levels/battery/batteryControllers.js";

const router = express.Router();

router.get("/batterylevel", batteryLevel);
router.post("/batterystartcharging", batteryStartCharging);

export default router;
