import React from "react";
import mainlogo from "../assets/ty-cumhuriyet-100-logo.svg";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="w-full h-[64px] flex justify-between items-center relative ">
      <div className="items-center w-fit   ">
        <img src={mainlogo} className="w-[210px] h-[35px]" />
      </div>

      <div className="relative flex items-center justify-center rounded-md  ">
        <input
          className="w-[598px] h-[43px] bg-[#F3F3F3] placeholder:opacity-50 type-text pl-4 rounded-md border-none placeholder:items-center placeholder:pl-4  placeholder:text-[#333] placeholder:text-[14px]"
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        />
        <div className="absolute justify-end flex right-2 top-1/2 transform -translate-y-1/2">
          <IoSearch className="w-[20px] h-[20px] text-orange-500 hover:cursor-pointer " />
        </div>
      </div>

      <div className="items-center flex gap-x-8 f ">
        <div className="flex gap-x-2 group">
          <FaRegUser className="w-[18px] h-[18px] group-hover:cursor-pointer group-hover:fill-orange-600" />
          <label className="text-[12px] group-hover:cursor-pointer group-hover:text-orange-500">
            Giriş Yap
          </label>
        </div>

        <div className="flex gap-x-2 group">
          <MdFavoriteBorder className="w-[18px] h-[18px] group-hover:cursor-pointer group-hover:fill-orange-600" />
          <label className="text-[12px] group-hover:cursor-pointer group-hover:text-orange-500">
            Giriş Yap
          </label>
        </div>

        <div className="flex gap-x-2 group">
          <FaCartShopping className="w-[18px] h-[18px] group-hover:cursor-pointer group-hover:fill-orange-600" />
          <label className="text-[12px] group-hover:cursor-pointer group-hover:text-orange-500">
            Giriş Yap
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
