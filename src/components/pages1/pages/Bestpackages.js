import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../Navbar";

import Footer from "../Footer";
import Enquire from "../Enquire";
import SearchPackage from "../SearchPackage";
import { HiOutlineClock } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Bestpackages() {
  // Function to convert slug to camel case text with all first letters uppercase
  const slugToCamelCase = (slug) => {
    const words = slug.split("-");
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = slugToCamelCase(
    window.location.pathname.split("/bestpackages/").pop()
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
        "https://himalayanpackages.com/himalayan/api-fetch-uttrakhand-package.php"
      );
      const jsonData = await response.json();

      // Check if the response contains an error
      if (jsonData.error) {
        // Redirect to a different route

        return <p>loading...</p>;
      } else {
        setData(jsonData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch blog post data when the component mounts or the slug changes in the URL
  useEffect(() => {
    const urlSlug = window.location.pathname.split("/bestpackages/").pop();
    const withoutslash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutslash);
    AOS.init({ duration: 1000 });
  }, []);

  // Function to handle click on a blog post in the list
  const handleBlogClick = (slug) => {
    fetchDataBySlug(slug);
  };

  const [features, setFeatures] = useState([]); // for features\

  useEffect(() => {
    getFeatures();
    getcategory();
    getDuration();
    getTypeof();
  }, []);

  function getFeatures() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_features.php/")
      .then(function (response) {
        setFeatures(response.data);
      });
  }

  const [cat, setCat] = useState([]); // for category

  function getcategory() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_category.php/")
      .then(function (response) {
        setCat(response.data);
      });
  }

  const [dur, setDuration] = useState([]); // for category

  function getDuration() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_by_duration.php/")
      .then(function (response) {
        setDuration(response.data);
      });
  }
  const [location, setLocation] = useState([]); // for category

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);

    // Update the slug using the selected location
    const updatedSlug = selectedLocation.toLowerCase().replace(/\s+/g, "-");
    fetchDataBySlug(updatedSlug); // Call the fetchDataBySlug function with the updated slug
  };

  const [selectedDuration, setSelectedDuration] = useState(""); // Initialize selectedDuration as an empty string

  const handleDurationChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDuration(selectedValue);

    // Update the slug using the selected duration value
    const updatedSlug = selectedValue.toLowerCase().replace(/\s+/g, "-");
    fetchDataBySlug(updatedSlug); // Call the fetchDataBySlug function with the updated slug
  };

  const [mytypesof, setMytypeof] = useState([]); // for category

  function getTypeof() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_by_type.php/")
      .then(function (response) {
        setMytypeof(response.data);
      });
  }

  const [SelectedTypeof, setSelectedTypeof] = useState(""); // Initialize selectedDuration as an empty string

  const handleTypeofChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedTypeof(selectedValue);

    // Update the slug using the selected duration value
    const updatedSlug = selectedValue.toLowerCase().replace(/\s+/g, "-");
    fetchDataBySlug(updatedSlug); // Call the fetchDataBySlug function with the updated slug
  };

  return (
    <div  className=" bg-[#f3f9ed]">
      {/* Navbar and Hero Section */}
      <div className="relative">
        <section className="bg-[url('https://images.thrillophilia.com/image/upload/s--_XQ_pqQH--/c_fill,g_auto,h_642,w_1400/dpr_1.0/v1/collections/images/015/120/655/original/1655472205_shutterstock_1141239563.jpg.jpg')] w-full h-96 bg-cover bg-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>{" "}
          {/* Black overlay */}
          <Navbar />
          <h2 className="text-3xl md:text-5xl text-white font-semibold absolute bottom-5 text-center left-1/2 transform -translate-x-1/2 p-4 z-10">
            {pageTitle}
          </h2>
        </section>
      </div>

      {/* Blog Posts Section */}
      {/* Main Body  Section */}
      <div className="flex">
        {/* Main main page of sidebar Section */}
        <div className="flex-1">
          <section className="text-gray-600 body-font">
            <div className="container px-10 mt-5 mb-20 mx-auto">
              {/* SearchAllBlog */}

              {/* Display the blog posts */}
              <div className="flex-wrap -m-4 grid md:grid-cols-1 md:gap-3">
                {data && data.error ? (
                  <div className="text-center text-red-500">{data.error}</div>
                ) : data && data.length > 0 ? (
                  <div className="p-4 text-justify font-semibold">
                    {data[0].content}
                  </div>
                ) : (
                  <div className="text-center text-gray-500">Loading...</div>
                )}

                {/* <div className="mx-4 shadow-xl border-2 h-auto rounded-xl	flex">
                  <div className="py-4 px-2  w-1/3">
                    <SearchPackage handleBlogClick={handleBlogClick} />
                  </div>
                  <div className="py-4 px-2  w-1/3">
                    <select
                      className="select select-primary w-full max-w-xs"
                      value={location}
                      onChange={handleLocationChange}
                    >
                      <option disabled value="">
                        Select Location
                      </option>
                      {cat.map((category, index) => (
                        <option
                          key={`${category.CID}-${index}`}
                          value={category.CName}
                        >
                          {category.CName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="py-4 px-2 w-1/3">
                    <select
                      className="select select-primary w-full max-w-xs"
                      value={selectedDuration}
                      onChange={handleDurationChange}
                    >
                      <option disabled value="">
                        Select Duration
                      </option>

                      {dur.map((items, index) => (
                        <option
                          key={`${items.PID}-${index}`}
                          value={items.temp}
                        >
                          {items.temp}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="py-4 px-2 w-1/3">
                    <select
                      className="select select-primary w-full max-w-xs"
                      value={SelectedTypeof}
                      onChange={handleTypeofChange}
                    >
                      <option disabled value="">
                        Select Type
                      </option>

                      {mytypesof.map((aptype, index) => (
                        <option
                          key={`${aptype.PID}-${index}`}
                          value={aptype.type}
                        >
                          {aptype.type}
                        </option>
                      ))}
                    </select>
                  </div>

                  
                </div> */}

                {/* this is card */}
                {data && data.error ? (
                  <div className="text-center text-red-500">{data.error}</div>
                ) : data ? (
                  data.map((post) => (
                    <div key={post.PID} className="md:w-full p-4 ">
                      <div className="card lg:card-side bg-base-100 shadow-xl border-2 md:h-72 "  data-aos="zoom-in-up">
                        <figure className="w-80 h-45 pr-20 relative">
                          
                          {/* Adjust width and height based on the aspect ratio */}
                          <div className="absolute inset-0">
                            <img
                              src={post.banner1}
                              alt={post.banner_alt1}
                              className="h-full w-30 object-cover"
                            />
                          </div>
                        </figure>

                        <div className="card-body">
                          <h2 className="card-title"> {post.PTitle}</h2>

                          <div className="card-actions justify-center">
                            {features.length > 0 &&
                              features.map((feature, index) => (
                                <div
                                  key={`feature-${index}`}
                                  className="p-2 relative"
                                >
                                  <div className="flex flex-col items-center">
                                    <img
                                      alt={feature.Key_Alt}
                                      className="rounded-full border-2 border-primary md:w-16  md:h-16 w-10 h-10 object-cover object-center block mb-2"
                                      src={feature.Key_Img}
                                    />
                                    <div className="text-black text-center py-2 opacity-75">
                                      {feature.Key_Name}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>

                          <div className="card-actions justify-end">
                            <div className="flex items-center text-primary hover:text-secondary ">
                              <HiOutlineClock className="h-8 w-8 m-2" />
                              <div className="text-xl md:mb-2 lg:mb-0">
                                {post.temp}{" "}
                                {/* Display the duration of the package */}
                              </div>
                            </div>

                            <div className="flex items-center">
                              <div className="text-xl md:mb-2 lg:mb-0">
                                <span className="text-2xl font-bold text-black-500">
                                  {/* ₹ 129999 */}
                                  {/* Display the price of the package */}
                                </span>

                                <span className="text-gray-500">
                                  {/* per adult */}
                                </span>
                              </div>
                            </div>
                            <Link to={`/tours/${post.pkg_slug}/`}>
                              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-xl text-lg">
                                Learn More
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">Loading...</div>
                )}
                {/* this is card */}
              </div>

              {/* Pagination */}
            </div>
          </section>
        </div>

        {/* side bar code */}
        <div className="hidden md:flex sticky top-0 h-screen w-1/4 md:mt-5 md:mr-10 md:mb-20">
          <Enquire />
        </div>
        {/* side bar code */}
      </div>

      <Footer />
    </div>
  );
}

export default Bestpackages;
