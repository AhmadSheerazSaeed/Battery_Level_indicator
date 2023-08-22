import React from "react";
import BarChartReuseable from "../reuseableChart/BarChartReuseable";
import batteyLevelDisplayCSS from "./BatteryLevelDisplayComponent.module.css";

const BatteryLevelDisplayComponent = () => {
  return (
    <div className={batteyLevelDisplayCSS.mainWrapper}>
      <h1 className={batteyLevelDisplayCSS.headingOne}>
        Battery Status of Different Modules
      </h1>

      <div className={batteyLevelDisplayCSS.componentsWrapper}>
        {/* first module */}
        <BarChartReuseable
          getRequestBatteryLevel={
            "http://localhost:4000/api/moduleOnebatterylevel"
          }
          postRequestResetBatteryLevel={
            "http://localhost:4000/api/moudleOneBatterystartcharging"
          }
          moduleName={"MXTT-1"}
        />

        {/* second module */}
        <BarChartReuseable
          getRequestBatteryLevel={
            "http://localhost:4000/api/moduleTwobatterylevel"
          }
          postRequestResetBatteryLevel={
            "http://localhost:4000/api/moudleTwoBatterystartcharging"
          }
          moduleName={"MXAA-2"}
        />

        {/* thirdt module */}
        <BarChartReuseable
          getRequestBatteryLevel={
            "http://localhost:4000/api/modulethreebatterylevel"
          }
          postRequestResetBatteryLevel={
            "http://localhost:4000/api/moudleThreeBatterystartcharging"
          }
          moduleName={"MXTT-1"}
        />

        {/* fourth module */}
        <BarChartReuseable
          getRequestBatteryLevel={
            "http://localhost:4000/api/moduleTwobatterylevel"
          }
          postRequestResetBatteryLevel={
            "http://localhost:4000/api/moudleTwoBatterystartcharging"
          }
          moduleName={"MTXD-15-2"}
        />
      </div>
    </div>
  );
};

export default BatteryLevelDisplayComponent;
