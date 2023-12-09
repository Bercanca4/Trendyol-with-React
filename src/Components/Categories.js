import React from 'react'

function Categories({name,statu}) {
  return (
    <div className="flex group items-center gap-x-1 justify-center">
        <label className="text-[13px] group-hover:text-orange-500 hover:cursor-pointer ">{name}</label>
        <div className="  select-none items-center ">
        <label className="bg-red-600 group-hover:bg-orange-500 rounded-lg w-6 text-[8px] font-sans font-bold text-white items-center justify-center flex  ">{statu}</label>
        </div>
    </div>
  )
}

export default Categories