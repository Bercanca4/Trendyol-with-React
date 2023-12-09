import React from 'react'

function InterestedCategory({name, link}) {
  return (
    <div >
    <a href={link} >
    <div className="p-2 select-none border hover:cursor-pointer rounded-xl hover:border-orange-500 items-center  hover:text-orange-500 hover:duration-300 hover:transition duration-300 transition ">
    <label className="text-[14px] select-none w-auto hover:cursor-pointer">{name}</label> 
    </div>
    </a>
    </div>
    
  )
}

export default InterestedCategory