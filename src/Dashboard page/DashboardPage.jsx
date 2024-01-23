import React, { useContext, useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { NavMenuContext } from "../Contexts/NavMenuContext";
import DashboardNavMobile from "./Components/DashboardNavMobile";
import DashboardSettings from "./Components/DashboardSettings";
import DashboardTerms from "./Components/DashboardTerms";

const DashboardPage = () => {
  const {toggleactiveNav} = useContext(NavMenuContext)
  const { Darkmode } = useContext(DarkModeContext);
  const [showNavMobile, setshowNavMobile] = useState(false)
  const [activeTab, setactiveTab] = useState(1);
  const [activeVersion, setactiveVersion] = useState("Version: 2.1");
  const [activeVersionTab, setactiveVersionTab] = useState(false);
  const [showSetting, setshowSetting] = useState(false);
  const [NavMobileAlign, setNavMobileAlign] = useState(true)
  const [showTerm, setshowTerm] = useState(true)

  return (
    <div
      className={` ${Darkmode ? " bg-black text-white" : "bg-gray-100"} p-5`}
    >
      <div
        className={` md:flex hidden justify-between items-center fixed top-0 w-full left-0 p-5 z-10 ${
          Darkmode ? " bg-black text-white" : "bg-gray-100"
        } `}
      >
        <Link onClick={()=> {toggleactiveNav(1)}} to={"/"}><img src="./Img/MainLogo.webp" className={` h-14 ${Darkmode? "invert":""}`} alt="" /></Link>
        <div className=" flex justify-between items-center gap-3">
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
              } absolute -bottom-44 left-0 ${
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
          <i onClick={()=> {setshowSetting(true)}} className="fa-solid fa-gear h-5"></i>
          <div
            className={` p-3 rounded-xl flex items-center gap-3 ${
              Darkmode ? " bg-dark_gray-900 " : "  bg-white"
            }`}
          >
            <i className="fa-solid fa-wallet"></i> Connect Wallet
          </div>
        </div>
      </div>
      {/* mobile Nav */}
      <div className=" md:hidden flex  justify-between items-center py-7 px-4">

            <Link to={"/"} onClick={()=> {toggleactiveNav(1)}}><button className={` p-3 rounded-md ${Darkmode?" bg-dark_gray-900 text-white":" bg-white text-black"} `}>Home</button></Link>
          <button onClick={()=> {setshowNavMobile(true)}} className={` p-3 rounded-md ${Darkmode?" bg-dark_gray-900 text-white":" bg-white text-black"} `}><i class="fa-solid fa-bars"></i></button>
      </div>
      <div className=" flex mt-14">
        <div className=" w-1/4 pt-10 md:block hidden">
          <div className=" sticky top-24 mt-3 flex flex-col gap-1 p-3  h-[80vh] overflow-scroll">
            <Link to={"/Dashboard/"}>
              <div
                onClick={() => {
                  setactiveTab(1);
                }}
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 1
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-chart-line p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
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
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 2
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-arrow-up p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
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
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 3
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-right-left rotate-90 p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
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
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 4
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-layer-group p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
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
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 5
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-chart-column p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
                    }`}
                  >
                    Analytics
                  </p>
                </div>
              </div>
            </Link>
            <Link to={"/Dashboard/sTERN"}
              className={`${
                activeVersion === "Version: 1" ? "block" : "hidden"
              }`}
            >
              <div
                onClick={() => {
                  setactiveTab(6);
                }}
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 6
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-vault p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
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
                className={` rounded-xl p-6 flex items-center gap-3 ${
                  activeTab === 7
                    ? Darkmode
                      ? " bg-dark_gray-900"
                      : " bg-white"
                    : ""
                } `}
              >
                <i
                  class={`fa-solid fa-right-left p-3 rounded-md ${
                    Darkmode ? " bg-dark_gray-900" : " bg-white"
                  } `}
                ></i>
                <div className=" flex-1">
                  <p
                    className={`${
                      Darkmode
                        ? " hover:text-white text-gray-700"
                        : " text-gray-500 hover:text-dark_gray-900"
                    }`}
                  >
                    Migrating OATH
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" md:w-3/4 py-10">
          <Outlet />
          <div className=" mt-5 flex items-center gap-3 ">
            <Link onClick={()=> {toggleactiveNav(6)}} to={"/Docs"}>
              <div
                className={` ${
                  Darkmode ? " bg-dark_gray-900" : " bg-white"
                } p-5 rounded-lg shadow`}
              >
                Docs
              </div>
            </Link>
            <div
            onClick={()=> {setshowTerm(true)}}
              className={` cursor-pointer ${
                Darkmode ? " bg-dark_gray-900" : " bg-white"
              } p-5 rounded-lg shadow`}
            >
              Terms of Use
            </div>
            <i className="fa-brands fa-discord text-xl"></i>
            <i className="fa-brands fa-twitter text-xl"></i>
          </div>
        </div>
      </div>
      <DashboardNavMobile NavMobileAlign={NavMobileAlign}  showNavMobile={showNavMobile} setshowNavMobile={setshowNavMobile} activeTab={activeTab} setactiveTab={setactiveTab} activeVersion={activeVersion} setactiveVersion={setactiveVersion} setshowSetting={setshowSetting} activeVersionTab={activeVersionTab} setactiveVersionTab={setactiveVersionTab}/>
      <DashboardSettings showSetting={showSetting} setshowSetting={setshowSetting} NavMobileAlign={NavMobileAlign} setNavMobileAlign={setNavMobileAlign}/>
      <DashboardTerms showTerm={showTerm} setshowTerm={setshowTerm} />
    </div>
  );
};

export default DashboardPage;
