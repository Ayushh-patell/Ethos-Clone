import React, { useContext } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import { Link } from "react-router-dom";
import { NavMenuContext } from "../../Contexts/NavMenuContext";

const DashboardNavMobile = ({
    NavMobileAlign,
  showNavMobile,
  setshowNavMobile,
  activeTab,
  setactiveTab,
  activeVersion,
  setactiveVersion,
  setshowSetting,
  activeVersionTab,
  setactiveVersionTab,
}) => {
    const {toggleactiveNav} = useContext(NavMenuContext)

  const { Darkmode } = useContext(DarkModeContext);

  return (
    <div
      className={` ${
        showNavMobile ? "flex " : "hidden"
      } md:hidden ${NavMobileAlign?"flex-row":" flex-row-reverse"} h-screen w-screen fixed top-0 left-0 z-10`}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div
        onClick={() => {
          setshowNavMobile(false);
        }}
        className=" w-[30%] cursor-pointer"
        aria-description="close menu"
      ></div>
      <div
        className={` w-[70%] ${
          Darkmode ? " bg-dark_gray-900 text-white" : " bg-white text-black"
        } p-5 rounded-s-md rounded-e-md `}
       text-gray-500>
       <Link to={"/"} onClick={()=> {toggleactiveNav(1)}}> <img src="../Img/MainLogo.webp" className={` h-9 mx-auto ${Darkmode?"invert":""} `} alt="" /></Link>
        <Link to={"/Dashboard/"}>
          <div
            onClick={() => {
              setactiveTab(1);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 1
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-chart-line p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                Dashboard
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/Dashboard/Position"}>
          <div
            onClick={() => {
              setactiveTab(2);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 2
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-arrow-up p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                My Position
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/Dashboard/Stability"}>
          <div
            onClick={() => {
              setactiveTab(3);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 3
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-right-left rotate-90 p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                Stability Pool
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/Dashboard/Staking"}>
          <div
            onClick={() => {
              setactiveTab(4);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 4
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-layer-group p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                Staking Pool
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/Dashboard/Analytics"}>
          <div
            onClick={() => {
              setactiveTab(5);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 5
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-chart-column p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                Analytics
              </p>
            </div>
          </div>
        </Link>
        <Link
          to={"/Dashboard/sTERN"}
          className={`${activeVersion === "Version: 1" ? "block" : "hidden"}`}
        >
          <div
            onClick={() => {
              setactiveTab(6);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 6
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-vault p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                sTERN Vault
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/Dashboard/OATH"}>
          <div
            onClick={() => {
              setactiveTab(7);
            }}
            className={` rounded-xl p-3 flex items-center gap-1 ${
              activeTab === 7
                ? Darkmode
                  ? " bg-dark_gray-900 text-white"
                  : " bg-white text-black"
                : " text-gray-500"
            } `}
          >
            <i
              className={`fa-solid fa-right-left p-3 rounded-md ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } `}
            ></i>
            <div className=" flex-1">
              <p
                className={`${
                  Darkmode
                    ? " hover:text-white"
                    : "  hover:text-dark_gray-900"
                }`}
              >
                Migrating OATH
              </p>
            </div>
          </div>
        </Link>

        <div
          onClick={() => {
            setactiveVersionTab(!activeVersionTab);
          }}
          className={` p-3 rounded-xl relative flex cursor-pointer items-center gap-3 border ${
            Darkmode
              ? " border-gray-800 bg-dark_gray-900"
              : " border-black bg-white"
          }`}
        >
          {activeVersion} <i className="fa-solid fa-angle-down"></i>
          <div
            className={` ${
              activeVersionTab ? "block" : "hidden"
            } absolute -top-44 left-0 ${
              Darkmode
                ? " border-gray-800 bg-dark_gray-900"
                : " border-black bg-white"
            } p-3 rounded-xl border `}
          >
            <Link to={"/Dashboard/"}>
              <p
                onClick={() => {
                  setactiveVersion("Version: 2.1");
                  setactiveTab(1);
                }}
                className=" cursor-pointer py-3 border-y"
              >
                Version: 2.1
              </p>
            </Link>
            <Link to={"/Dashboard/"}>
              <p
                onClick={() => {
                  setactiveVersion("Version: 2");
                  setactiveTab(1);
                }}
                className=" cursor-pointer py-3 border-y"
              >
                Version: 2
              </p>
            </Link>
            <Link to={"/Dashboard/"}>
              <p
                onClick={() => {
                  setactiveVersion("Version: 1");
                  setactiveTab(1);
                }}
                className=" cursor-pointer py-3 border-y"
              >
                Version: 1
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex justify-between items-center">
          {" "}
          <i
            onClick={() => {
              setshowSetting(true);
            }}
            className="fa-solid fa-gear h-5"
          ></i>
          <div
            className={` p-3 rounded-xl flex items-center gap-3 ${
              Darkmode ? " bg-dark_gray-900 " : "  bg-white"
            }`}
          >
            <i className="fa-solid fa-wallet"></i> Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavMobile;
