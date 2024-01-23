import React, { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext';

const DashboardSettings = ({showSetting, setshowSetting, NavMobileAlign, setNavMobileAlign}) => {
    const { Darkmode, toggleDarkmode } = useContext(DarkModeContext);

  return (
    <div style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className={`${showSetting? "block":"hidden"} z-20 w-screen h-screen fixed top-0 left-0`}>
    <div className={` fixed top-1/2 ${Darkmode? " bg-black":" bg-white"} left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-3xl`}>
      <p className=' flex justify-between items-center mb-2'>Setting <i onClick={() => {setshowSetting(false)}} className="fa-solid fa-xmark"></i></p>
      <div className=' my-2'>
        <p className=' my-2'>Select Theme</p>
        <div className=' flex gap-3 '>
            <div onClick={toggleDarkmode} className={` rounded-lg text-center cursor-pointer p-5 ${Darkmode? " bg-gray-400 text-black":" bg-dark_gray-900 text-white"}`}>Dark</div>
            <div onClick={toggleDarkmode} className={` rounded-lg text-center cursor-pointer p-5 ${!Darkmode? " bg-gray-400 text-black":" bg-dark_gray-900 text-white"}`}>Light</div>
        </div>
        </div>
      <div className=' my-2'>
        <p className=' my-2'>Hamburger Menu Option (Mobile Only)</p>
        <div className=' flex gap-3 '>
            <div onClick={()=> {setNavMobileAlign(false)}} className={` rounded-lg text-center cursor-pointer p-5 ${Darkmode? (NavMobileAlign? " bg-dark_gray-900 text-white":"  bg-white text-black"):( NavMobileAlign? " bg-dark_gray-900 text-white":" bg-gray-500 text-black")}`}>Left</div>
            <div onClick={()=> {setNavMobileAlign(true)}} className={` rounded-lg text-center p-5 ${Darkmode? (!NavMobileAlign? "bg-dark_gray-900 text-white ":" bg-white text-black"):(!NavMobileAlign? " bg-dark_gray-900 text-white":" bg-gray-500 text-black")}`}>Right</div>
        </div>
      </div>
      <div className=' my-2'>
        <p className=' my-2'>Automatically Connect Wallet</p>
        <div className=' flex gap-3 '>
            <div className={` rounded-lg text-center cursor-pointer p-5 ${Darkmode? " bg-white text-black":" bg-dark_gray-900 text-white"}`}>Off</div>
            <div className={` rounded-lg text-center p-5 ${Darkmode? " bg-white text-black":" bg-dark_gray-900 text-white"}`}>On</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default DashboardSettings
