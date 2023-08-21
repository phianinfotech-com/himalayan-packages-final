import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Footer";
import Navbar from "../Navbar";
import Enquire from "../Enquire";


function ContactUs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://himalayanpackages.com/himalayan/api-fetch-other-page.php?slug=contact-us`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <div className="relative">
      <section
          className="w-full h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url('${
              data && data[0] ? data[0].Page_Img : ""
            }')`,
          }}
        >
          <Navbar />
        </section>
      </div>

      <div className="flex flex-col text-center w-full ">
   
   <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> {data[0].Page_Name}</h1>
   <p className="lg:w-2/3 mx-auto leading-relaxed text-base">  <div
                      dangerouslySetInnerHTML={{ __html: data[0].Page_Content }}
                    ></div></p>
  </div>

      {/* Main Body  Section */}
      <div className="flex md:mx-10 mx-1 py-10">
        
        {/* Main main page of sidebar Section */}
        <div className="flex-1">
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-5  mx-auto">
   

    <div className="lg:w-3/3 md:w-2/2 h-96  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
    width="100%"
  height="100%"
  className="absolute inset-0"
  frameBorder="0"
  title="map"
  marginHeight="0"
  marginWidth="0"
  scrolling="no"
  src={data[0].temp}
  allowFullScreen
></iframe>


 

</div>
<div className="bg-white relative flex flex-wrap py-10 rounded ">
    <div className="lg:w-1/2 px-6">
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
      <p className="mt-1">{data[1].temp}</p>
    </div>
    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
      <a href={"mailto:"+data[2].temp} className="text-indigo-500 leading-relaxed">
      {data[2].temp}
      </a>
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>

      <a
            href={"tel:"+data[3].temp}
            className="text-indigo-500 leading-relaxed"
          >
            {data[3].temp}
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