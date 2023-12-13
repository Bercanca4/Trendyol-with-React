import React from "react";

function ProductList({ logoUrl, price, brandname, title }) {
  return (
    <div className="border rounded-xl select-none ">
      <div className=" w-[222px] h-[375px] bg-white rounded-xl">
        <div className="flex items-center justify-center   ">
          <img
            src={logoUrl}
            className="h-[220px] w-[170px] m-4 select-none  "
          />
        </div>

        <div className=" h-[40px] my-4  mx-2">
          <label className="truncate text-[12px] whitespace-normal line-clamp-2  ">
            <b>{brandname}</b> {title}
          </label>
        </div>

        <div className=" h-[40px] my-4 mx-2">
          <label className=" text-orange-500 truncate text-[16px] font-sans select-none ">
            <b>{price} TL</b>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
