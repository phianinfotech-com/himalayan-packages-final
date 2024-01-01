import React, { useState, useEffect } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useParams,useNavigate  } from "react-router-dom";
import Swal from "sweetalert2";
import { HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";


const UpdateBlogPage = () => {
  const navigate = useNavigate();

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
  const [loading, setLoading] = useState(true);

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
        setLoading(false); // Set loading to false after fetching categories
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false); // Set loading to false even if there's an error
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
    if (!loading) {
      const initialCategoryId = categories.find((cat) => cat.CName === updatedCName)?.CID;
      setCategoryId(initialCategoryId || ""); // If category is not found, set it to an empty string
    }
  }, [loading, categories, updatedCName]);

  // Function to generate slug from title
  const generateSlug = (title) => {
    return slugify(title, { lower: true, strict: true });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImg(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("BID", blogPost.BID);
    formData.append("BName", updatedTitle);
    formData.append("slug", updatedSlug);
    formData.append("content", updatedContent);
    formData.append("BAlt", altTag);
    formData.append("CName", categoryId);
  
    // Append the image file if it's selected
    if (document.getElementById("image").files.length > 0) {
      formData.append("image", document.getElementById("image").files[0]);
    }
  
    try {
      const response = await axios.post(
        `https://himalayanpackages.com/himalayan/api-update-blog-post.php`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Blog updated successfully",
        });
   
        navigate("/admin/all-blog"); 
      
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

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>; // You can replace this with a loading spinner or any other UI indication
  }

  const handleCancel = () => {
    // Navigate to the "all-blog" page
    navigate("/admin/all-blog");
  };

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
                      id="BName"
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
                        <img src={updatedImg} alt={altTag} />
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
                      onChange={handleImageChange}
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
                      onClick={handleCancel}

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
