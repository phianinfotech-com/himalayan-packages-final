import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";
import slugify from 'slugify';

const AddBlogPage = () => {

 

const [slug, setSlug] = useState('');



  const convertToSlug = () => {
    const convertedSlug = slugify(slug,{ lower: true });
    setSlug(convertedSlug);
  }; 

  const [category, setcategory] = useState([]); // for category

  /// const [category, setcategory] = useState([]);
  useEffect(() => {
    getcategory();
  }, []);

  function getcategory() {
    axios
      .get("http://localhost/himalayan/api_fetch_category.php/")
      .then(function (response) {
        
        setcategory(response.data);
      });
  }

  const editor = useRef(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [altTag, setAltTag] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const imageInputRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setSlug(e.target.value);
   
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAltTagChange = (e) => {
    setAltTag(e.target.value);
  };

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);

  };

  const validateForm = () => {
    const errors = {};

    if (title.trim() === "") {
      errors.title = "Title is required";
    }

    if (content.trim() === "") {
      errors.content = "Content is required";
    }

    if (image === "") {
      errors.image = "Image is required";
    }

    if (altTag.trim() === "") {
      errors.altTag = "Alt Tag is required";
    }

    if (categoryId.trim() === "") {
      errors.categoryId = "Category ID is required";
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("BName", title);
      formData.append("content", content);
      
      formData.append("image", image);
      formData.append("BAlt", altTag);
      formData.append("CID", categoryId);
      formData.append("slug", slug);

      try {
        // Send the blog data to the PHP API
        const response = await axios.post(
          "http://localhost/himalayan/test.php",
          formData
        );

 

      

        // Reset the form fields
        setTitle("");
        setContent("");
        setImage("");
        setAltTag("");
        setCategoryId("");


       

        // Reset the image input
        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }

        // Show success message with SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Blog added successfully",
        });
      } catch (error) {
        console.error(error);
        // Show error message with SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add blog",
        });
      }
    } else {
      // Show validation error messages with SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Submission Error",
        html: Object.values(errors)
          .map((error) => `<p>${error}</p>`)
          .join(""),
      });
    }
  };

 

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-10 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Blog
          
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">
                        What is your Blog Title?
                      </span>
                    </label>
                    <input
                      type="text"
                      id="Bnane"
                      placeholder="Blog Title "
                      className="input input-bordered w-full max-w-xl"
                      value={title}
                      onChange={handleTitleChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-2/3">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">
                        SEO Friendly Slug
                      </span>
                    </label>
                    <input
                      type="text"
                      id="slugid"
                      placeholder="Type here SEO friendly Slug"
                      className="input input-bordered w-full max-w-xl"
                      value={slug}
                      onChange={handleTitleChange}
                    />
                    
                  </div>
                </div>

                <div className="p-2 w-1/3">
                  <div className="relative">
                    <label className="label">
                 
                    </label>
                    <a
                      
                      className="btn btn-outline btn-primary mt-5"
                      onClick={convertToSlug}
                    >
                      <HiPlusCircle className="h-6 w-6 " />
                      Ok
                    </a>
                    
                  </div>
                </div>




                



                <div className="p-2 w-full">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Select Banner Image</span>
                    </label>
                    <input
                      type="file"
                      className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                      id="image"
                      ref={imageInputRef}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Select Category</span>
                    </label>
                    <select
                      className="select select-bordered w-full max-w-xs"
                      id="categoryId"
                      value={categoryId}
                      onChange={handleCategoryIdChange}
                    >
                      <option disabled value={0}>
                        Select
                      </option>

                      {category.map((category) => (
                        <option key={category.CID} value={category.CID}>
                          {category.CName}
                          
                        </option>
                      
                      ))}
                    </select>
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text">Alt Tag </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xl"
                      id="altTag"
                      value={altTag}
                      onChange={handleAltTagChange}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>

                    <JoditEditor
                      ref={editor}
                      value={content}
                      tabIndex={1} // tabIndex of textarea
                      onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
                      onChange={handleContentChange}
                    />
                  </div>
                </div>
                <div className="p-2 w-full ">
                  <div className="flex ">
                    <button
                      type="submit"
                      className="btn btn-outline btn-primary m-2"
                      onClick={handleSubmit}
                    >
                      <HiPlusCircle className="h-6 w-6 " />
                      Publish
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

export default AddBlogPage;
