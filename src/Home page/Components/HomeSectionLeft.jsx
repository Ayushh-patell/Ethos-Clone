import { ArrowRight } from "lucide-react";
import React, { useContext } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import { Link } from "react-router-dom";

const HomeSectionLeft = ({ src, topic, title, text1, text2, buttonText }) => {
  const {Darkmode} = useContext(DarkModeContext)

  return (
    <section className={` flex flex-col items-center lg:flex-row ${Darkmode ? " bg-dark_gray-900 text-white":" bg-slate-100"} lg:px-28 md:px-16 px-10 py-6 md:gap-6`}>
      <div className=" lg:w-1/2">
        {src && <img src={src} alt="Landing-page" />}
      </div>
      <div className=" lg:w-1/2">
        <p className={` font-normal text-[0.9rem] pb-5 border-b ${Darkmode ? " border-white":" border-black"} `}>
          {topic}
        </p>
        <h2 className="title text-4xl md:text-6xl font-bold my-6">{title}</h2>
        {text1 && text2 && (
          <div className=" grid grid-cols-2 gap-5">
            <p>{text1}</p>
            <p>{text2}</p>
          </div>
        )}
        <Link
          to={"/Dashboard"}
          className="navigate_anchor flex gap-2 w-fit my-3 transition p-2 rounded hover:bg-slate-200 hover:text-purple-600 font-semibold"
        >
          <ArrowRight className="icon h-full" />
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default HomeSectionLeft;
