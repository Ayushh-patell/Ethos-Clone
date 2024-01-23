import React, { useContext } from 'react'
import { DarkModeContext } from '../../Contexts/DarkModeContext'

const ArticlePost = ({profile, name,date, time, title, tags, src }) => {
  const {Darkmode} = useContext(DarkModeContext)

  return (
    <div  className={` post flex flex-col justify-between border relative ${Darkmode?" border-gray-800":""} `}>
    <div aria-hidden className='postImg w-full h-full z-[1] absolute top-0 left-0 opacity-0' style={{backgroundImage:`url(${src})`, backgroundPosition:"center", backgroundSize:"cover"}}></div>
    <div className=' p-5 flex gap-3 relative z-[1]'>
        <img className='rounded-full' src={profile} alt={name} />
        <div>
            <p className=' text-gray-700'>Posted by</p>
            <p className=' font-semibold'>{name}</p>
        </div>
    </div>
    <div className='p-5 relative z-[1]'>
        <p className=' text-gray-600'>{date}<span className=' rounded-full w-1 h-1 bg-red-700 mx-2'></span>{time}</p>
        <h2 className=' text-2xl font-semibold'>{title}</h2>
        <div className=' flex'>
        {tags.map((tag,i) => (
            <p className='postTag text-sm mx-1 rounded w-fit text-white p-1' key={i}>{tag}</p>
        ))}
        </div>
    </div>
      
    </div>
  )
}

export default ArticlePost
