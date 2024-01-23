import React, { useContext } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";

const DashboardHome = () => {
  const { Darkmode } = useContext(DarkModeContext);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        className={` md:col-span-2 rounded-2xl p-6 gap-5 shadow-lg ${
          Darkmode ? " bg-dark_gray-900" : " bg-white"
        } flex flex-col justify-center items-center`}
      >
        <i
          className="fa-solid fa-arrow-up p-5 rounded"
          style={{ backgroundColor: "#80008049", color: "#80008085" }}
        ></i>
        <h4 className=" title text-xl font-semibold">Open a Position</h4>
        <p className=" text-gray-800 opacity-60 font-semibold text-center">
          Deposit your collateral to borrow Ethos Reserve Notes, or ERN. ERN
          loans are interest free, and cost only a small fee on issuance. You
          can use your ERN to earn passive income or trade on most popular
          decentralized exchanges.{" "}
        </p>
        <div
          style={{ background: "linear-gradient(90deg,#cfb4f9, #c8f8f8)" }}
          className=" p-5 rounded-md"
        >
          Connect Wallet
        </div>
      </div>
      <div
        className={` rounded-2xl p-6 gap-5 shadow-lg ${
          Darkmode ? " bg-dark_gray-900" : " bg-white"
        } flex flex-col justify-center items-center`}
      >
        <i
          className="fa-solid fa-right-left rotate-90 p-5 rounded"
          style={{ backgroundColor: "#80008049", color: "#80008085" }}
        ></i>
        <h4 className=" title text-xl font-semibold">Stability Pool</h4>
        <p className=" text-gray-800 opacity-60 font-semibold text-center">
        Invest ERN into the Stability Pool and earn 0 % APR through rewards and liquidation gains.{" "}
        </p>
        <div
          style={{ background: "linear-gradient(90deg,#cfb4f9, #c8f8f8)" }}
          className=" p-5 rounded-md"
        >
          Connect Wallet
        </div>
      </div>
      <div
        className={` rounded-2xl p-6 gap-5 shadow-lg ${
          Darkmode ? " bg-dark_gray-900" : " bg-white"
        } flex flex-col justify-center items-center`}
      >
        <i
          className="fa-solid fa-layer-group p-5 rounded"
          style={{ backgroundColor: "#80008049", color: "#80008085" }}
        ></i>
        <h4 className=" title text-xl font-semibold">Stacking Pool</h4>
        <p className=" text-gray-800 opacity-60 font-semibold text-center">
        Stake your Bonded OATH tokens and earn up to 6% APR through platform and trading fees.{" "}
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
// cfb4f9 c8f8f8

export default DashboardHome;
