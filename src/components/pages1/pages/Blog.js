import React, { useState, useEffect } from "react";
import axios from "axios";
import { Parser } from "html-to-react";
import Navbar from "../Navbar";
import SearchAllBlog from "../SearchAllBlog";
import Footer from "../Footer";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Blog() {
  // State to store blog posts fetched from the API
  const [blogPosts, setBlogPosts] = useState([]);

  // State to manage pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of blog posts to display per page

  // Max length for content preview
  const MAX_LENGTH = 250;

  // State to store search results
  const [searchResults, setSearchResults] = useState(null);

  // Function to fetch blog posts from the API using Axios
  useEffect(() => {
    axios
      .get("https://himalayanpackages.com/himalayan/API_fetch_all_blog.php")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
      AOS.init({ duration: 1000 });
  }, []);

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogPosts = blogPosts.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle search
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setSearchResults(null);
      return;
    }

    const filteredPosts = blogPosts.filter((post) =>
      post.BName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredPosts);
  };

  // Choose which blog posts to display based on search results
  const displayBlogPosts = searchResults || currentBlogPosts;

  const parser = new Parser();
  return (
    <>
      {/* Navbar and Hero Section */}
      <div className="relative">
        <section className="bg-[url('https://images.thrillophilia.com/image/upload/s--_XQ_pqQH--/c_fill,g_auto,h_642,w_1400/dpr_1.0/v1/collections/images/015/120/655/original/1655472205_shutterstock_1141239563.jpg.jpg')] w-full h-96 bg-cover bg-center ">
          <Navbar />
          <h2 className="absolute text-3xl text-white bottom-20 left-40 -translate-x-1/2 border-l-4 border-primary font-semibold pl-4">
            All Blogs
          </h2>
        </section>
      </div>

      {/* Blog Posts Section */}
      <section className="text-gray-600 body-font bg-[#f3f9ed]" >
        <div className="container px-10 py-24 mx-auto">
          {/* SearchAllBlog */}

          <div className="flex flex-col items-center justify-center mb-8 md:flex-row md:justify-between md:mb-10">
            <h1 className="text-4xl font-bold text-center mb-4 md:mb-0">
              All Blog
            </h1>
            <div className="md:ml-4">
              <div className="form-control w-full max-w-xs">
                <SearchAllBlog handleSearch={handleSearch} />
              </div>
            </div>
          </div>
          {/* Display the blog posts */}
          <div className="flex-wrap -m-4 grid md:grid-cols-3 md:gap-3" >
            {displayBlogPosts.map((post) => (
              <div key={post.BID} className="md:w-full" >
                <div className="p-4">
                  <div className="card w-auto bg-base-100 shadow-xl h-full border-2  overflow-hidden" data-aos="zoom-in-up">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={post.image}
                      alt={post.BAlt}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-secondary mb-1">
                        {post.CName}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.BName}
                      </h1>
                      {/* Display content preview */}
                      <p
                        className="leading-relaxed mb-3"
                        dangerouslySetInnerHTML={{
                          __html:
                            post.content.length > MAX_LENGTH
                              ? `${post.content.substring(0, MAX_LENGTH)}...`
                              : post.content,
                        }}
                      ></p>
                      <div className="flex items-center flex-wrap ">
                        <Link
                          to={`/blog/${post.slug}/`}
                          className="text-primary inline-flex items-center text-xl md:mb-2 lg:mb-0"
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4" >
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-1 px-3 py-1 border rounded bg-white text-primary"
            >
              Previous
            </button>

            {/* Pagination buttons */}
            {Array.from({
              length: Math.ceil(blogPosts.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-1 border rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(blogPosts.length / itemsPerPage)
              }
              className="mx-1 px-3 py-1 border rounded bg-white text-blue-500"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Blog;
