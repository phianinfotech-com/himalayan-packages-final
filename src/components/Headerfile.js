import React from 'react'
import "../App.css"

export default function Headerfile() {

  
  return (
    <>
  <div>
  <div className="text-gray-600 body-font overflow-hidden p-20 m-20 py-64 md:pt-4 md:pb-40">
            <div className="py-1">
              <div className="md:mb-0 text-[28px] mt-8 md:text-[50px] font-normal	text-base-100 text-center">
                Open New Dimensions for
              </div>

              <div className="box-content text-5xl	 box-center h-32 flex rounded-lg text-center justify-center">
                <div className=" text-7xl	 md:text-8xl	  font-bold	text-base-100 overflow-hidden pt-2">
                  <span className="ap">Fun</span>
                  <span className="ap">Experiences</span>
                  <span className="ap">Romance</span>
                  <span className="ap">Culture</span>
                  <span className="ap">Adventure</span>
                </div>
              </div>

              {/* search bar  */}
             

              {/* <MainSearch handleMainSearchClick={handleMainSearchClick} /> */}
            </div> 


            {/* search bar  */}



            {/* this following code for banner footer */}

            <div className="container  px-5  absolute inset-x-0 bottom-0 h-52   md:absolute md:inset-x-0 md:bottom-0 md:h-20  mx-auto text-base-100 ">
              <div className="flex flex-wrap -m-4 md:ml-10">
                <div className="p-4 w-2/4 md:w-1/4">
                  <div className="h-full overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-c  enter flex-wrap ">
                        <span className=" inline-flex items-center  leading-none text-sm ">
                          <img
                            src="./assets/icon/customer_support.svg"
                            className="w-10 h-auto px-2 "
                            alt="ap"
                          />
                          24*7
                          <br />
                          CUSTOMER SUPPORT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 w-2/4 md:w-1/4">
                  <div className="h-full overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center flex-wrap ">
                        <span className="inline-flex items-center leading-none text-sm">
                          <img
                            src="./assets/icon/globe.svg"
                            className="w-10 h-auto px-2"
                            alt="ap"
                          />
                          Dedicated
                          <br />
                          TOUR MANAGERS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 w-2/4 md:w-1/4">
                  <div className="h-full overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center flex-wrap ">
                        <span className="inline-flex items-center leading-none text-sm">
                          <img
                            src="./assets/icon/people.svg"
                            className="w-10 h-auto px-2"
                            alt="ap"
                          />
                          14359
                          <br />
                          HAPPY TRAVELERS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 w-2/4 md:w-1/4">
                  <div className="h-full overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center flex-wrap text-white ">
                        <span className="inline-flex items-center leading-none text-sm">
                          <img
                            src="./assets/icon/money_bag_rupee.svg"
                            className="w-10 h-auto px-2"
                            alt="ap"
                          />
                          Value for money
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  </div>
    </>
  )
}
