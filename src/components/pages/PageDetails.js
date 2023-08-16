import React, { useState, useEffect } from "react";

import Footer from "../Footer";
import axios from "axios";
import Navbar from "../Navbar";
import Enquire from "../Enquire";
import { useNavigate, useParams } from "react-router-dom";

function PageDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost/himalayan/api-fetch-detailpage.php")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Render the featured image section with a navigation bar */}

      {/* Render the featured image section with a navigation bar */}
      <div className="relative">
        <section
          className="w-full h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url('${
              data && data[0] ? data[0].Page_Img : ""
            }')`,
          }}
        >
          {console.log(data)}
          <Navbar />
        </section>
      </div>

      {/* Main Body  Section */}
      <div className="flex md:mx-10 mx-1 py-10">
        {/* Main main page of sidebar Section */}
        <div className="flex-1">
          <section className="text-gray-600 body-font">
            <div className="p-2">
              <div className="h-full flex items-start">
                <div className="flex-grow pl-6 p-4">
                  <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                    {data && data[0] ? data[0].Page_Name : ""}
                  </h1>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: data && data[0] ? data[0].Page_Content : "",
                    }}
                  ></div>
                </div>
              </div>

              <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {/* following are the coiunter */}
                  {/* {data && data.map((Showdetails) => ( */}

                  {Array.isArray(data) && data.map((Showdetails) => (
                      <div className="p-4 lg:w-1/4">
                        <div className="shadow-xl  border-2 rounded-xl bg-opacity-75 px-8 pt-16 pb-24 overflow-hidden text-center relative">
                          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                            {Showdetails.Key_value}
                          </h1>
                          <p>{Showdetails.Key_name}</p>
                        </div>
                      </div>
                    ))}

                  {/* Above are the coiunter */}
                </div>
              </div>

              {/* following for counter create in loop */}

              {/* slider code ends here*/}
              <div className="container px-5 py-10 mx-auto">
  <div className="flex flex-wrap -m-4">
    {/* Check if data exists before mapping */}
    {/* {data && data.map((Pdetails) => ( */}
       {data && data.map((Pdetails) => (
      
        // Conditionally render if Fimg value is not null
        Pdetails.Fimg !== null && (
          <div className="p-4 md:w-1/3" key={Pdetails.PID}>
            <div className="h-full shadow-xl border-2 rounded-xl overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={Pdetails.Fimg}
                alt={Pdetails.Falt}
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {Pdetails.Fname}
                </h1>
                <p
                  className="leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{
                    __html: Pdetails.Finfo,
                  }}
                ></p>
              </div>
            </div>
          </div>
        )
      ))}
  </div>
</div>


{/* slider code starts*/}
<section className="text-gray-600 body-font">
  <div className="container px-12 py-7 mx-auto">
    <div className="flex flex-col text-center w-full mb-2px">
      <div className="carousel rounded-lg w-full py-7">
        {data !== null && data.length > 0 ? (
          data.map((data, index) => (
            <div key={`slide${index + 1}`} id={`slide${index + 1}`} className="carousel-item relative w-full">
              <img src={data.A_IMG} className="w-full" />
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
              {/* above code for counter */}
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

export default PageDetails;
