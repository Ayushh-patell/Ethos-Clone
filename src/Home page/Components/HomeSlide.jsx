import { ArrowRight } from 'lucide-react'
import React, { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'
import { Link } from 'react-router-dom'
import { NavMenuContext } from '../../Contexts/NavMenuContext'

const HomeSlide = ({topic,link, title, text1, text2,text3, buttonText, src}) => {
    const {Darkmode} = useContext(DarkModeContext)
    const { toggleactiveNav } = useContext(NavMenuContext);

  return (
    <div className=' md:p-20'>
      <p className={`font-normal text-[0.9rem] pt-5 border-t ${Darkmode ? " border-white":" border-black"}`}>{topic}</p>
      <h2 className="title text-3xl font-bold my-6">{title}</h2>
      <p>{text1}<span className=' font-semibold'>{text2}</span>{text3}</p>
      <Link
      onClick={()=> {toggleactiveNav(6)}}
          to={link}
          className="navigate_anchor flex gap-2 w-fit my-3 transition p-2 rounded hover:bg-slate-200 hover:text-purple-600 font-semibold"
        >
          <ArrowRight className="icon h-full" />
          {buttonText}
        </Link>
        <img src={src} alt="" />

    </div>
  )
}

export default HomeSlide
