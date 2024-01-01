import React, { useState, useEffect } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";

const UpdateBlogPage = () => {
  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedSlug, setUpdatedSlug] = useState("");
  const [updatedImg, setUpdatedImg] = useState("");
  const [updatedCName, setUpdatedCName] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");
  const [altTag, setAltTag] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  // Function to fetch blog post data by its slug
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `https://himalayanpackages.com/himalayan/api-fetch-single.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setBlogPost(jsonData);
      setUpdatedTitle(jsonData.BName);
      setUpdatedSlug(jsonData.slug);
      setUpdatedImg(jsonData.image);
      setUpdatedContent(jsonData.content);
      setUpdatedCName(jsonData.CName);
      setAltTag(jsonData.BAlt);
      setCategoryId(jsonData.CID || "");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch categories
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_category.php/")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch blog post data when the component mounts or the slug changes in the URL
    const urlSlug = window.location.pathname.split("/admin/updateblog/").pop();
    const withoutSlash = urlSlug.replace(/\/$/, "");
    fetchDataBySlug(withoutSlash);
  }, [slug]);

  useEffect(() => {
    // Set initial value for categoryId based on the category name (CName)
    const initialCategoryId = categories.find((cat) => cat.CName === updatedCName)?.CID;
    setCategoryId(initialCategoryId || ""); // If category is not found, set it to an empty string
  }, [categories, updatedCName]);

  // Function to generate slug from title
  const generateSlug = (title) => {
    return slugify(title, { lower: true, strict: true });
  };

  const handleUpdate = async () => {
    const updatedBlogPost = {
      BID: blogPost.BID,
      BName: updatedTitle,
      slug: updatedSlug,
      image: updatedImg,
      CName: updatedCName,
      content: updatedContent,
      BAlt: altTag,
      CID: categoryId,
    };

    try {
      const response = await axios.put(
        `https://himalayanpackages.com/himalayan/api-update-blog-post.php?id=${blogPost.BID}`,
        updatedBlogPost
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Blog updated successfully",
        });
      }
    } catch (error) {
      console.error("Error updating blog post:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update blog",
      });
    }
  };

  // Update slug when title changes
  useEffect(() => {
    setUpdatedSlug(generateSlug(updatedTitle));
  }, [updatedTitle]);


  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container p-10 mx-auto">
          <div className="mx-auto">
            <form>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Update Blog Title</span>
                    </label>
                    <input
                      type="text"
                      id="Bnane"
                      placeholder="Blog Title"
                      className="input input-bordered w-full max-w-xl"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">SEO Friendly Slug</span>
                    </label>
                    <input
                      disabled
                      type="text"
                      id="slugid"
                      placeholder="Type here SEO friendly Slug"
                      className="input input-bordered w-full max-w-xl"
                      value={updatedSlug}
                      onChange={(e) => setUpdatedSlug(e.target.value)}
                    />
                  </div>
                </div>

                <div className="p-2 w-1/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Feature Image</span>
                    </label>
                    <div className="avatar">
                      <div className="w-30  rounded">
                        <img src={updatedImg} alt={altTag}/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-2 w-1/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Alt Tag</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Alt Tag"
                      className="input input-bordered w-full max-w-xl"
                      value={altTag}
                      onChange={(e) => setAltTag(e.target.value)}
                    />
                  </div>
                </div>

                <div className="p-2 w-2/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Choose Image</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                      id="image"
                    />
                  </div>
                </div>

                <div className="p-2 w-2/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Select Category</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      id="categoryId"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                    >
                      <option disabled value={0}>
                        Select
                      </option>
                      {categories.map((cat) => (
                        <option key={cat.CID} value={cat.CID}>
                          {cat.CName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Update Content
                    </label>
                    <JoditEditor
                      value={updatedContent}
                      onChange={(newContent) => setUpdatedContent(newContent)}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="flex ">
                    <button
                      type="button"
                      className="btn btn-outline btn-primary m-2"
                      onClick={handleUpdate}
                    >
                      Update Blog Post
                    </button>
                    <button
                      className="btn btn-outline btn-secondary m-2 "
                      type="reset"
                    >
                      <HiExclamationCircle className="h-6 w-6 " />
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateBlogPage;
