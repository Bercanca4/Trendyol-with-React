import React from "react";

function InputSearchData({ statu, PasteData }) {
  return (
    <div
      className={`flex p-2 rounded-md items-center border group hover:border-orange-500 hover:duration-300 transition  hover:cursor-pointer justify-center whitespace-nowrap ${
        statu ? "bg-[#FEF4EB]" : ""
      }`}>
      <label className="text-[12px] group-hover:text-orange-600 group-hover:duration-300 flex items-center justify-center select-none w-auto hover:cursor-pointer">
        {statu ? <p>🔥 &nbsp;</p> : <p>&nbsp;</p>} {PasteData}
      </label>
    </div>
  );
}

export default InputSearchData;
