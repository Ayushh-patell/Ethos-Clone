import React from "react";
import NavigationInfoBar from "./NavigationInfoBar";
import { chainList, networkList, reserveList } from "../ListData";

const NavigationInfo = () => {
  return (
    <div className=" p-4">
      <div id="AccessingReserve" aria-hidden className=" mb-28"></div>

      <h4 className=" text-3xl font-bold title my-5">
        Accessing Ethos Reserve
      </h4>
      {reserveList.map((item, i) => (
        <NavigationInfoBar
          key={i}
          name={item.name}
          link={item.link}
          btnText={item.btnText}
          text={item.text}
        />
      ))}
      <h4 className=" text-3xl font-bold title my-5">
        Accessing Optimism Network
      </h4>
      {networkList.map((item, i) => (
        <NavigationInfoBar
          key={i}
          name={item.name}
          link={item.link}
          btnText={item.btnText}
          text={item.text}
        />
      ))}
      <h4 className=" text-3xl font-bold title my-5">Chain Information</h4>
      {chainList.map((item, i) => (
        <NavigationInfoBar
          key={i}
          name={item.name}
          link={item.link}
          btnText={item.btnText}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default NavigationInfo;
