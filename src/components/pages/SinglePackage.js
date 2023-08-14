import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import Navbar from "../Navbar";
import SearchAllBlog from "../SearchAllBlog";
import Footer from "../Footer";
import Enquire from "../Enquire";
import { HiOutlineCheck, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SinglePackage() {
  const slugToCamelCase = (slug) => {
    const words = slug.split("-");
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = slugToCamelCase(
    window.location.pathname.split("/collections/").pop()
  );

  const currentURL = window.location.href;
  console.log(currentURL);
  const navigate = useNavigate();

  // State to store the blog post data
  const [data, setData] = useState(null);

  // Function to fetch blog post data by its slug
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost/himalayan/api-fetch-single-package.php?slug=${slug}`
      );
      const jsonData = await response.json();

      // Check if the response contains an error
      if (jsonData.error) {
        // Redirect to a different route
        navigate("/"); // Replace "/error-page" with the actual route you want to redirect to
      } else {
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch blog post data when the component mounts or the slug changes in the URL
  useEffect(() => {
    const urlSlug = window.location.pathname.split("/tours/").pop();
    const withoutslash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutslash);
  }, []);

  // Function to handle click on a blog post in the list
  const handleBlogClick = (slug) => {
    fetchDataBySlug(slug);
  };

  const [currentTab, setCurrentTab] = useState("1");

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleTabClick1 = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div>
      {/* this is gallary code */}
      {/* Navbar and Hero Section */}
      <div className="relative">
        <Navbar />
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2 h-40">
            <img
              alt={data ? data[0].banner_alt1 : ""}
              class=" rounded-lg w-full h-full object-cover object-center block"
              src={data ? data[0].banner1 : ""}
            />
          </div>
          <div class="h-40">
            <img
              alt={data ? data[0].banner_alt2 : ""}
              class="rounded-lg w-full object-cover h-full object-center block"
              src={data ? data[0].banner2 : ""}
            />
          </div>
          <div class="h-40">
            <img
              alt={data ? data[0].banner_alt4 : ""}
              class=" rounded-lg w-full object-cover h-full object-center block"
              src={data ? data[0].banner3 : ""}
            />
          </div>
          <div class="col-span-2 h-40">
            <img
              alt={data ? data[0].banner_alt4 : ""}
              class="rounded-lg w-full h-full object-cover object-center block"
              src={data ? data[0].banner4 : ""}
            />
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      {/* Main Body  Section */}
      <div className="flex md:mx-10 mx-1 py-10">
        {/* Main main page of sidebar Section */}
        <div className="flex-1">
          <section className="text-gray-600 body-font">

          <div className="card w-auto bg-base-100 shadow-xl md:my-4 md:mx-10 my-4 mx-4 h-full border-2  overflow-hidden">
            <div className="h-25 w-auto mx-auto py-4 h-auto">
                          <p class="md:text-4xl text-left	font-bold text-black pl-2 ">
                            {data ? data[0].PTitle : ""}
                          </p>

                          <div className="flex justify-center space-x-4 p-2">
                          <HiOutlineClock className="h-8 w-8 my-2" />
                            <div className="py-2">
                              <p>{data ? data[0].Duration : ""}</p>
                            </div>
                            <HiOutlineLocationMarker className="h-8 w-8 my-2" />
                            <div className="py-2">
                              <p>{data ? data[0].CName : ""}</p>
                            </div>
                          </div>
                          {/* day-night-sun-moon-cycle */}
                    
   
                        <div className="grid grid-cols-4 gap-4 px-4">
                          {data &&
                            data.length > 0 &&
                            [1, 2, 3, 4].map((imgIndex) => {
                              const imgKey = `key_img${imgIndex}`;
                              const imgAltKey = `key_img_alt${imgIndex}`;
                              return data[0][imgKey] ? (
                                <div key={imgIndex} className="p-2 relative">
                                  <div className="flex flex-col items-center">
                                    <img
                                      alt={data[0][imgAltKey]}
                                      className="rounded-lg md:w-20 md:h-20  w-10 h-10  object-cover object-center block mb-2"
                                      src={data[0][imgKey]}
                                    />
                                    <div className=" text-black text-center py-2 opacity-75">
                                      {data[0][imgAltKey]}
                                    </div>
                                  </div>
                                </div>
                              ) : null;
                            })}
                        </div>

                      </div>
            </div>

            <div className="card w-auto bg-base-100 shadow-xl md:my-4 md:mx-10 my-4 mx-4 h-full border-2  overflow-hidden mb-10 md:mb-20">
            <div className="h-25 w-auto mx-auto py-4 h-auto">
                          <p class="text-2xl text-left	font-bold  pl-2 my-4 ">
                            Select Package Options{" "}
                          </p>

                          <div className="container mx-auto px-4 ">
                            <div className="flex  mb-4">
                              {data &&
                                data.map((tab, index) => (
                                  <button
                                    key={index}
                                    className={`px-4 py-2 mr-2 md:w-36 h-auto w-24   ${
                                      activeTab === index
                                        ? "btn btn-outline btn-primary"
                                        : "btn btn-outline "
                                    }`}
                                    onClick={() => handleTabClick(index)}
                                  >
                                    {tab.PTitle} for {tab.Duration}
                                  </button>
                                ))}
                            </div>
                            <div>
                              {/* Display content based on active tab */}
                              {data &&
                                data.map((tab, index) => (
                                  <div
                                    key={index}
                                    className={
                                      activeTab === index ? "block" : "hidden"
                                    }
                                  >
                                    <div className="mx-4"
                                      dangerouslySetInnerHTML={{
                                        __html: tab.Content,
                                      }}
                                    />
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
            </div>


          </section>
        </div>

        {/* side bar code */}
        <div className="hidden md:flex sticky top-0 h-screen w-1/4 md:mt-3 md:mr-10 md:mb-20">
          <Enquire />
        </div>
        {/* side bar code */}
      </div>

      {/* End of the Gallary Code */}

      <Footer />
    </div>
  );
}
