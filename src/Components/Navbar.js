import React, { useState, useEffect } from "react";
import mainlogo from "../assets/ty-cumhuriyet-100-logo.svg";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import InputPasteData from "./DropDownData/InputPasteData";
import InputSearchData from "./DropDownData/InputSearchData";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [searchInputData, setSearchInputData] = useState([]);
  const [searchInputPasteData, setSearchInputPasteData] = useState([]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleInputClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Bercanca4/trendyol-with-react/main/src/api/dropDownData.json/searchInputData.json"
        );
        const data = await response.json();
        setSearchInputData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Bercanca4/trendyol-with-react/main/src/api/dropDownData.json/searchInputPasteData.json"
        );
        const data = await response.json();
        setSearchInputPasteData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(searchInputPasteData);

  return (
    <div className="w-full h-[64px] flex justify-between items-center relative ">
      <div className="items-center w-fit   ">
        <img src={mainlogo} className="w-[210px] h-[35px]" />
      </div>

      <div
        className={`relative flex items-center justify-center rounded-md ${
          isClicked ? "  border-2  border-orange-500" : ""
        }`}>
        <input
          type="text"
          onClick={handleInputClick}
          className="w-[598px] h-[43px] focus:outline-none bg-[#F3F3F3] placeholder:opacity-50 type-text pl-4 rounded-md border-none placeholder:items-center placeholder:pl-4 placeholder:text-[#333] placeholder:text-[14px]"
          placeholder="Aradığınız ürün, kategori veya markayı yazınız"
        />
        {isClicked && (
          <div
            className="absolute rounded-lb-sm p-2 bg-white  w-full h-[430px] border-2 border-orange-500  shadow-md z-10 "
            style={{ top: "100%", left: "0", right: "0" }}>
            <div className=" my-1 mx-5 flex justify-between ">
              <label className="text-orange-500 text-[12px] font-semibold ">
                Geçmiş Aramalar
              </label>
              <label className="text-black opacity-70 text-[14px] font-semibold hover:cursor-poniter">
                Temizle
              </label>
            </div>
            <div>
              {searchInputPasteData.map((item, index) => (
                <InputPasteData key={index} PasteData={item.PasteData} />
              ))}
            </div>

            <div className=" my-2  mx-5 flex  ">
              <label className="text-orange-500 text-[12px] font-semibold ">
                Popüler Aramalar
              </label>
            </div>
            <div>
              <div className=" mx-5 flex flex-wrap  items-center justify-start whitespace-nowrap  my-4 gap-x-2 gap-y-3 ">
                {searchInputData.slice(0, 10).map((item, index) => (
                  <InputSearchData
                    key={index}
                    statu={item.statu}
                    PasteData={item.PasteData}
                  />
                ))}
              </div>
            </div>
            <div className=" my-2  mx-5 flex  ">
              <label className="text-orange-500 text-[12px] font-semibold ">
                Sana Özel Kategoriler
              </label>
            </div>
            <div>
              <div className=" mx-5 flex flex-wrap  items-center justify-start whitespace-nowrap  gap-x-2 gap-y-3 ">
                {searchInputData.slice(10, 30).map((item, index) => (
                  <InputSearchData
                    key={index}
                    statu={item.statu}
                    PasteData={item.PasteData}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="absolute justify-end flex right-2 top-1/2 transform -translate-y-1/2">
          <IoSearch className="w-[20px] h-[20px] text-orange-500 hover:cursor-pointer " />
        </div>
      </div>

      <div className="items-center flex gap-x-8  ">
        <div
          className="flex gap-x-2 group relative z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div>
            <FaRegUser className="w-[18px] h-[18px] group-hover:cursor-pointer group-hover:fill-orange-600" />
          </div>
          <div>
            <button className="text-[12px] group-hover:cursor-pointer group-hover:text-orange-500 ">
              Giriş Yap
            </button>
            {isDropdownOpen && (
              <div
                className="absolute p-2  shadow-md w-[150px] rounded-lg border bg-white"
                style={{ top: "100%", left: "0" }}>
                <div>
                  <div className="flex my-2 bg-orange-500 h-[30px] rounded-md border w-full items-center justify-center">
                    <button className="text-white font-semibold text-[14px]">
                      Giriş yap
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex my-2 bg-white h-[30px] rounded-md border w-full items-center justify-center">
                    <button className="text-[14px]">Kayıt Ol</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-x-2 group">
          <MdFavoriteBorder className="w-[18px] h-[18px] group-hover:cursor-pointer group-hover:fill-orange-600" />
          <label className="text-[12px] group-hover:cursor-pointer group-hover:text-orange-500">
            Favorilerim
          </label>
        </div>

        <div className="flex gap-x-2 group">
          <FaCartShopping className="w-[18px] h-[18px] group-hover:cursor-pointer group-hover:fill-orange-600" />
          <label className="text-[12px] group-hover:cursor-pointer group-hover:text-orange-500">
            Sepetim
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
