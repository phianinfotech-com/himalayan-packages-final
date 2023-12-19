import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import Swal from "sweetalert2";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import TitleInCamelCase from "./TitleInCamelCase";

export default function SliderComponent() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // Fetch image URLs from the API
    fetch("https://himalayanpackages.com/himalayan/api-fetch-get_images.php")
      .then((response) => response.json())
      .then((data) => setImageUrls(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const [himachal, setHimachal] = useState([]);
  useEffect(() => {
    getHimachal();
    AOS.init({ duration: 1000 });
  }, []);

  function getHimachal() {
    axios
      .get("https://himalayanpackages.com/himalayan/api-hiimachal-package.php")
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
      .get(
        "https://himalayanpackages.com/himalayan/api-best-of-himachal-package.php"
      )
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
      .get("https://himalayanpackages.com/himalayan/api-best-of-Uttrakhand.php")
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
      .get(
        "https://himalayanpackages.com/himalayan/api-fetch-uttrakhand-package.php"
      )
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
      .get("https://himalayanpackages.com/himalayan/api-best-of-kashmir.php")
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
      .get(
        "https://himalayanpackages.com/himalayan/api-fetch-kashmir-package.php"
      )
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
    var itemWidth = slider.offsetWidth; // Get the width of one item in the slider
    var totalWidth = slider.scrollWidth; // Get the total width of all items in the slider
    slider.scrollLeft = slider.scrollLeft - itemWidth;
  };

  const slideRight5 = () => {
    var slider = document.getElementById("slider5");
    var itemWidth = slider.offsetWidth; // Get the width of one item in the slider
    var totalWidth = slider.scrollWidth; // Get the total width of all items in the slider
    slider.scrollLeft = slider.scrollLeft + itemWidth;
  };

  const slideLeft6 = () => {
    var slider = document.getElementById("slider6");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight6 = () => {
    var slider = document.getElementById("slider6");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft7 = () => {
    var slider = document.getElementById("slider7");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight7 = () => {
    var slider = document.getElementById("slider7");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const slideLeft8 = () => {
    var slider = document.getElementById("slider8");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight8 = () => {
    var slider = document.getElementById("slider8");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const [dataapi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://himalayanpackages.com/himalayan/api-all-ads.php")
      .then((response) => {
        setDataApi(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
    AOS.init({ duration: 1000 });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mb-10">
      <div className="text-gray-600 body-font " data-aos="zoom-in-up">
        <div className="container mx-auto px-8">
          <div
            className="flex flex-wrap md:mx-20 text-center items-center border-2 border-rose-600 rounded-lg"
            style={{
              border: "1px solid #1a96cb",
              boxShadow: "0 0 10px rgba(26,150,203.10)",
            }}
          >
            <div className="sm:w-3/4 mb-10 px-4 flex flex-col items-center justify-center h-full">
              <h2 className="font-medium title-font mt-4 text-primary text-2xl">
                <TitleInCamelCase title="Bigger Group? Get special offers upto 50% off! " />
              </h2>

              <p className="text-base">
                <TitleInCamelCase
                  title="We create unforgettable adventures, customised for your group.
"
                />
              </p>
            </div>

            <div className="sm:w-1/4 m-auto">
              <button className="btn btn-active btn-primary">
                <Link to={`tel:9518337299`}>Call Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center md:mt-10 md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideLeft5}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider5"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          data-aos="zoom-in-up"
        >
          {dataapi !== null && dataapi.length > 0 ? (
            dataapi.map((dataapi, index) => (
              <div
                key={`slide${index + 1}`}
                id={`slide${index + 1}`}
                className="relative inline-block"
              >
                <Link to={`/collections/${dataapi.Slug}`}>
                  <img
                    className="w-fullh-auto p-2 cursor-pointer hover:scale-10 ease-in-out duration-300 rounded-[20px]"
                    src={dataapi.A_IMG}
                    alt={dataapi.A_ALT}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideRight5}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>


      {/*owl carousel for best of Himachal*/}
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          {himachal[0]?.BName}
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
          data-aos="zoom-in-up"
        >
          {Array.isArray(himachal) &&
            himachal.map((hp) => (
              <div key={hp.id} className="relative inline-block">
                <Link to={`/collections/${hp.category_slug}`}>
                  <img
                    className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
                    src={hp.CImg}
                    alt={hp.CAlt}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
                    <p className="text-white font-bold text-3xl leading-8">
                      <TitleInCamelCase title={hp.CName} />
                    </p>
                  </div>
                </Link>
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

      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          {himachalpackage[0]?.BName}
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>
      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideLeft6}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider6"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          data-aos="zoom-in-up"
        >
          {Array.isArray(himachalpackage) &&
            himachalpackage.map((hpkg) => (
              <div key={hpkg.pkg_PID} className="relative inline-block">
                <Link to={`/tours/${hpkg.pkg_slug}`}>
                  <div className="relative">
                    <div className="">
                      <img
                        className="w-64 h-80 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
                        src={hpkg.banner1}
                        alt={hpkg.banner_alt1}
                      />
                    </div>
                  </div>
                  <div className="w-64 font-bold text-xl">
                    <p className="whitespace-pre-line mx-2">
                      <TitleInCamelCase
                        title={
                          hpkg.PTitle.length > 20
                            ? `${hpkg.PTitle.substring(0, 38)}...`
                            : hpkg.PTitle
                        }
                      />
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideRight6}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>

      {/*carousel for best of Himachal*/}

      {/*owl carousel for best of uttrakhand*/}
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          {uttrakhand[0]?.BName}
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>
      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideLeft2}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider2"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          data-aos="zoom-in-up"
        >
          {Array.isArray(uttrakhand) &&
            uttrakhand.map((uk) => (
              <div key={uk.id} className="relative inline-block">
                <Link to={`/collections/${uk.category_slug}`}>
                  <img
                    className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
                    src={uk.CImg}
                    alt={uk.CAlt}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
                    <p className="text-white font-bold text-3xl leading-8">
                      <TitleInCamelCase title={uk.CName} />
                    </p>
                  </div>
                </Link>
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
      {/* uttarakhand start package */}

      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          {uttrakhandpackage[0]?.BName}
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>
      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideLeft7}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider7"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          data-aos="zoom-in-up"
        >
          {Array.isArray(uttrakhandpackage) &&
            uttrakhandpackage.map((ukpkg) => (
              <div key={ukpkg.pkg_PID} className="relative inline-block">
                <Link to={`/tours/${ukpkg.pkg_slug}`}>
                  <div className="relative">
                    <img
                      className="w-64 h-80 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
                      src={ukpkg.banner1}
                      alt={ukpkg.banner_alt1}
                    />
                    {/* <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white font-bold text-3xl leading-8">
                {ukpkg.temp}
              </p>
            </div> */}
                  </div>
                  <div className="w-64 font-bold text-xl">
                    <p className="whitespace-pre-line mx-2">
                      <TitleInCamelCase
                        title={
                          ukpkg.PTitle.length > 20
                            ? `${ukpkg.PTitle.substring(0, 38)}...`
                            : ukpkg.PTitle
                        }
                      />
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideRight7}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>

      {/*carousel for best of Himachal*/}

      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          Tiger Reserve Near You
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>
      <div className="relative flex items-center md:mx-20 mx-4">
        <div
          id="slider8"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          data-aos="zoom-in-up"
        >
          <div className="flex flex-wrap md:mx-20 ">
            {/* Adjusted width for large screens (lg) */}

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0  mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <p className="text-gray-900 title-font font-medium">
                  Bandhavgarh National Park

                  </p>
                 
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0  mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <p className="text-gray-900 title-font font-medium">
                    Pench National Park
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0  mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <p className="text-gray-900 title-font font-medium">
                    Satpura Tiger Reserve
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0  mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <p className="text-gray-900 title-font font-medium">
                    Tadoba National Park
                  </p>
                 
                </div>
              </div>
            </div>

            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0  mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <p className="text-gray-900 title-font font-medium">
                    Jim Corbett National Park
                  </p>
                 
                </div>
              </div>
            </div>

           

            

          </div>
        </div>
      </div>

      {/* slider code starts*/}


      {/*owl carousel for best of kashmir*/}
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          {kashmir[0]?.BName}
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>
      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideLeft4}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider4"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
          data-aos="zoom-in-up"
        >
          {Array.isArray(kashmir) &&
            kashmir.map((k) => (
              <div key={k.id} className="relative inline-block">
                <Link to={`/collections/${k.category_slug}`}>
                  <img
                    className="w-64 h-auto p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
                    src={k.CImg}
                    alt={k.CAlt}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-center justify-center">
                    <p className="text-white font-bold text-3xl leading-8">
                      <TitleInCamelCase title={k.CName} />
                    </p>
                  </div>
                </Link>
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

      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          {kashmirpackage[0]?.BName}
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>
      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideLeft8}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider8"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          data-aos="zoom-in-up"
        >
          {Array.isArray(kashmirpackage) &&
            kashmirpackage.map((kkpkg) => (
              <div key={kkpkg.pkg_PID} className="relative inline-block">
                <Link to={`/tours/${kkpkg.pkg_slug}`}>
                  <div className="relative">
                    <img
                      className="w-64 h-80 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px]"
                      src={kkpkg.banner1}
                      alt={kkpkg.banner_alt1}
                    />
                    {/* <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white font-bold text-3xl leading-8">
                {kkpkg.temp}
              </p>
            </div> */}
                  </div>
                  <div className="w-64 font-bold text-xl">
                    <p className="whitespace-pre-line mx-2">
                      <TitleInCamelCase
                        title={
                          kkpkg.PTitle.length > 20
                            ? `${kkpkg.PTitle.substring(0, 38)}...`
                            : kkpkg.PTitle
                        }
                      />
                    </p>
                  </div>
                </Link>
              </div>
            ))}
        </div>

        <button
          className="hidden md:btn md:btn-circle md:btn-outline btn-primary md:mx-2"
          onClick={slideRight8}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>

      {/*carousel for best of kashmir*/}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font">
              Our Partners
            </h2>
            <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
          </div>

          <div className="relative flex items-center md:mx-20 mx-4">
            <div
              id="slider8"
              className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              data-aos="zoom-in-up"
            >
              <div className="flex flex-wrap md:mx-20 mx-4">
                {/* Adjusted width for large screens (lg) */}
                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                {/* Repeat the pattern for additional partner logos */}

                {/* For large screens (lg), display 6 images in a row */}
                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                {/* Repeat the pattern for additional partner logos */}

                {/* For large screens (lg), display 6 images in a row */}
                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                <div className="p-2 lg:w-1/6 w-1/3  ">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>

                {/* Repeat the pattern for additional partner logos */}

                {/* For large screens (lg), display 6 images in a row */}
                <div className="p-2 md:w-1/6 w-1/3">
                  <div className="h-full flex items-center border-gray-200">
                    <img
                      alt="partner"
                      className="w-24 object-cover object-center flex-shrink-0"
                      src="https://naturessprout.com/wp-content/uploads/2021/09/Header-logo.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
