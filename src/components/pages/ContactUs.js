
import React, { useState, useEffect } from "react";

import Footer from "../Footer";
import axios from "axios";
import Navbar from "../Navbar";
import Enquire from "../Enquire";
import { useNavigate, useParams } from "react-router-dom";


function ContactUs() {

    const currentURL = window.location.href;
    console.log(currentURL);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);





    
  // Function to fetch blog post data by its slug
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost/himalayan/api-fetch-other-page.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  // Fetch blog post data when the component mounts or the slug changes in the URL
  useEffect(() => {
    const urlSlug = window.location.pathname.split("/").pop();
    const withoutslash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutslash);
  }, []);

  // Function to handle click on a blog post in the list
  const handleBlogClick = (slug) => {
    fetchDataBySlug(slug);
  };

  
    // useEffect(() => {
    //   axios
    //     .get("http://localhost/himalayan/api-fetch-detailpage.php")
    //     .then((response) => {
    //       setData(response.data);
    //       setLoading(false);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //       setLoading(false);
    //     });
    // }, []);
  
    // if (loading) {
    //   return <p>Loading...</p>;
    // }
  return (
    <div>
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

      <div class="flex flex-col text-center w-full pt-10 ">
   
   <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{data.Page_Name}</h1>
   <p   className="lg:w-2/3 mx-auto leading-relaxed text-base"
                     dangerouslySetInnerHTML={{ __html: data.Page_Content }}></p>
 </div>

      {/* Main Body  Section */}
      <div className="flex md:mx-10 mx-1 py-10">
        
        {/* Main main page of sidebar Section */}
        <div className="flex-1">
        <section class="text-gray-600 body-font">
  <div class="container px-5 py-5  mx-auto">
   

    <div className="lg:w-3/3 md:w-2/2 h-96  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
  <iframe
    width="100%"
    height="100%"
    className="absolute inset-0"
    
    title="map"
   
    src=""
    
  ></iframe>

</div>
<div className="bg-white relative flex flex-wrap py-10 rounded ">
    <div className="lg:w-1/2 px-6">
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
      <p className="mt-1">Plot No. 9 Vaishav Inn Apartment Bandhu Soni Layout, near Nagoba Mandir Square, Sambhaji Nagar, Nagpur, Maharashtra 440022</p>
    </div>
    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
      <a href="mailto:example@email.com" className="text-indigo-500 leading-relaxed">
        enquiry.himalayanpackages@gmail.com
      </a>
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>

      <a href="tel:9767124330" className="text-indigo-500 leading-relaxed">
      9767124330
      </a>
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
      <Footer />
    </div>
  );
}

export default ContactUs;