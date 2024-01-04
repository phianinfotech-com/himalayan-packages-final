
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function AllPages() {
    const MAX_LENGTH = 350;
    const [blogPosts, setBlogPosts] = useState([]);
    const [postIdToDelete, setPostIdToDelete] = useState(null);
  
    useEffect(() => {
      axios
        .get("https://himalayanpackages.com/himalayan/api-fetch-pages.php")
        .then((response) => {
          setBlogPosts(response.data);
        })
        .catch((error) => {
          console.error("Error fetching blog data:", error);
        });
    }, []);
  
    const handleDelete = (postId) => {
      console.log("Handling delete for post ID:", postId);
      setPostIdToDelete(postId);
    };
  
    const confirmDelete = () => {
      console.log("Confirming delete for post ID:", postIdToDelete);
    
      if (postIdToDelete !== null) {
        axios
          .delete(
            `https://himalayanpackages.com/himalayan/api-delete-blog-post.php?id=${postIdToDelete}`
          )
          .then((response) => {
            console.log("Blog post deleted successfully:", response.data);
            setBlogPosts((prevPosts) =>
              prevPosts.filter((post) => post.BID !== postIdToDelete)
            );
            setPostIdToDelete(null);
          })
          .catch((error) => {
            console.error("Error deleting blog post:", error);
            setPostIdToDelete(null);
          });
      }
    };
  
    const cancelDelete = () => {
      console.log("Cancelling delete");
      setPostIdToDelete(null);
    };
  return (
    <div>
    <div className="overflow-x-auto rounded-lg">
      <table className="table table-zebra">
        <thead className="font-light">
          <tr>
            <th>#</th>
            <th>Page Name</th>
            <th> Page Content</th>

            <th>Page Image</th>
           

            <th>Date</th>

            {/* <th>View</th>
            <th>Action</th> */}
          </tr>
        </thead>
        <tbody className="font-light">
          {blogPosts.map((post) => (
            <tr key={post.Page_ID}>
              <th>{post.Page_ID}</th>
              <th>{post.Page_Name}</th>
              <th

              className="leading-relaxed mb-3"
                        dangerouslySetInnerHTML={{
                          __html:
                          post.Page_Content.length > MAX_LENGTH
                              ? `${post.Page_Content.substring(0, MAX_LENGTH)}...`
                              : post.Page_Content,
                        }}

                        ></th>

             

              <th>
                <div className="avatar">
                  <div className="w-24 rounded">
                    <img src={post.Page_Img} alt="Page " />
                  </div>
                </div>
              </th>
              <th>{moment(post.Date).format("DD-MMM-YY")}</th>
             

              {/* <th>
                <Link to={`/admin/updateblog/${post.slug}`}>
                  <img
                    className="w-8 h-auto image-filter "
                    src="https://himalayanpackages.com/himalayan/uploads/assets/himalayan-packages.pnp"
                    alt=""
                  />
                </Link>
              </th> */}

              {/* <th>
                <button
                  className="btn btn-outline btn-error btn-xs"
                  onClick={() => handleDelete(post.BID)}
                >
                  Delete
                </button>
              </th> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {postIdToDelete !== null && (
      <div className="confirmation-popup ">
        <p>Are you sure you want to delete this blog post?</p>
        <button
          className="btn btn-outline btn-success"
          onClick={confirmDelete}
        >
          Yes
        </button>
        <button className="btn btn-outline btn-error" onClick={cancelDelete}>
          No
        </button>
      </div>
    )}
  </div>
  )
}
