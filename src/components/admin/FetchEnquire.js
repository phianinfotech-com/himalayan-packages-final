import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import Navbar from "../Navbar";
import SearchAllBlog from "../SearchAllBlog";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Fetch() {

  const [blogPosts, setBlogPosts] = useState([]);


  // Function to fetch blog posts from the API using Axios
  useEffect(() => {
    axios
      .get("http://localhost/himalayan/api-fetch-all-enq.php")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">


    
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Mob</th>
        <th>Date</th>
        <th>People</th>
        <th>Msg</th>
        <th>email</th>
        <th>slug</th>
      </tr>
    </thead>
    <tbody>


        {/* {memory.map((memo) => (
                      <div className="carousel-item m-4 " key={memo.key}>
                        <img
                          src={memo.MImg}
                          className="w-64 h-full rounded-lg  shadow-sm transform transition duration-500 hover:scale-105"
                          alt={memo.MAlt}
                        />
                      </div>
                    ))} */}

    {blogPosts.map((enq) => (
      
      <tr  key={enq.key}>
        <th>{enq.EID}</th>
       
     
        
      </tr>
      ))} 
    </tbody>
  </table>
</div>
    </div>
  )
}
