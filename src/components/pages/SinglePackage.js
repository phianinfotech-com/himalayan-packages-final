import React, { useState } from "react";
import Navbar from "../Navbar";
import Enquire from "../Enquire";
import { HiOutlineCheck, HiOutlineClock } from "react-icons/hi";


import Footer from "../Footer";

export default function SinglePackage() {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs1 = [
    {
      id: 1,
      tabTitle: "Tab 1",
      title: "Title 1",
      content:
        "Las tabs se generan automáticamente a partir de un array de objetos, el cual tiene las propiedades: id, tabTitle, title y content.",
    },
    {
      id: 2,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "Contenido de tab 2.",
    },
    {
      id: 3,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "Contenido de tab 3.",
    },
    {
      id: 4,
      tabTitle: "Tab 4",
      title: "Title 4",
      content: "Contenido de tab 4.",
    },
  ];

  const tabs = [
    {
      title: 'Tab 1',
      content: <div>Content of Tab 1</div>,
    },
    {
      title: 'Tab 2',
      content: <div>Content of Tab 2</div>,
    },
    {
      title: 'Tab 3',
      content: <div>Content of Tab 3</div>,
    },
  ];
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
              alt="gallery"
              class=" rounded-lg w-full h-full object-cover object-center block"
              src="https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
            />
          </div>
          <div class="h-40">
            <img
              alt="gallery"
              class="rounded-lg w-full object-cover h-full object-center block"
              src="https://images.unsplash.com/photo-1690669249460-65a76daaf698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=794&q=80"
            />
          </div>
          <div class="h-40">
            <img
              alt="gallery"
              class=" rounded-lg w-full object-cover h-full object-center block"
              src="https://images.unsplash.com/photo-1529556253689-cf147e0fb3d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80"
            />
          </div>
          <div class="col-span-2 h-40">
            <img
              alt="gallery"
              class="rounded-lg w-full h-full object-cover object-center block"
              src="https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
            <div className="container px-10 mt-5 mx-auto">
              {/* SearchAllBlog */}

              {/* Display the blog posts */}
              <div className="flex-wrap -m-4 grid md:grid-cols-1 md:gap-4">
                <div className="md:w-full">
                  <div className="p-2">
                    <div className="card w-auto  shadow-xl h-full border-2  overflow-hidden">
                      <div class="   md:px-8 mb-8 rounded-lg overflow-hidden text-center relative">
                        <div className="h-25 w-auto mx-auto py-4 h-auto">
                          <p class="text-4xl text-left	font-bold text-black pl-2 ">
                            7 Days Arunachal Pradesh Group Tour Package
                          </p>
                         

                     

                          <div className="flex justify-center space-x-4 p-2">
                            <img
                              src="/assets/icon/clock_480px.png"
                              alt="Image 1"
                              className="w-10 h-10 rounded-full"
                            />
                            <div className="p-2">
                              <p>5D/4N</p>
                            </div>
                            <img
                              src="/assets/icon/Location_400px.png"
                              
                              alt="Image 2"
                              className="w-10 h-10 rounded-full"
                            />
                             <div className="p-2">
                              <p>Leh</p>
                            </div>
                            
                           
                          </div>
                          {/* day-night-sun-moon-cycle */}
                        </div>

                        <div className="grid grid-cols-4 gap-4 px-4">
                          <div className="flex flex-col items-center">
                            <img
                              src="https://images.unsplash.com/photo-1572109801525-0bb0272e8579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                              alt="Image 1"
                              className="w-20 h-20 "
                            />
                            <p className="mt-2 text-center">Text for Image 1</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src="https://images.unsplash.com/photo-1572109801525-0bb0272e8579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                              alt="Image 2"
                              className="w-20 h-20"
                            />
                            <p className="mt-2 text-center">Text for Image 2</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src="https://images.unsplash.com/photo-1572109801525-0bb0272e8579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                              alt="Image 3"
                              className="w-20 h-20 "
                            />
                            <p className="mt-2 text-center">Text for Image 3</p>
                          </div>
                          <div className="flex flex-col items-center">
                            <img
                              src="https://images.unsplash.com/photo-1572109801525-0bb0272e8579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                              alt="Image 4"
                              className="w-20 h-20 "
                            />
                            <p className="mt-2 text-center">Text for Image 4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
            </div>

            <div className="container px-10 mt-5  mx-auto">
              {/* SearchAllBlog */}

              {/* Display the blog posts */}
              <div className="flex-wrap -m-4 grid md:grid-cols-1 md:gap-3">
                <div className="md:w-full">
                  <div className="p-4">
                    <div className="card w-auto bg-base-100 shadow-xl h-full border-2  overflow-hidden">
                      <div class="  md:px-8  rounded-lg overflow-hidden text-center relative mb-8">
                      <div className="h-25 w-auto mx-auto py-4 h-auto">
                        <p class="text-2xl text-left	font-bold  pl-2 ">
                            7 Days Arunachal Pradesh Group Tour Package
                          </p>
                          <ul className="p-2 text-left" >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-wrap -m-4 grid md:grid-cols-1 md:gap-3">
                <div className="md:w-full">
                  <div className="p-4">
                    <div className="card w-auto bg-base-100 shadow-xl h-full border-2  overflow-hidden">
                      <div class="  md:px-8  rounded-lg overflow-hidden text-center relative mb-8">
                      <div className="h-25 w-auto mx-auto py-4 h-auto">
                        <p class="text-2xl text-left	font-bold  pl-2 ">
                        7 Days Arunachal Pradesh Group Tour Package Overview

                          </p>
                          <ul className="p-2 text-left" >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
            </div>

            <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Tabs Example</h1>
      <div className="flex mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 mr-2 ${
              activeTab === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>

            <div className="container px-10 mt-5  mx-auto">
              {/* SearchAllBlog */}

              {/* Display the blog posts */}
              <div className="flex-wrap -m-4 grid md:grid-cols-1 md:gap-3">
                <div className="md:w-full">
                  <div className="p-4">
                  <div className="card w-auto bg-base-100 shadow-xl h-full border-2  overflow-hidden">
                      <div class="  md:px-8  rounded-lg overflow-hidden text-center relative mb-8">
                      <div className="h-25 w-auto mx-auto py-4 h-auto">
                        <p class="text-2xl text-left	font-bold  pl-2 ">
                            Inclusion and exclusion{" "}
                          </p>

                          <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item border border-base-300 mb-5">
                              <input
                                type="radio"
                                name="my-accordion-4"
                                checked="checked"
                              />
                              <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                              </div>
                              <div className="collapse-content">
                                <div className="container">
                                  <div className="tabs flex justify-center">
                                    {tabs.map((tab, i) => (
                                      <button
                                        className="p-5 hover:text-primary font-medium"
                                        key={i}
                                        id={tab.id}
                                        disabled={currentTab === `${tab.id}`}
                                        onClick={handleTabClick}
                                      >
                                        {tab.tabTitle}
                                      </button>
                                    ))}
                                  </div>
                                  <div className="content">
                                    {tabs.map((tab, i) => (
                                      <div className="font-medium" key={i}>
                                        {currentTab === `${tab.id}` && (
                                          <div>
                                            <p className="title font-bold">
                                              {tab.title}
                                            </p>
                                            <p>{tab.content}</p>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="collapse collapse-arrow join-item border border-base-300">
                              <input type="radio" name="my-accordion-4" />
                              <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                              </div>
                              <div className="collapse-content">
                                <div className="container">
                                  <div className="tabs flex justify-center">
                                    {tabs.map((tab, i) => (
                                      <button
                                        className="p-5 hover:text-primary font-medium"
                                        key={i}
                                        id={tab.id}
                                        disabled={currentTab === `${tab.id}`}
                                        onClick={handleTabClick}
                                      >
                                        {tab.tabTitle}
                                      </button>
                                    ))}
                                  </div>
                                  <div className="content">
                                    {tabs.map((tab, i) => (
                                      <div className="font-medium" key={i}>
                                        {currentTab === `${tab.id}` && (
                                          <div>
                                            <p className="title font-bold">
                                              {tab.title}
                                            </p>
                                            <p>{tab.content}</p>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
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
