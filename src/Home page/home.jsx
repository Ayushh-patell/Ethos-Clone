import { ArrowRight, Play } from "lucide-react";
import React, { useContext, useState } from "react";
import HomeSectionLeft from "./Components/HomeSectionLeft";
import HomeSectionRight from "./Components/HomeSectionRight";
import HomeSectionbottom from "./Components/HomeSectionbottom";
import HomeSlide from "./Components/HomeSlide";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { DarkModeContext } from "../Contexts/DarkModeContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const appRef = useRef();
  useGSAP(
      () => {
          gsap.to(".resilient > div", {
             width:"250px", 
              duration:0.2,
              delay:0.2 

          })
      },
      { scope: appRef }
    );
  const {Darkmode} = useContext(DarkModeContext)
  const [activeSlide, setactiveSlide] = useState(1)
  const [showVid, setshowVid] = useState(false)
  const [showDiscordTab, setshowDiscordTab] = useState(true)

  const handleSlide1 = () => {
    gsap.to(".HomeSlide1", {left:"0%", duration:0.2, ease:"expo.out"})
    gsap.to(".HomeSlide2", {left:"25%", duration:0.2,delay:0.1, ease:"expo.out"})
    setactiveSlide(1)
  }
  const handleSlide2 = () => {
    gsap.to(".HomeSlide1", {left:"-20%", duration:0.2, ease:"expo.out"})
    gsap.to(".HomeSlide2", {left:"25%", duration:0.2, ease:"expo.out"})
    setactiveSlide(2)
  }
  const handleSlide3 = () => {
    gsap.to(".HomeSlide1", {left:"-20%", duration:0.2, ease:"expo.out"})
    gsap.to(".HomeSlide2", {left:"5%", duration:0.2, delay:0.1, ease:"expo.out"})
    setactiveSlide(3)
  }


  return (
    <div ref={appRef} className={` mx-auto pt-10 ${Darkmode ? " bg-black text-white":" bg-white"}`}>
      <div className=" flex flex-col lg:flex-row justify-between lg:px-28 md:px-16 px-10">
        <div className=" lg:w-1/3 flex flex-col gap-3">
          <div>
            <Play onClick={()=> {setshowVid(true)}} className=" w-11 h-11 rounded-full p-2 pl-3 bg-black text-white hover:scale-110 hover:bg-purple-600 transition-all " />
            <p className=" text-base font-semibold">
              Interest-free loans.
              <br />
              Personal sovereignty.
            </p>
          </div>
          <div>
            <h1 className="title text-4xl md:text-6xl md:my-4 font-bold">
              Extremely <br /> <span className="resilient relative">Resilient <div aria-hidden></div></span> <br /> Naturally
            </h1>
            <p className=" mt-2">
              Ethos Reserve lets you lend without limits. Enjoy zero-interest
              loans, best-in-class efficiency and easy access to a whole
              ecosystem of opportunity from one application.
            </p>
            <Link
              to={"/Dashboard"}
              className="navigate_anchor flex gap-2 w-fit transition p-2 rounded hover:bg-slate-100 hover:text-purple-600 font-semibold"
            >
              <ArrowRight className="icon h-full" />
              Enter Ethos Beta
            </Link>
          </div>
        </div>
        <div className="hidden lg:block w-2/3">
          <img
            className=" ml-auto w-3/4"
            src="./Img/Landing-1.webp"
            alt="Laptop"
          />
        </div>
      </div>
      <HomeSectionLeft
        src={"./Img/Landing-2.webp"}
        topic={"THE ERN TOKEN"}
        title={
          " A reactionary, over-collateralized stablecoin that rewards users."
        }
        text1={
          "Collateralized by as low as 120% Bitcoin and 108% Ethereum. Investors can leverage ERN across DeFi ecosystems."
        }
        text2={
          "ERN stakers are rewarded via liquidations and Reaper's automated external yield strategies."
        }
        buttonText={"Buy ERN Tokens"}
      />

      <HomeSectionRight
        src={"./Img/Landing-3.webp"}
        topic={"WITH ETHOS RESERVE"}
        title={
          "Hedge, leverage, or exit DeFi positions more efficiently than ever. "
        }
        text1={
          "Track and manage the health of your positions with responsive Recovery Mode and Collateral Ratio alerts."
        }
        text2={
          "Perfect for longer-term timelines, Ethos's 0.5% deposit and redemption fees are an industry leading rate."
        }
        buttonText={"Start Lending Assets"}
      />

      <HomeSectionLeft
        src={"./Img/Landing-4.webp"}
        topic={"ABOUT CDP VAULTS"}
        title={
          " Ethos earns rewards on assets and routes yield back to depositors. "
        }
        text1={
          "DeFi protocols that meet Ethos's safety and performance standards will be leveraged for additional yield."
        }
        text2={
          "ERN stakers are rewarded via liquidations and Reaper's automated external yield strategies."
        }
        buttonText={"Join CDP Vault"}
      />

      <HomeSectionRight
        topic={"COUMPOUND ROI"}
        title={"Stake bOATH to receive fees that grow with Ethos' TVL."}
        buttonText={"Stake bOATH"}
      />

      <HomeSectionbottom />

      <div className=" lg:px-28 md:px-16 px-10 py-6">
        <div className=" flex gap-10 title text-lg font-semibold">
          <p className={` w-1/3 pb-5 border-b ${Darkmode?" border-white ":" border-black"}`}>Founded On</p>
          <p className={` w-2/3 pb-5 border-b ${Darkmode?" border-white ":" border-black"}`}>Expanding Across</p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:gap-32 md:gap-20 gap-16">
          <img src="./Img/logo/logo-1.webp" className={`${Darkmode?"invert":""} hover:scale-110 transition-all `} alt="Optimism" />
          <img src="./Img/logo/logo-2.webp" className={`${Darkmode?"invert":""} hover:scale-110 transition-all `} alt="Arbitrum" />
          <img src="./Img/logo/logo-3.webp" className={`${Darkmode?"invert":""} hover:scale-110 transition-all `} alt="BNB Chain" />
          <img src="./Img/logo/logo-4.webp" className={`${Darkmode?"invert":""} hover:scale-110 transition-all `} alt="Fantom" />
          <img src="./Img/logo/logo-5.webp" className={`${Darkmode?"invert":""} hover:scale-110 transition-all `} alt="Polygon" />
        </div>
      </div>

      <div className=" relative xl:flex hidden justify-end overflow-hidden ">
        <div onClick={handleSlide1} className={`HomeSlide1 w-1/2 ${Darkmode ? (activeSlide===1 ? "bg-black":" bg-black hover:bg-gray-800"):(activeSlide===1 ? "bg-white":" bg-white hover:bg-gray-100")}  shadow-md rounded absolute top-0 left-0 z-[3] transition-all`}>
          <HomeSlide topic={"Build your portfolio"} link={"/Docs/#MintingERN"} title={"How to Get Started with Ethos Reserve Dashboard"} text2={"Minting your first ERN is easy! "} text3={"This step-by-step guide will take you from zero to hero in 15 minutes or less."} buttonText={"How to Mint ERN"} src={"./Img/Landing-slide-1.webp"}/>
        </div>
        <div onClick={handleSlide2} className={`HomeSlide2  w-1/2 ${Darkmode ? (activeSlide===2 ? "bg-black":" bg-black hover:bg-gray-800"):(activeSlide===2 ? "bg-white":" bg-white hover:bg-gray-100")} shadow-md rounded absolute top-0 left-1/4 z-[2] transition-all`}>
          <HomeSlide topic={"Token design"} link={"/Docs/#UnderstandingERN"} title={"Understanding how ERN Remains Stable — and Flexible"} text1={"ERN's revolutionary mechanisms keep it  "} text2={"stable under extreme volatility "} text3={", giving your portfolio an adaptable, but steady, foundation. "} buttonText={"Descover ERN stability"} src={"./Img/Landing-slide-2.webp"}/>
        </div>
        <div onClick={handleSlide3} className={` w-1/2 ${Darkmode ? (activeSlide===3 ? "bg-black":" bg-black hover:bg-gray-800"):(activeSlide===3 ? "bg-white":" bg-white hover:bg-gray-100")} shadow-md rounded relative z-[1] transition-all`}>
          <HomeSlide topic={"Heavily audited"} link={"/Docs/#Audits"} title={"See how Ethos Reserve puts Security First"} text2={"More than 150 blockchain security specialists"} text3={" have audited our code, helping us ensure user safety."} buttonText={"Ethos security audits"} src={"./Img/Landing-slide-3.webp"}/>
        </div>
      </div>
      {showDiscordTab && <div className={` ${Darkmode?" bg-black ":" bg-white"} fixed z-[5] bottom-4 left-1/2 -translate-x-1/2 w-[90vw] shadow-lg sm:w-auto rounded-md p-2 flex justify-between items-center gap-2`}> Stay updated and join our growing community. <a className=" text-purple-600" href="https://discord.com/invite/oathdefi">Join Discord </a> <i onClick={()=> {setshowDiscordTab(false)}} className=" cursor-pointer fa-solid fa-xmark"></i> </div>}
      {showVid && (
        <div className=" bg-dark_gray-900 h-screen w-screen z-50 fixed top-0 left-0 flex justify-center items-center">
        <button
              onClick={() => {
                setshowVid(false);
              }}
              className="menuBtn top-0 left-0 absolute z-[21]"
            >
              <i
                className={`fa-solid fa-xmark md:p-5 p-3 rounded-full   m-5 ${
                  Darkmode ? " bg-gray-800 text-white" : " bg-gray-200"
                }`}
              ></i>
            </button>
            <div className=" w-[70vw] h-[60vh]">
              <video className=" w-[70vw] h-[60vh]" autoPlay controls src="./Ethos_video.mp4"></video>
            </div>

        </div>     
         )}
    </div>
  );
};

export default HomePage;
