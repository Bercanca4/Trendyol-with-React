import React from "react";

function TopSide({ data, link }) {
  return (
    <div>
      <a href={link}>
        <label className="text-[12px]  text-[#999] font-sans hover:text-black hover:transition  hover:cursor-pointer ">
          {data}
        </label>
      </a>
    </div>
  );
}

export default TopSide;
