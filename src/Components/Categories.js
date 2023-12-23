// Categories.js
import React, { useState } from "react";

function Categories({ name, statu, menu }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="flex justify-center items-center  group  gap-x-1 h-[40px] hover:border-b-orange-500 hover:border-b-2 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <label className="text-[13px] group-hover:text-orange-500 hover:cursor-pointer">
        {name}
      </label>
      {statu === true ? (
        <div className="select-none items-center">
          <label className="bg-red-600 group-hover:bg-orange-500 rounded-lg w-6 text-[8px] font-sans font-bold text-white items-center justify-center flex">
            yeni
          </label>
        </div>
      ) : null}

      {isDropdownOpen && menu && (
        <div className="absolute  top-[41%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white  border duration-500 rounded-b-xl transition shadow-md w-[1200px] h-[520px]   ">
          <div className="grid grid-row-2 grid-flow-col gap-x-8 p-4  ">
            {menu.map((category, index) => (
              <div key={category.id}>
                <p className="text-[15px] select-none   font-bold ">
                  {category.Title}
                </p>
                <div>
                  {category.CategoryDetails.map((categoryItem, index) => (
                    <ul key={categoryItem.detailName}>
                      <a
                        href={categoryItem.link}
                        className="text-[11px]   text-gray-600 ">
                        {categoryItem.detailName}
                      </a>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;
