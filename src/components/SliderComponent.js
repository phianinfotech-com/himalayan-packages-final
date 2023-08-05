import React from 'react'
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
export default function SliderComponent() {
  


  const [imageUrls, setImageUrls] = useState([]);

useEffect(() => {
  // Fetch image URLs from the API
  fetch('http://localhost/himalayan/api-fetch-get_images.php')
    .then(response => response.json())
    .then(data => setImageUrls(data))
    .catch(error => console.error('Error fetching images:', error));
}, []);


  const [himachal, setHimachal] = useState([]);
  useEffect(() => {
    getHimachal();
   
  }, []);

    function getHimachal() {
    axios
      .get("http://localhost/himalayan/api-hiimachal-package.php")
      .then(function (response) {
        setHimachal(response.data);
      })

      .catch(function (error) {
        console.error("Error fetching Himachal data:", error);
      });
  }


  const [himachalpackage, setHimachalpackage] = useState([]);
  useEffect(() => {
    gethimachalpackage();
   
  }, []);

    function gethimachalpackage() {
    axios
      .get("http://localhost/himalayan/api-fetch-Himachal-Pradesh.php")
      .then(function (response) {
        setHimachalpackage(response.data);
      })

      .catch(function (error) {
        console.error("Error fetching Himachalpackage data:", error);
      });
  }


  const [uttrakhand, setUttrakhand] = useState([]);
  useEffect(() => {
    getuttrakhand();
   
  }, []);

    function getuttrakhand() {
    axios
      .get("http://localhost/himalayan/api-best-of-Uttrakhand.php")
      .then(function (response) {
        setUttrakhand(response.data);
      })

      .catch(function (error) {
        console.error("Error fetching Uttrakhand data:", error);
      });
  }

  const [uttrakhandpackage, setUttrakhandpackage] = useState([]);
  useEffect(() => {
    getuttrakhandpackage();
   
  }, []);

    function getuttrakhandpackage() {
    axios
      .get("http://localhost/himalayan/api-fetch-uttrakhand-package.php")
      .then(function (response) {
        setUttrakhandpackage(response.data);
      })

      .catch(function (error) {
        console.error("Error fetching Uttrakhandpackage data:", error);
      });
    }


  const [kashmir, setKashmir] = useState([]);
  useEffect(() => {
    getkashmir();
   
  }, []);

    function getkashmir() {
    axios
      .get("http://localhost/himalayan/api-best-of-kashmir.php")
      .then(function (response) {
        setKashmir(response.data);
      })

      .catch(function (error) {
        console.error("Error fetching Kashmir data:", error);
      });
  }
 
  
  const [kashmirpackage, setKashmirpackage] = useState([]);
  useEffect(() => {
    getkashmirpackage();
   
  }, []);

    function getkashmirpackage() {
    axios
      .get("http://localhost/himalayan/api-fetch-kashmir-package.php")
      .then(function (response) {
        setKashmirpackage(response.data);
      })

      .catch(function (error) {
        console.error("Error fetching Kashmir data:", error);
      });
  }
 


  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  const slideLeft1 = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight1 = () => {
    var slider = document.getElementById("slider1");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft4 = () => {
    var slider = document.getElementById("slider4");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight4 = () => {
    var slider = document.getElementById("slider4");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft5 = () => {
    var slider = document.getElementById("slider5");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight5 = () => {
    var slider = document.getElementById("slider5");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

 
  


  return (
    <>
     {/*owl carousel for best of Himachal*/}
     <div className="flex flex-col items-center text-center justify-center">
     <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
       {himachal[1]?.BName}
     </h2>
     <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
   </div>
   <div className="relative flex items-center md:mx-20 mx-4">
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideLeft}
     >
       <HiChevronLeft className="h-6 w-6 " />
     </button>
     <div
       id="slider"
       className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
     >
      {Array.isArray(himachal) && himachal.map((hp) => (
         <div key={hp.id} className="relative inline-block">
           <img
             className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
             src={hp.CImg}
             alt={hp.CAlt}
           />
           <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
             <p className="text-white font-bold text-3xl leading-8">
               {hp.CName}
             </p>
           </div>
         </div>
       ))}
     </div>
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideRight}
     >
       <HiChevronRight className="h-6 w-6 " />
     </button>
   </div>

   {/*carousel for best of Himachal*/}

   {/*owl carousel for best of uttrakhand*/}
   <div className="flex flex-col items-center text-center justify-center">
     <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
       {uttrakhand[5]?.BName}
     </h2>
     <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
   </div>
   <div className="relative flex items-center md:mx-20 mx-4">
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideLeft2}
     >
       <HiChevronLeft className="h-6 w-6 "/>
     </button>
     <div
       id="slider2"
       className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
     >
      {Array.isArray(uttrakhand) && uttrakhand.map((uk) => (
         <div key={uk.id} className="relative inline-block">
           <img
             className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
             src={uk.CImg}
             alt={uk.CAlt}
           />
           <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
             <p className="text-white font-bold text-3xl leading-8">
               {uk.CName}
             </p>
           </div>
         </div>
       ))}
     </div>
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideRight2}
     >
       <HiChevronRight className="h-6 w-6 " />
     </button>
   </div>

   {/*carousel for best of Himachal*/}


    {/*owl carousel for best of Himachalpackage*/}
    <div className="flex flex-col items-center text-center justify-center">
     <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
       {himachalpackage[6]?.BName}
     </h2>
     <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
   </div>
   <div className="relative flex items-center md:mx-20 mx-4">
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideLeft1}
     >
       <HiChevronLeft className="h-6 w-6 " />
     </button>
     <div
       id="slider1"
       className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
     >
      {Array.isArray(himachalpackage) && himachalpackage.map((hpkg) => (
         <div key={hpkg.id} className="relative inline-block">
           <img
             className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
             src={hpkg.CImg}
             alt={hpkg.CAlt}
           />
           <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
             <p className="text-white font-bold text-3xl leading-8">
               {hpkg.CName}
             </p>
           </div>
         </div>
       ))}
     </div>
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideRight1}
     >
       <HiChevronRight className="h-6 w-6 " />
     </button>
   </div>

   {/*carousel for best of Himachal*/}

  

  
   <section className="text-gray-600 body-font">
      <div className="container px-12 py-7  mx-auto">
        <div className="flex flex-col text-center w-full mb-2px">
          <div className="carousel rounded-lg w-full  py-7">
            {imageUrls.length > 0 ? (
              imageUrls.map((imageUrl, index) => (
                <div key={`slide${index + 1}`} id={`slide${index + 1}`} className="carousel-item relative w-full">
                  <img src={imageUrl.A_IMG} className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${index}`}
                      className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${index + 2}`}
                      className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </section>



      {/*owl carousel for best of kashmir*/}
     <div className="flex flex-col items-center text-center justify-center">
     <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
       {kashmir[3]?.BName}
     </h2>
     <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
   </div>
   <div className="relative flex items-center md:mx-20 mx-4">
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideLeft4}
     >
       <HiChevronLeft className="h-6 w-6 "/>
     </button>
     <div
       id="slider4"
       className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
     >
      {Array.isArray(kashmir) && kashmir.map((k) => (
         <div key={k.id} className="relative inline-block">
           <img
             className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
             src={k.CImg}
             alt={k.CAlt}
           />
           <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
             <p className="text-white font-bold text-3xl leading-8">
               {k.CName}
             </p>
           </div>
         </div>
       ))}
     </div>
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideRight4}
     >
       <HiChevronRight className="h-6 w-6 " />
     </button>
   </div>
   {/*carousel for best of kashmir*/}

   {/*owl carousel for best of kashmir*/}
   <div className="flex flex-col items-center text-center justify-center">
     <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
       {kashmirpackage[2]?.BName}
     </h2>
     <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
   </div>
   <div className="relative flex items-center md:mx-20 mx-4">
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideLeft5}
     >
       <HiChevronLeft className="h-6 w-6 "/>
     </button>
     <div
       id="slider5"
       className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
     >
      {Array.isArray(kashmirpackage) && kashmirpackage.map((kpkg) => (
         <div key={kpkg.id} className="relative inline-block">
           <img
             className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
             src={kpkg.CImg}
             alt={kpkg.CAlt}
           />
           <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
             <p className="text-white font-bold text-3xl leading-8">
               {kpkg.CName}
             </p>
           </div>
         </div>
       ))}
     </div>
     <button
       className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
       onClick={slideRight5}
     >
       <HiChevronRight className="h-6 w-6 " />
     </button>
   </div>
   {/*carousel for best of kashmir*/}



   </>
  )
}
