import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function Fetch() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const MAX_LENGTH = 250;

  useEffect(() => {
    axios
      .get("https://himalayanpackages.com/himalayan/API_fetch_all_blog.php")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  const handleDelete = (postId) => {
    setPostIdToDelete(postId);
  };

  const confirmDelete = () => {
    if (postIdToDelete !== null) {
      axios
        .delete(
          `https://himalayanpackages.com/himalayan/api-delete-blog-post.php?id=${postIdToDelete}`
        )
        .then((response) => {
          console.log("Blog post deleted successfully");
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
    setPostIdToDelete(null);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-zebra">
          <thead className="font-light">
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Blog Name</th>

              <th>BDate</th>
              <th>Author</th>
              
              <th>Image</th>
              
              <th>View</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody className="font-light">
            {blogPosts.map((post) => (
              <tr key={post.BID}>
                <th>{post.BID}</th>
                <th>{post.CName}</th>
                <th>{post.BName}</th>

                <th>
                {moment(post.BDate).format("DD-MMM-YY")}
                  </th>
                <th>{post.BlogBy}</th>
                
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={post.image} alt="{post.BAlt}" />
                    </div>
                  </div>
                </th>
                
                <th>

                <Link>  <img className="w-8 h-auto image-filter " src="https://himalayanpackages.com/himalayan/uploads/assets/himalayan-packages.pnp" alt="" /></Link>
                 
                </th>

                <th>
                  <button
                    className="btn btn-outline btn-error btn-xs"
                    onClick={() => handleDelete(post.BID)}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {postIdToDelete !== null && (
        <div className="confirmation-popup">
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
  );
}
