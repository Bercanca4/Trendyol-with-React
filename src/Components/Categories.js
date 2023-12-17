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
      className="flex group items-center gap-x-1 justify-center h-[40px] hover:border-b-orange-500 hover:border-b-2 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <label className="text-[13px] group-hover:text-orange-500 hover:cursor-pointer">
        {name}
      </label>
      {statu === true ? (
        <div className="select-none items-center">
          <label className="bg-red-600 group-hover:bg-orange-500 rounded-lg w-6 text-[8px] font-sans font-bold text-white items-center justify-center flex">
            {statu.toString()}
          </label>
        </div>
      ) : null}

      {isDropdownOpen && menu && (
        <div
          className="absolute top-full left-0  z-0 bg-white overflow-x-auto border p-4 duration-500 rounded-b-xl transition shadow-md w-[1200px] h-[500px]"
          style={{ top: "110%", right: "0" }}>
          {menu.map((category, index) => (
            <div key={category.id} className="inline-block mr-4">
              <h4 className="text-lg font-bold w-fit mb-2">
                {category.id} {category.Title}
              </h4>
              <ul>
                {category.CategoryDetails.map((categoryItem, index) => (
                  <li key={categoryItem.detailName} className="mb-1">
                    <a
                      href={categoryItem.link}
                      className="w-fit text-black-500">
                      {categoryItem.detailName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
