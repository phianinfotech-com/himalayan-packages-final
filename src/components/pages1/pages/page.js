import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Enquire from "../Enquire";

const Page = () => {
  const [data, setData] = useState(null);

  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `https://himalayanpackages.com/himalayan/api-page.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Function to fetch data and handle URL changes
    const handleURLChange = () => {
      const urlSlug = window.location.pathname.split("/page/").pop();
      const withoutSlash = urlSlug.replace(/\/$/, "");
      fetchDataBySlug(withoutSlash);
    };

    // Initial data fetch
    handleURLChange();

    // Listen for popstate events (URL changes)
    window.addEventListener("popstate", handleURLChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handleURLChange);
    };
  }, []);

  return (
    <div>
      {/* Featured image section with navigation bar */}
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

      {/* Main Body Section */}
      <div className="flex md:mx-10 mx-1 py-10">
        {/* Main page content */}
        <div className="flex-1">
          <section className="text-gray-600 body-font">
            <div className="p-2">
              {data ? (
                <div className="h-full flex items-start">
                  <div className="flex-grow pl-6 p-4">
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                      {data.Page_Name}
                    </h1>
                    <div
                      dangerouslySetInnerHTML={{ __html: data.Page_Content }}
                    ></div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="hidden md:flex sticky top-0 h-screen w-1/4 md:mt-3 md:mr-10 md:mb-20">
          <Enquire />
        </div>
        {/* Sidebar */}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
