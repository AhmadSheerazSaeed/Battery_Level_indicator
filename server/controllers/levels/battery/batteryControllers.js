import express from "express";

// battery level store in this variable
// this can also be reset to mimic that
// battery level is 100% again or start charging
let batteryLevelIndicator = 100;

const continousBatteryLevel = () => {
  batteryLevelIndicator -= 10;
  return batteryLevelIndicator.toFixed(2);
};

export const batteryLevel = (req, res) => {
  const batteryLevel = continousBatteryLevel();
  return res.status(200).json({ battery_level: batteryLevel });
};

export const batteryStartCharging = (req, res) => {
  batteryLevelIndicator = 100;
  return res.status(200).json({ message: "Battery starts Charging" });
};

export default { batteryLevel, batteryStartCharging };
