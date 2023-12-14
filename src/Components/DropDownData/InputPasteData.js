import React from "react";

function InputPasteData({ PasteData }) {
  return (
    <div className=" hover:bg-gray-100 mx-1 hover:cursor-pointer my-1 rounded-md">
      <label className="text-[12px] mx-3 font-sans hover:cursor-pointer">
        {" "}
        {PasteData}
      </label>
    </div>
  );
}

export default InputPasteData;
