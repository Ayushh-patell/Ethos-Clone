import React, { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext';
import { Link } from 'react-router-dom';

const NavigationInfoBar = ({name, link, btnText, text}) => {
    const { Darkmode } = useContext(DarkModeContext);

  return (
    <div className={` grid md:grid-cols-3 grid-cols-1 gap-4 p-3 border-b ${Darkmode?"border-gray-800":""}`}>
      <p className=' text-left'>{name}</p>
      <p  className='text-left' style={{overflowWrap:"break-word"}}>{text}</p>
      <div className=' my-2 flex justify-end'>
        {link!==""? <Link to={`${link}`} className=' p-2 rounded bg-purple-400 text-white'>{btnText}</Link> : `${btnText}`}

      </div>
    </div>
  )
}

export default NavigationInfoBar
