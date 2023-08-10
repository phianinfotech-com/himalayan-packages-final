import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import Navbar from "../Navbar";
import SearchAllBlog from "../SearchAllBlog";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Fetch() {

  const [blogPosts, setBlogPosts] = useState([]);


  // Function to fetch blog posts from the API using Axios
  useEffect(() => {
    axios
      .get("https://himalayanpackages.com/himalayan/api-fetch-all-enq.php")
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
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="bg-indigo-400 shadow-lg shadow-indigo-500/50 font-serif  text-xl  text-white ">
        <th className=" border font-light">Eid</th>
        <th className=" border font-light">Name</th>
        <th className=" border font-light">Mob</th>
        <th className=" border font-light">Date</th>
        <th className=" border font-light">People</th>
        <th className=" border font-light">Msg</th>
        <th className=" border font-light">Email</th>
        <th className=" border font-light">slug</th>
      </tr>
    </thead>
    <tbody>

    {blogPosts.map((enq) => (
      
      <tr className="bg-indigo-50  text-sm text-slate-700 font-normal" key={enq.key}>
        <th className="border">{enq.EID}</th>

        <th className="border">{enq.E_Name}</th>

        <th className="border" >{enq.Mobile_No}</th>

        <th className="border">{moment(enq.Date).format("DD - MMM - YY")}</th>

        <th className="border">{enq.People}</th>

        <th className="border">{enq.E_msg}</th>

        <th className="border">{enq.Email}</th>

        <th className="border">{enq.Slug}</th>

      </tr>


      ))} 
    </tbody>
  </table>
</div>
    </div>
  )
}
