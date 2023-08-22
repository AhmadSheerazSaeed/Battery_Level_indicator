import express from "express";

// battery level store in this variable
// this can also be reset to mimic that
// battery level is 100% again or start charging
let batteryLevelIndicator = 100;

let moduleOneBatteryLevelIndicator = 100;
let moduleTwoBatteryLevelIndicator = 100;
let moduleThreeBatteryLevelIndicator = 100;

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

// Module One
// function to mimic the decreasing the battery level
const moduleOneBatteryLevelDecreasing = () => {
  moduleOneBatteryLevelIndicator -= 5;
  return moduleOneBatteryLevelIndicator.toFixed(2);
};

// getting the battery level
export const moduleOneBatteryLevel = (req, res) => {
  const batteryLevel = moduleOneBatteryLevelDecreasing();
  return res.status(200).json({ battery_level: batteryLevel });
};

// starting the charging of battery when the battery level
// is less than 20%
export const moduleOneBatteryStartCharging = (req, res) => {
  moduleOneBatteryLevelIndicator = 100;
  return res.status(200).json({ message: "Battery starts Charging" });
};

// Module Two
// function to mimic the decreasing the battery level
const moduleTwoBatteryLevelDecreasing = () => {
  moduleTwoBatteryLevelIndicator -= 8;
  return moduleTwoBatteryLevelIndicator.toFixed(2);
};
// getting the battery level
export const moduleTwoBatteryLevel = (req, res) => {
  const batteryLevel = moduleTwoBatteryLevelDecreasing();
  return res.status(200).json({ battery_level: batteryLevel });
};

// starting the charging of battery when the battery level
// is less than 20%
export const moduleTwoBatteryStartCharging = (req, res) => {
  moduleTwoBatteryLevelIndicator = 100;
  return res.status(200).json({ message: "Battery starts Charging" });
};

// Module Three
// function to mimic the decreasing the battery level
const moduleThreeBatteryLevelDecreasing = () => {
  moduleThreeBatteryLevelIndicator -= 6;
  return moduleThreeBatteryLevelIndicator.toFixed(2);
};
// getting the battery level
export const moduleThreeBatteryLevel = (req, res) => {
  const batteryLevel = moduleThreeBatteryLevelDecreasing();
  return res.status(200).json({ battery_level: batteryLevel });
};

// starting the charging of battery when the battery level
// is less than 20%
export const moduleThreeBatteryStartCharging = (req, res) => {
  moduleThreeBatteryLevelIndicator = 100;
  return res.status(200).json({ message: "Battery starts Charging" });
};

//
//
//
export default {
  batteryLevel,
  batteryStartCharging,
  moduleOneBatteryLevel,
  moduleOneBatteryStartCharging,
  moduleTwoBatteryLevel,
  moduleTwoBatteryStartCharging,
  moduleThreeBatteryLevel,
  moduleThreeBatteryStartCharging,
};
