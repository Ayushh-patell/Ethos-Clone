import React, { useContext } from "react";
import { DarkModeContext } from "./Contexts/DarkModeContext";
import { Link } from "react-router-dom";
import { NavMenuContext } from "./Contexts/NavMenuContext";

const Footer = () => {
  const { Darkmode } = useContext(DarkModeContext);
  const {  toggleactiveNav } = useContext(NavMenuContext);

  return (
    <footer
      className={`lg:px-28 md:px-16 px-8 py-6 ${
        Darkmode ? " bg-dark_gray-900 text-white" : " bg-gray-100"
      }`}
    >
      <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <div className=" p-10">
          <img
            className={`${Darkmode ? "invert" : ""}  w-2/4 mx-auto`}
            src="./Img/MainLogo.webp"
            alt="Ethos Reserve Logo"
          />
        </div>
        <div className=" p-10">
          <h5 className=" font-semibold mb-3">Decentralized Money</h5>
          <p>
            $ERN is a decentralized stablecoin backed entirely by
            cryptocurrencies like Bitcoin, Ethereum, and Optimism.
          </p>
        </div>
        <div className=" p-10">
          <h5 className=" font-semibold mb-3">Get Started</h5>
          <p>
            For questions about Ethos Reserve, our guides, or to access our
            press kit and media files,{" "}
            <Link
              onClick={() => {
                toggleactiveNav(6);
              }}
              className=" text-purple-600 font-semibold"
              to={"/Docs"}
            >
              see our documentation.
            </Link>
          </p>
        </div>
        <div className=" p-10">
          <h5 className=" font-semibold mb-3">Collaboration</h5>
          <p>
            Interested in building in DeFi or working with us? We'd love to hear
            from you.{" "}
            <a
              className=" text-purple-600 font-semibold"
              href="mailto:contact@oth.eco"
            >
              contact@oth.eco
            </a>
          </p>
        </div>
      </div>

      <div
        className={` flex justify-between md:flex-row flex-col items-center border-y w-full py-4 my-3 ${
          Darkmode ? " border-gray-600" : " "
        }`}
      >
        <span>©2023 Ethos Reserve. All Rights Reserved</span>
        <div className=" w-fit">
          <Link to={"/Docs"} className=" text-purple-600 footer-links relative mr-2">
            Documentation
          </Link>
          |
          <Link to={"/Dashboard"} className=" text-purple-600 footer-links relative mx-2">
            Terms
          </Link>
          |
          <Link to={"/Docs"} className=" text-purple-600 footer-links relative ml-2">
            Analytics
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
