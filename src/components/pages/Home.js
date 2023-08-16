import React from "react";

import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Headerfile from "../Headerfile";

import Footer from "../Footer";
import SliderComponent from "../SliderComponent";

export default function Home() {
  const [memory, setMemory] = useState([]);
  useEffect(() => {
    getMemory();
  }, []);

  function getMemory() {
    axios
      .get("http://localhost/himalayan/api_memory.php/")
      .then(function (response) {
        console.log(response.data);
        setMemory(response.data);
      });
  }

  const [explore, setExplore] = useState([]);

  useEffect(() => {
    fetchExplore();
  }, []);

  const fetchExplore = async () => {
    try {
      const response = await fetch(
        "http://localhost/himalayan/home/api-fetch-explore-himalayan.php"
      );
      const data = await response.json();
      setExplore(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching Explore:", error);
    }
  };
  return (
    <div>
      <section className="bg-[url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')] w-full h-screen bg-cover bg-center bg-no-repeat mb-8 md:h-screen ">
        <div className="w-full h-full  backdrop-brightness-75">
          <Navbar />

          <Headerfile />
        </div>
        {/*section one starts from here */}
        <div className="text-gray-600 body-font mt-10 ">
          <div className="container px-8 py-8 mx-auto ">
            <div className="flex flex-wrap md:mx-4 -mb-10 text-center items-center ">
              <div className="sm:w-1/4 mb-10 px-4 flex flex-col items-center justify-center h-full">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Weaving Way to Perfect Gateway
                </h2>
                <div className="w-14 h-1 bg-primary rounded mt-1 mb-1"></div>
                <p className="text-base">Memories for Life Time</p>
              </div>

              <div className="sm:w-3/4 mb-10">
                <div className="carousel  ">
                  {/* {displayBlogPosts.map((post) => ( */}
                  {memory.map((memo) => (
                    <div className="carousel-item m-4 " key={memo.key}>
                      <Link to={`/collections/${memo.slug}`}>
                        <img
                          src={memo.MImg}
                          className="w-64 h-full rounded-lg  shadow-sm transform transition duration-500 hover:scale-105"
                          alt={memo.MAlt}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*section one ends here */}

        {/*section two starts from here */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-8 py-8 mx-auto md:px-8 ">
            <div className="flex flex-wrap -mb-10  md:mx-4  ">
              <div className="p-3 md:w-1/2 flex flex-col items-start md:pl-10 ">
                <div className="pt-2 grid md:grid-rows-3 grid-flow-col grid-rows-2 gap-4  ">
                  <div className="col-span-2">
                    <div className="relative">
                      <Link to={`/collections/${explore[0]?.slug}`}>
                        <img
                          src={explore[0]?.Eimg}
                          alt={explore[0]?.EAlt}
                          className="w-full h-48 rounded-xl "
                        />

                        <div className="absolute inset-0 flex items-center  justify-center">
                          <p className="text-white font-bold text-3xl leading-8">
                            {explore[0]?.EName}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="md:row-span-2 col-span-2 ">
                    <div className="relative">
<Link to={`/collections/${explore[1]?.slug}`}>
                      <img
                        src={explore[1]?.Eimg}
                        alt={explore[1]?.EAlt}
                        className="w-full h-auto rounded-xl"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold text-3xl leading-8">
                          {explore[1]?.EName}
                        </p>
                      </div>
                      </Link> 
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 md:w-1/2 flex flex-col items-start pt-5 ">
                <div className="grid grid-rows-3 grid-flow-col gap-4 mp-4 ">
                  <div className="row-start-1 row-end-4">
                    <div className="relative">
                      <Link to={`/collections/${explore[2]?.slug}`}>
                      <img
                        src={explore[2]?.Eimg}
                        alt={explore[2]?.EAlt}
                        className="rounded-xl w-40 h-52"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {explore[2]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                  <div className="row-start-1 row-end-4">
                    <div className="relative">
<Link to={`/collections/${explore[3]?.slug}`}>
                      <img
                        src={explore[3]?.Eimg}
                        alt={explore[3]?.EAlt}
                        className="rounded-xl w-40 h-40"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[3]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                  <div className="row-start-1 row-end-4">
                    <div className="relative">
<Link to={`/collections/${explore[4]?.slug}`}>
                      <img
                        src={explore[4]?.Eimg}
                        alt={explore[4]?.EAlt}
                        className="rounded-xl w-40 h-52"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[4]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4 py-4 mp-4 ">
                  <div className="row-start-1 row-end-4 ">
                    <div className="relative">
<Link to={`/collections/${explore[5]?.slug}`}>
                      <img
                        src={explore[5]?.Eimg}
                        alt={explore[5]?.EAlt}
                        className="rounded-xl w-40 h-40"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[5]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                  <div className="row-start-1 row-end-4 -mt-[50px] ">
                    <div className="relative">
<Link to={`/collections/${explore[6]?.slug}`}>
                      <img
                        src={explore[6]?.Eimg}
                        alt={explore[6]?.EAlt}
                        className="rounded-xl w-40 h-52"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[6]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                  <div className="row-start-1 row-end-4  ">
                    <div className="relative">
<Link to={`/collections/${explore[7]?.slug}`}>
                      <img
                        src={explore[7]?.Eimg}
                        alt={explore[7]?.EAlt}
                        className="rounded-xl w-40 h-40"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[7]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                </div>
                <div className="grid grid-rows-3 grid-flow-col gap-4 mb-2 ">
                  <div className="row-start-1 row-end-4 ">
                    <div className="relative">
<Link to={`/collections/${explore[8]?.slug}`}>
                      <img
                        src={explore[8]?.Eimg}
                        alt={explore[8]?.EAlt}
                        className="rounded-xl w-40 h-40"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[8]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                  <div className="row-start-1 row-end-4 ">
                    <div className="relative">
<Link to={`/collections/${explore[9]?.slug}`}>
                      <img
                        src={explore[9]?.Eimg}
                        alt={explore[9]?.EAlt}
                        className="rounded-xl w-40 h-40"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[9]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                  <div className="row-start-1 row-end-4 ">
                    <div className="relative">
<Link to={`/collections/${explore[10]?.slug}`}>
                      <img
                        src={explore[10]?.Eimg}
                        alt={explore[10]?.EAlt}
                        className="rounded-xl w-40 h-40"
                      />
                      <div className="absolute inset-0 flex items-center  justify-center">
                        <p className="text-white font-bold">
                          {" "}
                          {explore[10]?.EName}
                        </p>
                      </div>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*section two ends here */}

        <SliderComponent />

        <Footer />
      </section>
    </div>
  );
}
