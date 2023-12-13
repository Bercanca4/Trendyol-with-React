import React, { useState, useEffect } from "react";
import TopSide from "./Components/TopSide";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Suggestions from "./Components/Suggestions";
import Brands from "./Components/Brands";
import Slider from "react-slick";
import Cards from "./Components/Cards";
import ProductList from "./Components/ProductList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InterestedCategory from "./Components/InterestedCategory";
import Information from "./Components/Information";
import PopularSide from "./Components/PopularSide";
import Footer from "./Components/Footer";

function App() {
  const [brandsData, setBrandsData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [interestedCategoryData, setInterestedCategoryData] = useState([]);
  const [informationData, setInformationData] = useState([]);
  const [popularSideData, setPopularSideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Bercanca4/api/main/api.json"
        );
        const data = await response.json();
        setBrandsData(data);
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
          "https://raw.githubusercontent.com/Bercanca4/api/main/cardsData.json"
        );
        const data = await response.json();
        setCardsData(data);
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
          "https://raw.githubusercontent.com/Bercanca4/api/main/productData.json"
        );
        const data = await response.json();
        setProductsData(data);
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
          "https://raw.githubusercontent.com/Bercanca4/api/main/interestedCategoryData.json"
        );
        const data = await response.json();
        setInterestedCategoryData(data);
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
          "https://raw.githubusercontent.com/Bercanca4/api/main/informationData.json"
        );
        const data = await response.json();
        setInformationData(data);
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
          "https://raw.githubusercontent.com/Bercanca4/api/main/popularSideData.json"
        );
        const data = await response.json();
        setPopularSideData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(popularSideData);

  const dataLists = [
    {
      data: "İndirim Kuponlarım",
      link: "https://www.trendyol.com/giris?cb=/Hesabim/IndirimKuponlari",
    },
    {
      data: "Trendyol'da Satış yap",
      link: "https://partner.trendyol.com/onboarding/satici-formu",
    },
    { data: "Hakkımızda", link: "https://www.trendyol.com/aboutus" },
    {
      data: "Yardım & Destek",
      link: "https://www.trendyol.com/yardim/sorular",
    },
  ];

  const CategoryData = [
    { name: "Kadın", statu: "" },
    { name: "Erkek", statu: "" },
    { name: "Anne & Çocuk", statu: "" },
    { name: "Ev & Yaşam", statu: "" },
    { name: "Süpermarket", statu: "" },
    { name: "Kozmetik", statu: "" },
    { name: "Ayakkabı & Çanta", statu: "" },
    { name: "Elektronik", statu: "" },
    { name: "Spor & Outdoor", statu: "" },
    { name: "Çok Satanlar", statu: "true" },
    { name: "Flaş Ürünler", statu: "true" },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 11,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  var settings1 = {
    dots: false,
    infinite: false,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
  };

  return (
    <>
      <div className="w-[1200px] mx-auto ">
        {/* Top Side - Bu alanda mini list arrayden geliyor */}
        <div className="flex gap-x-4 items-center justify-end">
          {dataLists.map((item, index) => (
            <TopSide key={index} data={item.data} link={item.link} />
          ))}
        </div>

        <Navbar />

        <div className="flex items-center justify-between gap-x-1  ">
          {CategoryData.map((item, index) => (
            <Categories
              key={index}
              name={item.name}
              statu={
                item.statu === "true" ? (
                  <p> Yeni</p>
                ) : (
                  <p style={{ backgroundColor: "white" }}>{item.statu}</p>
                )
              }
            />
          ))}
        </div>
      </div>

      <hr className="my-2" />

      <div className="w-[1200px] mx-auto ">
        <div className=" items-center overflow-hidden justify-center my-4 gap-x-8">
          <Slider {...settings}>
            {brandsData.map((item, index) => (
              <Brands
                key={index}
                Brandsname={item.Brandsname}
                logoUrl={item.logoUrl}
                link={item.link}
              />
            ))}
          </Slider>
        </div>

        <Suggestions />

        <div className="flex flex-wrap items-center justify-center gap-x-6">
          {cardsData.slice(0, 6).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              content={item.content}
              logoUrl={item.logoUrl}
              link={item.link}
            />
          ))}
        </div>

        <div className="  h-[453px] border rounded-xl my-4 overflow-hidden bg-[#FFFAF6]">
          <div className="flex items-cente justify-between m-4">
            <div>
              <label className="text-[22px] font-semibold opacity-70">
                Çok Satan Ürünler
              </label>
            </div>

            <div>
              <a href="https://www.trendyol.com/sr?wg=1&sst=BEST_SELLER">
                <label className="text-[14px] hover:cursor-pointer  opacity-70">
                  Tüm ürünler!
                </label>
              </a>
            </div>
          </div>

          <div className="flex items-center  gap-x-4 ml-3">
            {productsData.map((item, index) => (
              <ProductList
                key={index}
                id={item.id}
                logoUrl={item.logoUrl}
                price={item.price}
                brandname={item.brandname}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6">
          {cardsData.slice(6, 9).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              content={item.content}
              logoUrl={item.logoUrl}
              link={item.link}
            />
          ))}
        </div>

        <div className="  h-[453px] border rounded-xl my-4 overflow-hidden bg-[#FFFAF6]">
          <div className="flex items-cente justify-between m-4">
            <div>
              <label className="text-[22px] font-semibold opacity-70">
                Avantajlı Ürünler
              </label>
            </div>

            <div>
              <a href="https://www.trendyol.com/sr?wg=1&sst=BEST_SELLER">
                <label className="text-[14px] hover:cursor-pointer  opacity-70">
                  Tüm ürünler!
                </label>
              </a>
            </div>
          </div>

          <div className="flex items-center  gap-x-4 ml-3">
            {productsData.map((item, index) => (
              <ProductList
                key={index}
                id={item.id}
                logoUrl={item.logoUrl}
                price={item.price}
                brandname={item.brandname}
                title={item.title}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6">
          {cardsData.slice(9, 33).map((item, index) => (
            <Cards
              key={index}
              id={item.id}
              content={item.content}
              logoUrl={item.logoUrl}
              link={item.link}
            />
          ))}
        </div>

        <div className="my-8">
          <div>
            <label className="text-[20px] font-semibold">
              Bunlar da İlginizi Çekebilir
            </label>
          </div>

          <div className="flex flex-wrap  items-center justify-start whitespace-nowrap  my-4 gap-x-2 gap-y-3 ">
            {interestedCategoryData.map((item, index) => (
              <InterestedCategory
                key={index}
                name={item.name}
                link={item.link}
              />
            ))}
          </div>

          <hr className=" mt-8" />

          <div className=" items-center justify-start   ">
            {informationData.map((item, index) => (
              <Information
                key={index}
                title={item.title}
                descreption={item.descreption}
              />
            ))}
          </div>
        </div>
      </div>

      <hr />

      <div className="w-[1200px] h-[503px] my-4  mx-auto  items-center justify-center flex">
        <div className=" h-full flex-1  p-8 ">
          <div>
            <label className="text-[20px] p-4">
              Popüler Marka ve Mağazalar
            </label>
          </div>

          <div className="gap-y-4  gap-x-11 m-4 flex">
            <div>
              {popularSideData.slice(0, 15).map((item, index) => (
                <PopularSide key={index} data={item.data} />
              ))}
            </div>
            <div>
              {popularSideData.slice(15, 30).map((item, index) => (
                <PopularSide key={index} data={item.data} />
              ))}
            </div>
            <div>
              {popularSideData.slice(30, 45).map((item, index) => (
                <PopularSide key={index} data={item.data} />
              ))}
            </div>
          </div>
        </div>

        <div className=" h-full flex-1  p-8 ">
          <div>
            <label className="text-[20px] p-4">Popüler Sayfalar</label>
          </div>

          <div className="gap-x-11   m-4 flex">
            <div>
              {popularSideData.slice(45, 60).map((item, index) => (
                <PopularSide key={index} data={item.data} />
              ))}
            </div>
            <div>
              {popularSideData.slice(60, 75).map((item, index) => (
                <PopularSide key={index} data={item.data} />
              ))}
            </div>
            <div>
              {popularSideData.slice(75, 90).map((item, index) => (
                <PopularSide key={index} data={item.data} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
