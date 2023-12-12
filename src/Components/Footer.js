import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div >

    <div className="w-full h-[455px] bg-black">
    <div className="w-[1200px] h-full mx-auto  flex  ">

    <div className="p-8  mt-2  h-full flex-1 ">
    
    <div>
    <label className="text-white text-[20px] font-semibold hover:cursor-pointer "> Trendyol</label>
    </div>

    <div className="my-3">
    <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Biz Kimiz</label>
    </div>

    <div className="my-3">
    <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Kariyer</label>
    </div>

    <div className="my-3">
        <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> İletişim</label>
    </div> 
    
    <div className="my-3">
        <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Trendyol'dan Satış Yap</label>
    </div> 
    
    <div className="my-3">
        <label className="text-white text-[18px] font-semibold hover:cursor-pointer "> Güvenli Alışveriş</label>
    </div> 

    <div className="my-3 flex h-[100px] w-[300px]  border rounded-md">
             <div className="border flex-1 bg-[#2df4d3] items-center justify-center"><label className="  text-[18px] font-semibold hover:cursor-pointer text-center"> Troy</label></div>
             <div className="border flex-1 bg-red-600">Master</div>
             <div className="border flex-1 bg-white">visa</div>
             <div className="border flex-1 bg-blue-600">american</div>

    </div> 

   </div>

{/**        <div className="border flex-1"><label className=" text-white text-[14px] font-semibold hover:cursor-pointer rounded-full border p-1 bg-red-600 shadow-xl  h-auto text-center"> Troy</label></div>
       <div className="border flex-1"> <label className="text-white text-[14px] font-semibold hover:cursor-pointer rounded-full border p-1 bg-red-600 shadow-xl  h-auto text-center"> Master Card</label></div>
       <div className="border flex-1">  <label className="text-white text-[14px] font-semibold hover:cursor-pointer rounded-full border p-1 bg-red-600 shadow-xl  h-auto text-center"> Vısa</label></div>
       <div className="border flex-1">  <label className="text-white text-[14px] font-semibold hover:cursor-pointer rounded-full border p-1 bg-red-600 shadow-xl   h-auto text-center"> American Express</label></div> */}
   
   
   <div className="p-8  mt-2  h-full flex-1 ">
    
    <div>
    <label className="text-white text-[20px] font-semibold hover:cursor-pointer "> About us</label>
    </div>

    <div className="my-3">
    <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Who we are </label>
    </div>

    <div className="my-3">
    <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Careers</label>
    </div>

    <div className="my-3">
        <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Contact us</label>
    </div> 
    
    <div className="my-3">
        <label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Sustainability</label>
    </div> 
    
    <div className="my-3">
        <label className="text-white text-[18px] font-semibold hover:cursor-pointer "> Mobil Uygulamalar</label>
    </div> 

    <div>

    <div className="border w-[155px] my-3  h-[50px] flex items-center rounded-md hover:cursor-pointer hover:transition hover:duration-500 hover:scale-105 transition  duration-500 ">
        <FaApple  className="text-white  w-[30px]  h-[30px]  mx-2"/>
        <div>
        <div>  <label className="text-white text-[18px] font-semibold hover:cursor-pointer   "> App Store</label></div>
        <div>  <label className="text-white text-[14px] font-semibold hover:cursor-pointer   "> indirin</label></div>
        </div>
 
    </div>


    <div className="border w-[155px] my-3 h-[50px] flex items-center rounded-md hover:cursor-pointer  hover:transition hover:duration-500 hover:scale-105 transition  duration-500">
        <IoLogoGooglePlaystore  className="text-white  w-[30px]  h-[30px]  mx-2"/>
        <div>
        <div>  <label className="text-white text-[18px] font-semibold hover:cursor-pointer "> Google Play</label></div>
        <div>  <label className="text-white text-[14px] font-semibold hover:cursor-pointer   "> indirin</label></div>
        </div>
 
    </div>


    <div className="border w-[155px]  h-[50px] flex items-center rounded-md hover:cursor-pointer  hover:transition hover:duration-500 hover:scale-105 transition  duration-500">
        <IoLogoGooglePlaystore  className="text-white  w-[30px]  h-[30px]  mx-2"/>
        <div>
        <div>  <label className="text-white text-[18px] font-semibold hover:cursor-pointer   "> AppGallery</label></div>
        <div>  <label className="text-white text-[14px] font-semibold hover:cursor-pointer   "> indirin</label></div>
        </div>
 
    </div>

    </div>
    

   </div>
   
   <div className="p-8 h-full mt-2   flex-1">


    <div><label className="text-white text-[20px] font-semibold hover:cursor-pointer "> Kampanyalar</label></div>

    <div className="my-3"><label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Aktif Kampanyalar </label></div>

    <div className="my-3"><label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Elite Üyelik </label></div>

    <div className="my-3"><label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Hediye Fikirleri </label></div>

    
    <div className="my-3"><label className="text-white text-[14px] font-semibold hover:cursor-pointer "> Trendyol Fırsatları </label></div>

    <div className="my-3"><label className="text-white text-[18px] font-semibold hover:cursor-pointer ">Sosyal Medya  </label></div>


    <div className="flex items-center gap-x-2 ">
       
       <div className=" rounded-full  flex items-center justify-center hover:bg-blue-500 hover:cursor-pointer bg-white"><FaFacebook className="text-black h-[30px] w-[30px] p-1"/></div>
       <div className=" rounded-full  flex items-center justify-center hover:bg-red-500 hover:cursor-pointer bg-white"><RiInstagramFill className="text-black h-[30px] w-[30px] p-1"/></div>
       <div className=" rounded-full  flex items-center justify-center hover:bg-blue-500 hover:cursor-pointer bg-white"><FaTwitter className="text-black h-[30px] w-[30px] p-1"/></div>
       <div className=" rounded-full  flex items-center justify-center hover:bg-red-500 hover:cursor-pointer bg-white"><FaYoutube className="text-black h-[30px] w-[30px] p-1"/></div>

   </div>
    


   </div>

   <div className="p-8 h-full mt-2   flex-1">
   <label className="text-white text-[20px] font-semibold"> Yardım</label>
   </div>
    </div>
    </div>

    <div className="w-full h-[36px] bg-[#2D2D2D] flex items-center ">
    <div className="w-[1200px] mx-auto  flex justify-between items-center ">
    
    <div>
    <label className="text-white select-none text-[12px]">©2023 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</label>
    </div>

    <div className="gap-x-4 flex">

    <div><label className="text-white select-none text-[12px] hover:cursor-pointer">Çerez Tercihleri</label></div>
   
    <div> <label className="text-white select-none text-[12px] hover:cursor-pointer">KVK ve Gizlilik Politikası</label></div>
   
    <div> <label className="text-white select-none text-[12px] hover:cursor-pointer">Dsm Grup</label></div>
    
    <div> <label className="text-white select-none text-[12px] hover:cursor-pointer">Kullanım Koşulları</label></div>
    </div>

    </div>
    </div>  


    </div>
  )
}

export default Footer