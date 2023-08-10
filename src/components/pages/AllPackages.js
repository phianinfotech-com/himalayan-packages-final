import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import Navbar from "../Navbar";
import SearchAllBlog from "../SearchAllBlog";
import Footer from "../Footer";
import Enquire from "../Enquire";
import { HiOutlineCheck, HiOutlineClock } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function AllPackages() {
  // Function to convert slug to camel case text with all first letters uppercase
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
        `https://himalayanpackages.com/himalayan/api-fetch-all-package-for-memory.php?slug=${slug}`
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
    const urlSlug = window.location.pathname.split("/collections/").pop();
    const withoutslash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutslash);
  }, []);

  // Function to handle click on a blog post in the list
  const handleBlogClick = (slug) => {
    fetchDataBySlug(slug);
  };

  return (
    <>
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
                ) : data ? (
                  data.map((post) => (
                    <div key={post.PID} className="md:w-full">
                      <div className="p-4">
                        <div className="card w-auto bg-base-100 shadow-xl h-full border-2  overflow-hidden">
                          <img
                            className="lg:h-96 md:h-96 w-full object-cover object-center"
                            src={post.banner1} // Assuming the image URL is in the 'MImg' property
                            alt={post.banner_alt1} // Assuming the image alt text is in the 'MAlt' property
                          />

                          <div className="p-6 border-l-4  border-l-secondary">
                            <h1 className="title-font font-semibold text-2xl text-gray-900 mb-3">
                              {post.PTitle}{" "}
                              {/* Display the name of the package */}
                            </h1>
                            {/* Display content preview */}

                            <div className="flex items-center justify-between ">
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
                              <Link to={`/tours/${post.slug}/`}>
                                <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded-xl text-lg">
                                  Learn More
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500">Loading...</div>
                )}
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
    </>
  );
}

export default AllPackages;
