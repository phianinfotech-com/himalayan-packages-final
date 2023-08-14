import React from "react";
import axios from "axios";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get("http://localhost/himalayan/api_fetch_category.php/")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:80/api/user/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };

  return (
    <>
      <div className="text-gray-600 body-font">
        <div className="container px-8 py-7 mx-auto">
          <div className="flex flex-wrap mx-4 -mb-10 text-center items-center">
            <div className="sm:w-1/4 mb-10 px-4">
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Weaving Way to Perfect Gateway
                </h2>
                <div className="w-14 h-1 bg-primary rounded mt-1 mb-1"></div>
                <p className="text-base">Memories for Life Time</p>
              </div>
            </div>

            <div className="sm:w-3/4 mb-10">
              <div className="carousel ">
                {users.map((user, key) => (
                  <div className="carousel-item m-2" key={key}>
                    <img
                      src={user.CImg}
                      className=" w-48 h-full rounded-lg"
                      alt="Burger"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-7 py-16 mx-auto md:px-24 ">
          <div className="flex flex-wrap -m-12">
            <div className="p-3 md:w-1/2 flex flex-col items-start">
              <div className="pt-2 grid grid-rows-3 grid-flow-col gap-4 pl-20 ">
                <div className="col-span-2">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/explore-himalayan-ranges.webp"
                    alt=""
                    className="w-full h-44 rounded-xl"
                  />
                </div>
                <div className="row-span-2 col-span-2 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/rohtang-pass.webp"
                    alt=""
                    className="w-full h-88 rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 md:w-1/2 flex flex-col items-start pt-5">
              <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/tibetan-culture.webp"
                    alt=""
                    className="rounded-xl w-36 h-52"
                  />
                </div>
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/atal-tunnel.webp"
                    alt=""
                    className="rounded-xl w-36 h-36"
                  />
                </div>

                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/jim-corbett-national-park.webp"
                    alt=""
                    className="rounded-xl w-36 h-52"
                  />
                </div>
              </div>

              <div className="grid grid-rows-3 grid-flow-col gap-4 py-4">
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/mcleod-ganj.webp"
                    alt=""
                    className="rounded-xl w-36 h-36"
                  />
                </div>
                <div className="row-start-1 row-end-4 -mt-[65px] ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/bhimtal-lake.webp"
                    alt=""
                    className="rounded-xl w-36 h-52"
                  />
                </div>

                <div className="row-start-1 row-end-4  ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/vaishno-devi-temple.webp"
                    alt=""
                    className="rounded-xl w-36 h-36"
                  />
                </div>
              </div>

              <div className="grid grid-rows-3 grid-flow-col gap-4 ">
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/solang-valley.webp"
                    alt=""
                    className="rounded-xl w-36 h-36"
                  />
                </div>
                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/naina-devi-temple.webp"
                    alt=""
                    className="rounded-xl w-36 h-36"
                  />
                </div>

                <div className="row-start-1 row-end-4 ">
                  <img
                    src="https://himalayanpackages.com/assets/images/imag/srinagar.webp"
                    alt=""
                    className="rounded-xl w-36 h-36"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      


     
    </>
  );
}
