import express from "express";
import {
  batteryLevel,
  batteryStartCharging,
  moduleOneBatteryLevel,
  moduleOneBatteryStartCharging,
  moduleTwoBatteryLevel,
  moduleTwoBatteryStartCharging,
  moduleThreeBatteryLevel,
  moduleThreeBatteryStartCharging,
} from "../../../controllers/levels/battery/batteryControllers.js";

const router = express.Router();

router.get("/batterylevel", batteryLevel);
router.post("/batterystartcharging", batteryStartCharging);

// Module One
// get requests
router.get("/moduleOnebatterylevel", moduleOneBatteryLevel);
// post requests
router.post("/moudleOneBatterystartcharging", moduleOneBatteryStartCharging);

// Module Two
// get requests
router.get("/moduleTwobatterylevel", moduleTwoBatteryLevel);
// post requests
router.post("/moudleTwoBatterystartcharging", moduleTwoBatteryStartCharging);

// Module Three
// get requests
router.get("/moduleThreebatterylevel", moduleThreeBatteryLevel);
// post requests
router.post(
  "/moudleThreeBatterystartcharging",
  moduleThreeBatteryStartCharging
);

//
//
export default router;
