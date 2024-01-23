import React, { useContext } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";

const DashboardOATH = () => {
  const { Darkmode } = useContext(DarkModeContext);

  return (
    <div className="">
      <div
        className={` rounded-2xl p-6 gap-5 shadow-lg ${
          Darkmode ? " bg-dark_gray-900" : " bg-white"
        } flex flex-col justify-center items-center`}
      >
        <i
          className="fa-solid fa-right-left p-5 rounded"
          style={{ backgroundColor: "#80008049", color: "#80008085" }}
        ></i>
        <h4 className=" title text-xl font-semibold">Migrating OATH</h4>
        <p className=" text-gray-800 opacity-60 font-semibold text-center">
        Use this tool to migrate your deprecated OATH tokens to the new token contract.
        </p>
        <div
          style={{ background: "linear-gradient(90deg,#cfb4f9, #c8f8f8)" }}
          className=" p-5 rounded-md"
        >
          Connect Wallet
        </div>
      </div>
    </div>
  );
};

export default DashboardOATH;
