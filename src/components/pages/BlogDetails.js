
import React, { useState, useEffect } from "react";

import Footer from "../Footer";
import axios from "axios";
import Navbar from "../Navbar";
import { useNavigate, useParams } from "react-router-dom";

import moment from "moment";
import SearchBar from '../SearchBar';
import { FacebookShareButton, FacebookIcon , EmailShareButton, FacebookShareCount, EmailIcon , WhatsappShareButton ,WhatsappIcon, LinkedinShareButton  ,LinkedinIcon, InstapaperIcon, InstapaperShareButton } from 'react-share';

import { Link } from "react-router-dom";


// BlogDetails component responsible for rendering a blog post details page
const BlogDetails = () => {

const currentURL = window.location.href;
console.log(currentURL);
  const navigate = useNavigate();

  // State to store the blog post data
  const [data, setData] = useState(null);

  // Function to fetch blog post data by its slug
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `http://localhost/himalayan/api-fetch-single.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // State to store the list of popular blog posts
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch all blog posts when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost/himalayan/api-fetch-new-blog.php")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  // Fetch blog post data when the component mounts or the slug changes in the URL
  useEffect(() => {
    const urlSlug = window.location.pathname.split("/blog/").pop();
    const withoutslash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutslash);
  }, []);

  // Function to handle click on a blog post in the list
  const handleBlogClick = (slug) => {
    fetchDataBySlug(slug);
  };

  return (
    <div>
      {/* Render the featured image section with a navigation bar */}
      <div className="relative">
        <section className="bg-[url('https://images.thrillophilia.com/image/upload/s--_XQ_pqQH--/c_fill,g_auto,h_642,w_1400/dpr_1.0/v1/collections/images/015/120/655/original/1655472205_shutterstock_1141239563.jpg.jpg')] w-full h-96 bg-cover bg-center ">
          <Navbar />
          <h2 className="absolute text-3xl text-white bottom-20 left-40 -translate-x-1/2 border-l-4 border-primary font-semibold pl-4"></h2>
        </section>
      </div>

      {/* Render the blog post details section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -my-8">
            <div className="py-8 px-4 lg:w-3/4">
              {/* Check if blog data exists, then display the details */}
              {data ? (
                <div className="h-full flex items-start">
                  <div className="flex-grow pl-6 p-4">
                    <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                      {data.BName}
                    </h1>

                    <a className="inline-flex items-center ">
                      <span className="flex-grow flex flex-row pl-3">
                        <span className="title-font font-medium text-gray-900 ">
                          By {data.BlogBy}
                        </span>
                        <span className="leading-relaxed mb-5 ml-5">
                          {moment(data.BDate).format("MMMM Do, YYYY")}
                        </span>
                      </span>
                    </a>
                    <div>
      <FacebookShareButton
     url={currentURL}
        quote={data.BName}
        image={data.image}
       
      >
        <FacebookShareCount url={currentURL} />
        <FacebookIcon size={40} round className="m-2" />
      </FacebookShareButton>

      <EmailShareButton
     url={currentURL}
        quote={data.BName}
        image={data.image}
     
      >
     <EmailIcon size={40} round className="m-2" />
      </EmailShareButton>

      <WhatsappShareButton
     
        url={currentURL}
        quote={data.BName}
        image={data.image}
       
      >
        <WhatsappIcon size={40} round className="m-2" />
      </WhatsappShareButton>

      <LinkedinShareButton
     
        url={currentURL}
        quote={data.BName}
        image={data.image}
       
      >
        <LinkedinIcon size={40} round className="m-2" />
      </LinkedinShareButton>

     


    </div>
                    <img
                      src={data.image}
                      alt={data.BAlt}
                      className="w-full  shadow-xl border-solid border-2 rounded-2xl mb-10"
                    />
                    {/* Render blog content using dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{ __html: (data.content) }}></div>
                  </div>
                </div>
              ) : (
                // If blog data is not available, display a message
                <p>Blog Not Found...</p>
              )}
            </div>

            {/* Render the sidebar section */}
            <div className="py-8 px-4 lg:w-1/4 ">
              <div className="h-full flex items-start  p-5 ">
                <div className="flex-grow">
                  <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Search Blog</span>
                      </label>
                      
                      {/* Render the SearchBar component */}
                      <SearchBar handleBlogClick={handleBlogClick} />
                    </div>
                  </h2>
                  <h1 className="title-font text-xl font-medium pt-5 text-gray-900 mb-3">
                    Popular Blog
                  </h1>

                  {/* Render the list of popular blog posts */}
                  {blogPosts.map((post) => (
                    
                    <div className="inline-flex items-center " key={post.BID}>
                       {/* Render the link to individual blog post */}
                       <Link
                            to={`/blog/${post.slug}`}
                            onClick={() => handleBlogClick(post.slug)}
                            className="text-primary inline-flex items-center md:mb-2 lg:mb-0"
                          >
                      <div className="card w-auto bg-base-100 shadow-xl my-2">
                        <figure>
                          <img src={post.image} alt={post.BAlt} />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title  ">{post.BName}</h2>

                  
                         
                            {post.title}
                            Learn More
                         
                          
                        </div>
                      </div>
                      </Link>
                    </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default BlogDetails;
