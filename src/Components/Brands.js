import React from 'react'


function Brands({ Brandsname, logoUrl, link }) {
  return (
    <div className=" flex items-center justify-center group select-none  ">
     <a href={link}>
        <div className="rounded-full items-center flex justify-center my-4">
        <img src={logoUrl}  className=" rounded-full group-hover:border-orange-500 transition duration-300  border max-w-[68px] max-h-[68px] " />
        </div> 
        <label className=" transition duration-300  group-hover:text-orange-500 text-[12px] hover:cursor-pointer text-center flex items-center justify-center font-semibold">{Brandsname}</label>
        </a>
    </div>
  )
}

export default Brands