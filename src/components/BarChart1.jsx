import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import barChart1CSS from "./barChart1.module.css";

const BarChart1 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const [options, setObject] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Battery Level"],
    },
    // the displayed values on the y-axis are always from 0 to 100
    yaxis: {
      min: 0,
      max: 100,
    },
  });

  // series are the data which would be displayed
  // and we can add more series and they would be
  // displayed in addition to the previous series
  const [series, setSeries] = useState([
    {
      name: "battery_level_value",
      data: [],
    },
  ]);

  // data fetch from server
  const fetchedBatteryLevel = async () => {
    try {
      const batteryLevelFromApi = await axios.get("/api/batterylevel");

      const newBatteryLevel = batteryLevelFromApi.data.battery_level;

      setSeries([
        {
          name: "battery_level_value",
          data: [newBatteryLevel],
        },
      ]);
    } catch (error) {
      setErrors(error);
    } finally {
      setIsLoading(false);
    }
  };

  // start charging the battery
  const handleStartCharging = async () => {
    try {
      await axios.post("/api/batterystartcharging");
    } catch (error) {
      setErrors(error);
    }
  };

  // this will run when the component will mount
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchedBatteryLevel();
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // this useEffect will run every time when the series state will change
  useEffect(() => {
    if (series[0].data < 20) {
      handleStartCharging();
    }
  }, [series]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errors) {
    return <p>Error: {errors.message}</p>;
  }

  return (
    <div className={barChart1CSS.wrapper}>
      <h1 className={barChart1CSS.headingOne}>Module 1</h1>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="450px"
      />

      <p className={barChart1CSS.messageCriticallyLow}>
        The charging sequence would be automatically initiated, when the battery
        has less than 20% of charging
      </p>
    </div>
  );
};

export default BarChart1;
