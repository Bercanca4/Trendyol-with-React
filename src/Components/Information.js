import React from "react";

function Information({ title, descreption }) {
  return (
    <div className="my-5">
      <h1 className="font-semibold text-[20px] opacity-70">{title}</h1>

      <label className="text-[14px] ">{descreption}</label>
    </div>
  );
}

export default Information;
