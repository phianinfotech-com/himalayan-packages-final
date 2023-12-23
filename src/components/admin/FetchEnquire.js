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
        <table className="table table-zebra ">
          {/* head */}
          <thead className="font-light">
            <tr>
              <th>Eid</th>
              <th>Name</th>
              <th>Mob</th>
              <th>Date</th>
              <th>People</th>
              <th>Msg</th>
              <th>Email</th>
              <th>slug</th>
            </tr>
          </thead>
          <tbody className="font-light ">
            {blogPosts.map((enq) => (
              <tr key={enq.key}>
                <th>{enq.EID}</th>

                <th>{enq.E_Name}</th>

                <th>{enq.Mobile_No}</th>

                <th>{moment(enq.Date).format("DD - MMM - YY")}</th>

                <th>{enq.People}</th>

                <th>{enq.E_msg}</th>

                <th>{enq.Email}</th>

                <th>{enq.Slug}</th>
              </tr>
            ))}
          </tbody>
        </table>

        

      </div>
    </div>
  );
}
