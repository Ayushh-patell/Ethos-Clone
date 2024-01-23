import { Github, Twitter } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./Contexts/DarkModeContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const SideComponents = () => {
    gsap.registerPlugin(ScrollTrigger);
    const appRef = useRef();
    useGSAP(
        () => {
            gsap.to(".scrollEl", {
                opacity:1, 
                duration:0.2, 
                scrollTrigger: {
                    trigger:".scrollEl",
                    start:"bottom 50%",
                    end:"bottom 60%",
                    scrub:true
                }
            })
        },
        { scope: appRef }
      );

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (scrolled / totalHeight) * 100;

    setScrollPercentage(percentage);
  };
  useEffect(() => {
    const scroll_percentage = document.getElementById("scroll_percentage");
    if (scroll_percentage) {
      scroll_percentage.style.width = `${scrollPercentage}%`;
    }
  }, [scrollPercentage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const scrollToTop = () => {
    try {
      window.scroll({
        behavior: 'smooth',
        top: 0,
      })
    } catch(err) {
      if (err instanceof TypeError) {
        window.scroll(0, 0)
      } else {
        throw err
      }
    }
  }
  const { Darkmode, toggleDarkmode } = useContext(DarkModeContext);
  return (
    <>
      <div
        className={` fixed top-1/2 font-semibold -right-[9.5rem] z-10 -translate-x-1/2 flex -rotate-90 ${
          Darkmode ? " text-white" : ""
        }`}
      >
        <p>Follow Us - </p>
        <div className=" flex gap-3">
          <Twitter className=" rotate-90" />
          <Github className=" rotate-90" />
          <i className="fa-brands fa-discord rotate-90"></i>
        </div>
      </div>
      <div ref={appRef} className=" fixed top-1/2 flex gap-3 items-center font-semibold left-6 z-10 -translate-x-1/2 -rotate-90 text-sm">
        <div style={{display:"inline"}} onClick={scrollToTop}>
        <div
          className={` scrollEl flex items-center gap-5 opacity-0 transition-all ${
            Darkmode ? "  text-white" : " text-black"
          }`}
        >
          <div
            className={` w-20 relative flex justify-end h-[2px] ${
              Darkmode ? " bg-gray-700" : " bg-gray-300"
            }`}
          >
            <div
              id="scroll_percentage"
              className={`h-[2px] ${Darkmode ? " bg-white" : " bg-black"}`}
            ></div>
          </div>{" "}
          Scroll to top
        </div>
        </div>
        <div className="relative">
          <div
            className={` shadow-md rounded-full ${
              Darkmode ? " bg-gray-600 text-white" : "bg-gray-300 text-black"
            } px-2 py-1 overflow-hidden `}
          >
            <span
              aria-hidden
              className={` rounded-full absolute w-[55%] h-full top-0 ${
                Darkmode ? " left-0 bg-gray-500" : " right-0 bg-white"
              }`}
            ></span>
            <span
              onClick={toggleDarkmode}
              className=" relative z-[11] cursor-pointer mr-2"
            >
              Dark{" "}
              <span className={`${Darkmode ? "" : "hidden"}`}>
                <i className="fa-regular fa-moon"></i>
              </span>
            </span>
            <span
              onClick={toggleDarkmode}
              className=" relative z-[11] cursor-pointer"
            >
              Light{" "}
              <span className={`${Darkmode ? "hidden" : ""}`}>
                <i className="fa-regular fa-sun"></i>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideComponents;
