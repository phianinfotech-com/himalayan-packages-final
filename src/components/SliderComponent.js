import React from "react";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
export default function SliderComponent() {
  {
    /*btn for slider start from here*/
  }
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  {
    /*btn for slider ends here*/
  }

  {
    /*btn for slider1 start from here*/
  }
  const slideLeft1 = () => {
    var slider1 = document.getElementById("slider1");
    slider1.scrollLeft = slider1.scrollLeft - 500;
  };
  const slideRight1 = () => {
    var slider1 = document.getElementById("slider1");
    slider1.scrollLeft = slider1.scrollLeft + 500;
  };
  {
    /*btn for slider1 ends here*/
  }

  {
    /*btn for slider2 start from here*/
  }
  const slideLeft2 = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft - 500;
  };
  const slideRight2 = () => {
    var slider2 = document.getElementById("slider2");
    slider2.scrollLeft = slider2.scrollLeft + 500;
  };
  {
    /*btn for slider2 ends here*/
  }

  {
    /*btn for slider3 start from here*/
  }
  const slideLeft3 = () => {
    var slider3 = document.getElementById("slider3");
    slider3.scrollLeft = slider3.scrollLeft - 500;
  };
  const slideRight3 = () => {
    var slider3 = document.getElementById("slider3");
    slider3.scrollLeft = slider3.scrollLeft + 500;
  };
  {
    /*btn for slider3 ends here*/
  }

  {
    /*btn for slider4 start from here*/
  }
  const slideLeft4 = () => {
    var slider4 = document.getElementById("slider4");
    slider4.scrollLeft = slider4.scrollLeft - 500;
  };
  const slideRight4 = () => {
    var slider4 = document.getElementById("slider4");
    slider4.scrollLeft = slider4.scrollLeft + 500;
  };
  {
    /*btn for slider3 ends here*/
  }

  const data = [
    {
      id: 1,
      name: "abhishek",

      img: "https://images.unsplash.com/photo-1624193931159-eb1b0817c2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },
    {
      id: 2,

      img: "https://images.unsplash.com/photo-1624193931159-eb1b0817c2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },

    {
      id: 3,

      img: "https://images.unsplash.com/photo-1624193931159-eb1b0817c2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },

    {
      id: 4,

      img: "https://images.unsplash.com/photo-1624193931159-eb1b0817c2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },

    {
      id: 5,

      img: "https://images.unsplash.com/photo-1606667544139-81e47935d769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },

    {
      id: 6,

      img: "https://images.unsplash.com/photo-1624193931159-eb1b0817c2d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },
  ];

  return (
    <>
      {/*owl carousel for best of Himachal*/}
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          Best Of Himachal
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>

      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideLeft1}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider3"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((item) => (
            <img
              className=" w-64 h-auto inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px] "
              src={item.img}
              alt="/"
            />
          ))}
          
        
        </div>
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideRight1}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>
      {/*carousel for best of Himachal*/}

          {/*owl carousel for best of Uttrakhand start*/}
          <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          Best Of Uttrakhand start
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>

      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideLeft2}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider3"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((item) => (
            <img
              className=" w-64 h-auto inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px] "
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideRight2}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>
          {/*owl carousel for best of Uttrakhand end*/}

          {/*owl carousel for Evergreen Uttarakhand Package*/}
          
          <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
        Evergreen Uttarakhand Package
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>

      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideLeft3}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider3"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((item) => (
            <img
              className=" w-64 h-auto inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px] "
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideRight3}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>

          {/*owl carousel for Evergreen Uttarakhand Package ends here..*/}
       
     
      {/*carousel starts from here */}
       <section className="text-gray-600 body-font">
        <div class="container px-12 py-7 mx-auto">
          <div class="flex flex-col text-center w-full mb-2px">
            <div className="carousel w-full  py-7">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com//images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide4"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide2"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com//images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide1"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide3"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com//images/stock/photo-1414694762283-acccc27bca85.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide2"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide4"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://daisyui.com//images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href="#slide3"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❮
                  </a>
                  <a
                    href="#slide1"
                    className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
                  >
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/*carousel end here */}

      {/*owl carousel for  Best Of Kashmir*/}
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
          Best Of Kashmir
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>

      <div className="relative flex items-center md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideLeft3}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider3"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((item) => (
            <img
              className=" w-64 h-auto inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px] "
              src={item.img}
              alt="/"
            />
          ))}
           <span className="flex-grow flex flex-col pl-4">
           <span className="title-font text-2xl text-gray-900">Kashmir kawai</span>
           </span>
           
        </div>
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideRight3}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>
      {/*owl carousel for Best Of Kashmir end here*/}

      {/*owl carousel for  start from here Favorite Kashmir Packages*/}
      <div className="flex flex-col items-center text-center justify-center">
        <h2 className="md:mb-0 text-[18px] mt-8 md:text-[30px] font-bold title-font ">
        Favorite Kashmir Packages
        </h2>
        <div className="w-14 h-1 bg-primary rounded mt-1 mb-8"></div>
      </div>

      <div className="relative flex items-center mb-20 md:mx-20 mx-4">
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideLeft3}
        >
          <HiChevronLeft className="h-6 w-6 " />
        </button>
        <div
          id="slider3"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide "
        >
          {data.map((item) => (
            <img
              className=" w-64 h-auto inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px] "
              src={item.img}
              alt="/"
            />
          ))}
           <span className="flex-grow flex flex-col pl-4">
           <span className="title-font text-2xl text-gray-900">Kashmir kawai</span>
           </span>
           
        </div>
        <button
          className="hidden md:btn md:btn-circle md:btn-outline  btn-primary  md:mx-2"
          onClick={slideRight3}
        >
          <HiChevronRight className="h-6 w-6 " />
        </button>
      </div>
      {/*owl carousel for Favorite Kashmir Packages end here*/}

     
    </>
  );
}
