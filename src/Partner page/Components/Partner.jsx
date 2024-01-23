import React, { useContext } from "react";
import { DarkModeContext } from "../../Contexts/DarkModeContext";
import { Link } from "react-router-dom";

const Partner = ({
  title,
  desc,
  task,
  website,
  network,
  links,
  image,
  prev,
  next,
  nextName,
  nextimg,
}) => {
  const { Darkmode } = useContext(DarkModeContext);

  return (
    <div className={`  lg:px-28 md:px-16 px-10 ${Darkmode ?" text-white":""}`}>
      <div className="flex flex-col md:flex-row my-10 gap-6">
      <div className="md:w-1/2">
        <h2 className=" font-bold title text-2xl md:text-4xl">{title}</h2>
        <p>{desc}</p>
      </div>
      <div className="md:w-1/2">
        <p>Task</p>
        <p className=" font-semibold">{task}</p>
        <div className=" grid grid-cols-2 gap-4">
          <div>
            <h5 className=" pt-5 mt-3 border-t font-semibold">Website</h5>
            <p>{website}</p>
          </div>
          <div>
            <h5 className=" pt-5 mt-3 border-t font-semibold">Network</h5>
            <p>{network}</p>
          </div>
        </div>
      </div>
      </div>
      <div className="relative">
        <div
          className={` absolute flex flex-col gap-5 -top-1 -left-1 p-4 rounded shadow ${
            Darkmode ? " bg-black" : " bg-white"
          }`}
        >
          <a href={links.face}>
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href={links.twitter}>
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href={links.linked}>
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <img src={image} alt="" />
      </div>
      <div className={` md:fixed md:w-60 z-[5] bottom-8 right-5 next_box rounded md:shadow-md p-4  ${Darkmode ?" bg-gray-800":" bg-white"}`}>
        <img src={nextimg} className=" absolute md:block hidden opacity-0 z-0 -top-full left-0" alt="" />
        <p className=" font-semibold">
          Next Project{" "}
          <span className=" ml-auto">
            <Link to={prev}>
              <i class="fa-solid fa-arrow-left p-4 rounded"></i>
            </Link>
            <Link to={next}>
              <i class="fa-solid fa-arrow-right p-4 rounded"></i>
            </Link>
          </span>
        </p>
        <p className=" mt-2 font-semibold">{nextName}</p>
      </div>
    </div>
  );
};

export default Partner;
