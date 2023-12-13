import React from "react";

function PopularSide({ data }) {
  return (
    <div className=" my-2 flex items-center justify-center">
      <label className="text-[13px] hover:cursor-pointer hover:underline whitespace-nowrap  w-[110px] truncate ">
        {data}
      </label>
    </div>
  );
}

export default PopularSide;
