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
          getRequestBatteryLevel={"/api/moduleOnebatterylevel"}
          postRequestResetBatteryLevel={"/api/moudleOneBatterystartcharging"}
          moduleName={"MXTT-1"}
        />

        {/* second module */}
        <BarChartReuseable
          getRequestBatteryLevel={"/api/moduleTwobatterylevel"}
          postRequestResetBatteryLevel={"/api/moudleTwoBatterystartcharging"}
          moduleName={"MXAA-2"}
        />

        {/* thirdt module */}
        <BarChartReuseable
          getRequestBatteryLevel={"/api/modulethreebatterylevel"}
          postRequestResetBatteryLevel={"/api/moudleThreeBatterystartcharging"}
          moduleName={"MXTT-1"}
        />

        {/* fourth module */}
        <BarChartReuseable
          getRequestBatteryLevel={"/api/moduleTwobatterylevel"}
          postRequestResetBatteryLevel={"/api/moudleTwoBatterystartcharging"}
          moduleName={"MTXD-15-2"}
        />
      </div>
    </div>
  );
};

export default BatteryLevelDisplayComponent;
