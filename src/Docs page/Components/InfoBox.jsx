import React from 'react'

const InfoBox = ({text}) => {
  return (
    <div className=' p-5 flex my-3 justify-center items-center rounded-lg gap-4' style={{backgroundColor:"#87ceeb70", color:"#2080e6"}}>
      <i className="fa-solid fa-circle-info text-2xl" ></i>
      <p>{text}</p>
    </div>
  )
}

export default InfoBox
