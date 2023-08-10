import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";

const Addpage = () => {
  // State to store the slug

  
  const [Page_Name, setPageName] = useState("");
  const [Page_Content, setPageContent] = useState("");
  const [Page_Img, setPageImg] = useState("");
  const [Page_Slug, setPageSlug] = useState("");
  
  const imageInputRef = useRef(null);



  const handlePageNameChange = (e) => {
    setPageName(e.target.value);
  };

  const handlePageContentChange = (value) => {
    setPageContent(value);
  };

  const handlePageImgChange = (e) => {
    const file = e.target.files[0];
    setPageImg(file);
  };

  const handlePageSlugChange = (e) => {
    setPageSlug(e.target.value);
  };

 

  // Generate the slug from Page_Name and update it whenever Page_Name changes
  useEffect(() => {
    const generatedSlug = slugify(Page_Name, { lower: true });
    setPageSlug(generatedSlug);
  }, [Page_Name]);


  // Validation function for form fields
  const validateForm = () => {
    const errors = {};

    // ... (the rest of the validation remains unchanged)

    if (Page_Name.trim() === "") {
      errors.Page_Name = "Page Name is required";
    }

    if (Page_Content.trim() === "") {
      errors.Page_Content = "Page Content is required";
    }

    if (!Page_Img) {
      errors.Page_Img = "Page Image is required";
    }

    if (Page_Slug.trim() === "") {
      errors.Page_Slug = "Page Slug is required";
    }

    return errors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
        const formData = new FormData();
        formData.append("Page_Name", Page_Name);
        formData.append("Page_Content", Page_Content);
        formData.append("Page_Img", Page_Img);
        formData.append("Page_Slug", Page_Slug);
       
  
      

      try {
        const response = await axios.post(
          "https://himalayanpackages.com/himalayan/api-addpage.php",
          formData
        );
        console.log("Form Data:", formData);

        setPageName("");
        setPageContent("");
        setPageImg("");
        setPageSlug("");
      


        if (imageInputRef.current) {
          imageInputRef.current.value = "";
        }

        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Package added successfully",
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to add package",
        });
      }
    } else {
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
    <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto bg-white border-2 border-gray-300 p-8 rounded-md shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Add Page</h1>
        <form>
          
          {/* PName */}
          <div className="mb-4">
            <label
              htmlFor="Page_Name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
             Page Name
            </label>
            <input
              type="text"
              id="Page_Name"
              name="Page_Name"
              value={Page_Name}
              onChange={handlePageNameChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Page_Slug */}
          <div className="mb-6">
            <label
              htmlFor="Page_Slug"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Page Slug
            </label>
            <input
              type="text"
              id="Page_Slug"
              name="Page_Slug"
              value={Page_Slug} // Use the Page_Slug state here
              onChange={handlePageSlugChange} // Handle Page_Slug changes
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>



          {/* Page_Content */}
          <div className="mb-4">
            <label
              htmlFor="Page_Content"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Page Content
            </label>
            <JoditEditor
              value={Page_Content}
              tabIndex={1}
              onBlur={(newPageContent) => handlePageContentChange(newPageContent)}
              onChange={handlePageContentChange}
              style={{ width: "100%", height: "200px" }}
            />
          </div>

          {/* Page_Img */}
          <div className="mb-4">
            <label
              htmlFor="Page_Img"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Page Image
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xl"
              id="Page_Img" // The id should be "Page_Img"
              ref={imageInputRef}
              onChange={handlePageImgChange}
            />
          </div>


          

          <div className="flex items-center justify-end mt-4">
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
  );
};

export default Addpage;


