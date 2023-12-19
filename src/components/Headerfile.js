// Headerfile.js
import React, { useState } from 'react';
import "../App.css";
import { HiOutlineSupport, HiOutlineGlobe, HiUsers, HiUserGroup } from 'react-icons/hi';
import VisitorCount from './VisitorCount';
import VisitorCounter from './VisitorCounter';




export default function Headerfile() {
  const [FetchCounter, setFetchCounter] = useState(0);
    return (
        <>
            <div>
                <div className='py-36 md:py-36'>
                    <div className="md:mb-0 text-[28px] mt-8 md:text-[50px] font-normal text-base-100 text-center">
                        Open New Dimensions for
                    </div>

                    <div className='box-content text-5xl box-center h-32 flex rounded-lg text-center justify-center'>
                        <div className=" text-6xl md:text-8xl font-bold text-base-100 overflow-hidden pt-2">
                            <span className='ap'>Fun</span>
                            <span className='ap'>Experiences</span>
                            <span className='ap'>Romance</span>
                            <span className='ap'>Culture</span>
                            <span className='ap'>Adventure</span>
                        </div>
                    </div>

                    {/* This following code for banner footer */}

                    <div className="container bottom-14 px-5  absolute inset-x-0  h-52   md:absolute md:inset-x-0 md:bottom-0 md:h-20  mx-auto text-base-100 ">
                        <div className="flex flex-wrap -m-4 md:ml-10">
                            <div className="p-4 w-2/4 md:w-1/4">
                                <div className="h-full overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-center  enter flex-wrap ">
                                            <span className=" inline-flex items-center  leading-none text-sm ">
                                                <HiOutlineSupport className="h-6 w-6 mx-2 " />

                                               
                                                24*7
                                                <br />
                                                Customer Support

                                                
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
                                                <HiOutlineGlobe className="h-6 w-6 mx-2 " />
                                                Dedicated
                                                <br />
                                                Tour Managers
                                                
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
                                                <HiUsers className="h-6 w-6 mx-2 " />
                                                14359
                                                <br />
                                                Happy Travelers
                                                
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
                                                <HiUserGroup className="h-6 w-6 mx-2 " />
                                                {/* You need to display the visitor count here */}
                                                <VisitorCounter />
                                                
                                               
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
    );
}
