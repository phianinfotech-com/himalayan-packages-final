import React from 'react'
import Navbar from '../Navbar'
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
        
      <Navbar />
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                            <button
                      type="submit"
                      className="btn btn-outline btn-primary m-2"
                    >
                      <HiHome className="h-6 w-6 " />
                      <Link to='/'>Take me there!</Link>
                      
                    </button>
                           
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="/assets/icon/notfound.png" />
            </div>
        </div>

    </div>
  )
}
