import React from 'react'

function Cards({id,content,logoUrl,link}) {
  return (
    <div className="mt-6 group">
        <a href={link}>
         
         <div className="rounded-tr-xl  rounded-tl-xl overflow-hidden">
            <img  src={logoUrl} className="w-[383px] group-hover:transition group-hover:duration-300  duration-300  transition-transform transform-gpu hover:scale-105   h-[187px] select-none " />
        </div>

        <div className="bg-black group-hover:transition group-hover:duration-300 transition duration-300 group-hover:bg-orange-600 w-[383px] h-[38px] rounded-br-xl rounded-bl-xl flex items-center justify-between select-none">
          
           <div className="items-center flex justify-center ml-4">
            <label className="text-white text-[14px]">{content}</label>
           </div>
          
           <div className="items-center flex justify-center mr-4">
            <label className="text-black group-hover:text-white group-hover:transition group-hover:duration-300 transition duration-300 text-[14px]">Alışverişe Başla </label>
           </div>
            
        </div>
        </a>
    </div>
  )
}

export default Cards