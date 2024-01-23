import React, {  useEffect } from "react";
import { Link } from "react-router-dom";


const PartnersPage = () => {

  useEffect(() => {
   const [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9] = document.querySelectorAll(".fullMenu_a .Partners")
   const [partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7, partnerImg8, partnerImg9] = document.querySelectorAll(".partnerImg")

    const underline = document.querySelector(".underline_bar")
    partner1.addEventListener("mouseover", ()=> {underline.style.top = "0%"; partnerImg1.style.display = "block"})
    partner1.addEventListener("mouseout", ()=> { partnerImg1.style.display = "none"})
    partner2.addEventListener("mouseover", ()=> {underline.style.top = "11.5%"; partnerImg2.style.display = "block"})
    partner2.addEventListener("mouseout", ()=> {partnerImg2.style.display = "none"})
    partner3.addEventListener("mouseover", ()=> {underline.style.top = "22.5%"; partnerImg3.style.display = "block"})
    partner3.addEventListener("mouseout", ()=> {partnerImg3.style.display = "none"})
    partner4.addEventListener("mouseover", ()=> {underline.style.top = "34.5%"; partnerImg4.style.display = "block"})
    partner4.addEventListener("mouseout", ()=> {partnerImg4.style.display = "none"})
    partner5.addEventListener("mouseover", ()=> {underline.style.top = "45.5%"; partnerImg5.style.display = "block"})
    partner5.addEventListener("mouseout", ()=> {partnerImg5.style.display = "none"})
    partner6.addEventListener("mouseover", ()=> {underline.style.top = "57%"; partnerImg6.style.display = "block"})
    partner6.addEventListener("mouseout", ()=> {partnerImg6.style.display = "none"})
    partner7.addEventListener("mouseover", ()=> {underline.style.top = "69.5%"; partnerImg7.style.display = "block"})
    partner7.addEventListener("mouseout", ()=> {partnerImg7.style.display = "none"})
    partner8.addEventListener("mouseover", ()=> {underline.style.top = "79.5%"; partnerImg8.style.display = "block"})
    partner8.addEventListener("mouseout", ()=> {partnerImg8.style.display = "none"})
    partner9.addEventListener("mouseover", ()=> {underline.style.top = "91.5%"; partnerImg9.style.display = "block"})
    partner9.addEventListener("mouseout", ()=> {partnerImg9.style.display = "none"})

    window.addEventListener('mousemove', (event) => {
      [partnerImg1, partnerImg2, partnerImg3, partnerImg4, partnerImg5, partnerImg6, partnerImg7, partnerImg8, partnerImg9].forEach(el => {
        el.style.top = `${event.clientY +20}px`
        el.style.left = `${event.clientX +20}px`
      })
    });
  },[])

  return (
    <div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-1.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-2.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-3.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-4.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-5.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-6.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-7.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-8.png" className=" h-20" alt="" />
          </div>
          <div className=" fixed hidden partnerImg z-10">
            <img src="../Img/Partner-9.webp" className=" h-20" alt="" />
          </div>
      <div className=" flex flex-col justify-start lg:h-[450px] items-center">
        <div style={{transformOrigin:"center"}} className=" relative pl-3 border-l lg:-top-[14rem] w-fit lg:-rotate-90">
        <div className=" h-[70px] underline_bar left-0 absolute bg-purple-500 w-[1px]"></div>
          <Link to={"/Partners/Axelar"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit pr-5"
          >
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">01</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Alexar</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Code4rena"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">02</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Code4rena</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Digit"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">03</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Digit</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Equalizer"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
         
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">04</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Equalizer</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Granary"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
         
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">05</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Granary</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Ramses"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
         
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">06</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Ramses</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Reaper"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
         
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">07</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Reaper</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Thena"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
         
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">08</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Thena</p>
            </div>
          </div>
          </Link>
          <Link to={"/Partners/Tarot"}>
          <div
            className="fullMenu_a relative text-purple-700 w-fit mt-5 pr-5"
          >
        
            <p className=" absolute left-full top-1/2 -translate-y-1/2 text-[0.7rem]">09</p>
            <div className=" Partners overflow-hidden h-[4.5rem] w-fit text-7xl font-bold title">
              <p>Tarot</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
