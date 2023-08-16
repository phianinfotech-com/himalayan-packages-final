import React, { useState, useEffect } from "react";

import Footer from "../Footer";

import Navbar from "../Navbar";
import Enquire from "../Enquire";




// Page component responsible for rendering a blog post details page
const Page = () => {
  const currentURL = window.location.href;
  console.log(currentURL);
 

  // State to store the blog post data
  const [data, setData] = useState(null);

  // Function to fetch blog post data by its slug
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost/himalayan/api-page.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  // Fetch blog post data when the component mounts or the slug changes in the URL
  useEffect(() => {
    const urlSlug = window.location.pathname.split("/page/").pop();
    const withoutslash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutslash);
  }, []);

  // Function to handle click on a blog post in the list


  return (
    <div>
      {/* Render the featured image section with a navigation bar */}
      <div>
        <div className="relative">
          <section
            className="w-full h-96 bg-cover bg-center"
            style={{
              backgroundImage: `url('${data ? data.Page_Img : ""}')`,
            }}
          >
            <Navbar />
          </section>
        </div>
      </div>

      {/* Main Body  Section */}
      <div className="flex md:mx-10 mx-1 py-10">
        {/* Main main page of sidebar Section */}
        <div className="flex-1">
          <section className="text-gray-600 body-font">
            <div className="p-2" >
              {/* Check if blog data exists, then display the details */}
              {data ? (
                <div className="h-full flex items-start">
                  <div className="flex-grow pl-6 p-4">
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                      {data.Page_Name}
                    </h1>

                    
                
                    
                    {/* Render blog content using dangerouslySetInnerHTML */}
                    <div
                      dangerouslySetInnerHTML={{ __html: data.Page_Content }}
                    ></div>
                  </div>
                </div>
              ) : (
                // If blog data is not available, display a message
                <p>Blog Not Found...</p>
              )}
            </div>
          </section>
        </div>

        {/* side bar code */}
        <div className="hidden md:flex sticky top-0 h-screen w-1/4 md:mt-3 md:mr-10 md:mb-20">
          <Enquire />
        </div>
        {/* side bar code */}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
