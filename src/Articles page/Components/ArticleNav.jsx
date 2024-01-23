import React, { useContext, useState } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import { NavMenuContext } from "../../Contexts/NavMenuContext";
import { Link } from "react-router-dom";
import { Github, Twitter } from "lucide-react";

const ArticleNav = () => {
  const { Darkmode } = useContext(DarkModeContext);
  const { activeNav, toggleactiveNav } = useContext(NavMenuContext);
  const [showMenu, setshowMenu] = useState(false);

  return (
    <nav
      className={`${
        Darkmode ? " text-white bg-dark_gray-900" : ""
      } flex flex-col h-screen py-4 pl-2 w-16 z-10 fixed justify-between left-0 top-0`}
    >
      <button
        onClick={() => {
          setshowMenu(true);
        }}
        className=" menuBtn relative z-10 w-fit"
      >
        <i className={`fa-solid fa-bars-staggered p-5 rounded-full cursor-pointer ${
        Darkmode ? " text-white bg-dark_gray-900" : "bg-gray-100"
      }`}></i>
      </button>

      <Link to={"/"} onClick={()=> {toggleactiveNav(1)}}>
      <img
        style={{ transform: "rotate(-90deg)", transformOrigin: "50% bottom" }}
        className={` h-10 ${Darkmode ? "invert" : ""}`}
        src="./Img/MainLogo.webp"
        alt=""
      />
      </Link>
      <div
        className={`navbar flex w-fit mb-10 justify-between `}
      >
        <Link to={"/Dashboard"}>
        <button
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% bottom" }}
          className={` rounded md:p-4 p-2 shadow  ${
            Darkmode ? " bg-gray-800 text-white" : " bg-gray-200 text-black "
          }`}
        >
          Dashboard
        </button>
        </Link>
      </div>

      {showMenu && (
        <>
          <div
            className={` sm:flex hidden fixed z-20 md:px-20 px-10 top-0 left-0 h-full w-full ${
              Darkmode ? " text-white bg-dark_gray-900" : " text-black bg-white"
            } opacity-95`}
          >
            <button
              onClick={() => {
                setshowMenu(false);
              }}
              className="menuBtn top-0 left-0 absolute z-[21] aspect-square"
            >
              <i
                className={`fa-solid fa-xmark md:p-5 p-3 rounded-full m-5 ${
                  Darkmode ? " bg-gray-800 text-white" : " bg-gray-200"
                }`}
              ></i>
            </button>
            <div className=" w-1/2 mt-20">
              <Link
                onClick={() => {
                  toggleactiveNav(1);
                }}
                to={"/"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 1 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  01
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>HOME</p>
                  <p className="">HOME</p>
                </div>
              </Link>
              <Link
                onClick={() => {
                  toggleactiveNav(2);
                }}
                to={"/Articles"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 2 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  02
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>ARTICLES</p>
                  <p className="">ARTICLES</p>
                </div>
              </Link>
              <Link
                onClick={() => {
                  toggleactiveNav(3);
                }}
                to={"https://forum.oath.eco/"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 3 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  03
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>GOVERNANCE</p>
                  <p className="">GOVERNANCE</p>
                </div>
              </Link>
              <Link
                onClick={() => {
                  toggleactiveNav(4);
                }}
                to={"/Partners"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 4 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  04
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>PARTNERS</p>
                  <p className="">PARTNERS</p>
                </div>
              </Link>
              <Link
                onClick={() => {
                  toggleactiveNav(5);
                }}
                to={"https://discord.com/invite/oathdefi"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 5 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  05
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>DISCORD</p>
                  <p className="">DISCORD</p>
                </div>
              </Link>
              <Link
                onClick={() => {
                  toggleactiveNav(6);
                }}
                to={"/Docs"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 6 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  06
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>DOCS</p>
                  <p className="">DOCS</p>
                </div>
              </Link>
              <Link
                onClick={() => {
                  toggleactiveNav(7);
                }}
                to={"https://dune.com/bytemasons/ethosreserve"}
                className={`-unlink fullMenu_a relative  ${
                  activeNav === 7 ? " text-purple-600" : ""
                }`}
              >
                <p className=" absolute top-[125%] -left-4 -translate-x-1/2 text-[0.7rem]">
                  07
                </p>
                <div className=" fullMenu overflow-hidden h-10 text-4xl font-bold title">
                  <p>ANALYTICS</p>
                  <p className="">ANALYTICS</p>
                </div>
              </Link>
            </div>
            <div className=" w-1/2 mt-20">
              <h5 className=" font-semibold text-lg">BETA Testing</h5>
              <p>
                ETHOS Reserve is in BETA. As an early user, you will have
                exclusive access to new features. See an issue?{" "}
                <Link
                  to={"/"}
                  className=" text-purple-600 font-semibold"
                >
                  Please let us know.
                </Link>{" "}
              </p>
              <h5 className=" font-semibold text-lg mt-5">Dune Analytics</h5>
              <p>
                View Ethos Reserve and $ERN analytics in our custom{" "}
                <Link
                  to={"/Dashboard"}
                  className=" text-purple-600 font-semibold"
                >
                  Dune Dashboard
                </Link>
                . Understand $ERN value by chain, collateral ratios, minting and
                supply, distributions, yield rates, and much more.{" "}
              </p>
              <div className=" flex gap-5 mt-5">
                <i className="fa-brands fa-twitter p-5 rounded-full hover:text-purple-600 hover:border-purple-600 border hover:scale-110 transition-all"></i>
                <i className="fa-brands fa-discord p-5 rounded-full hover:text-purple-600 hover:border-purple-600 border hover:scale-110 transition-all"></i>
                <i className="fa-brands fa-github p-5 rounded-full hover:text-purple-600 hover:border-purple-600 border hover:scale-110 transition-all"></i>
              </div>
            </div>
          </div>

          <div
            className={` sm:hidden fixed z-30 top-0 left-0 flex h-screen w-screen opacity-95 `}
          >
            <button
              onClick={() => {
                setshowMenu(false);
              }}
              className="menuBtn top-0 right-10 absolute z-[21]"
            >
              <i
                className={`fa-solid fa-xmark md:p-5 p-3 rounded-full   m-5 ${
                  Darkmode ? " bg-gray-800 text-white" : " bg-gray-200"
                }`}
              ></i>
            </button>
            <div
              className={` w-[90%] p-5 pt-10  ${
                Darkmode
                  ? " text-white bg-dark_gray-900"
                  : " text-black bg-white"
              } `}
            >
              <ul className="">
                <li className=" my-2">
                  <Link
                    to={"/"}
                    onClick={() => {
                      toggleactiveNav(1);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 1 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>HOME</p>
                    </div>
                  </Link>
                </li>
                <li className=" my-2">
                  <Link
                    to={"/Articles"}
                    onClick={() => {
                      toggleactiveNav(2);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 2 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>ARTICLES</p>
                    </div>
                  </Link>
                </li>
                <li className=" my-2">
                  <Link
                    to={"https://forum.oath.eco/"}
                    onClick={() => {
                      toggleactiveNav(3);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 3 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>GOVERNANCE</p>
                    </div>
                  </Link>
                </li>
                <li className=" my-2">
                  <Link
                    to={"/Partners"}
                    onClick={() => {
                      toggleactiveNav(4);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 4 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>PARTNERS</p>
                    </div>
                  </Link>
                </li>
                <li className=" my-2">
                  <Link
                    to={"https://discord.com/invite/oathdefi"}
                    onClick={() => {
                      toggleactiveNav(5);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 5 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>DISCORD</p>
                    </div>
                  </Link>
                </li>
                <li className=" my-2">
                  <Link
                    to={"/Docs"}
                    onClick={() => {
                      toggleactiveNav(6);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 6 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>DOCS</p>
                    </div>
                  </Link>
                </li>
                <li className=" my-2">
                  <Link
                    to={"https://dune.com/bytemasons/ethosreserve"}
                    onClick={() => {
                      toggleactiveNav(7);
                    }}
                    className={`-unlink fullMenu_a relative  ${
                      activeNav === 7 ? " text-purple-600" : ""
                    }`}
                  >
                    <div className=" font-light title">
                      <p>ANALYTICS</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`w-[10%] flex flex-col-reverse justify-center items-start  ${
                !Darkmode
                  ? " text-white bg-dark_gray-900"
                  : " text-black bg-white"
              } `}
            >
              <div style={{transformOrigin:"left top"}} className=" flex gap-1 pt-3 -rotate-90">
                <p className=" whitespace-nowrap">Follow Us - </p>
                <div className=" flex gap-3">
                  <Twitter className=" rotate-90" />
                  <Github className=" rotate-90" />
                  <i className="fa-brands fa-discord rotate-90"></i>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default ArticleNav;
