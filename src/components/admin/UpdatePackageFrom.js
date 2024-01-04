import React, { useState, useEffect } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";

const UpdatePackageFrom = () => {
  const navigate = useNavigate();

  const { slug } = useParams();
  const [blogPost, setBlogPost] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedSlug, setUpdatedSlug] = useState("");
  const [updatedImg1, setUpdatedImg1] = useState("");
  const [UpdatedImgAlt1, setUpdatedImgAlt1] = useState("");
  const [updatedImg2, setUpdatedImg2] = useState("");
  const [UpdatedImgAlt2, setUpdatedImgAlt2] = useState("");
  const [updatedImg3, setUpdatedImg3] = useState("");
  const [UpdatedImgAlt3, setUpdatedImgAlt3] = useState("");
  const [updatedImg4, setUpdatedImg4] = useState("");
  const [UpdatedImgAlt4, setUpdatedImgAlt4] = useState("");
  const [updatedImg5, setUpdatedImg5] = useState("");
  const [UpdatedImgAlt5, setUpdatedImgAlt5] = useState("");
  const [updatedCName, setUpdatedCName] = useState("");
  const [updatedGroup, setUpdatedGroup] = useState("");
  // const [updatedContent, setUpdatedContent] = useState("");
  const [altTag, setAltTag] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch blog post data by its slug
  const fetchDataBySlug = async (slug) => {
    try {
      const response = await fetch(
        `https://himalayanpackages.com/himalayan/api-fetch-single-package-details.php?slug=${slug}`
      );
      const jsonData = await response.json();
      setBlogPost(jsonData);
      setUpdatedTitle(jsonData.PTitle);
      setUpdatedSlug(jsonData.slug);
      setUpdatedImg1(jsonData.banner1);
      setUpdatedImgAlt1(jsonData.banner_alt1);
      setUpdatedImg2(jsonData.banner2);
      setUpdatedImgAlt2(jsonData.banner_alt2);
      setUpdatedImg3(jsonData.banner3);
      setUpdatedImgAlt3(jsonData.banner_alt3);
      setUpdatedImg4(jsonData.banner4);
      setUpdatedImgAlt4(jsonData.banner_alt4);
      setUpdatedImg5(jsonData.banner5);
      setUpdatedImgAlt5(jsonData.banner_alt5);
      setUpdatedGroup(jsonData.type);
      // setUpdatedCName(jsonData.CName);
      
      // setCategoryId(jsonData.CID || "");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  useEffect(() => {
    // Fetch blog post data when the component mounts or the slug changes in the URL
    const urlSlug = window.location.pathname
      .split("/admin/updatepackageform/")
      .pop();
    const withoutSlash = urlSlug.replace(/\/$/, "");
    console.log("Current Slug:", withoutSlash); // Add this line to print the slug
    fetchDataBySlug(withoutSlash);
  }, [slug]);

  useEffect(() => {
    // Set initial value for categoryId based on the category name (CName)
    if (!loading) {
      const initialCategoryId = categories.find(
        (cat) => cat.CName === updatedCName
      )?.CID;
      setCategoryId(initialCategoryId || ""); // If category is not found, set it to an empty string
    }
  }, [loading, categories, updatedCName]);

  // Function to generate slug from title
  const generateSlug = (title) => {
    return slugify(title, { lower: true, strict: true });
  };

  const handleImageChange1 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImg1(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImg2(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange3 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImg3(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange4 = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImg4(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange5= (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUpdatedImg5(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("PID", blogPost.PID);
    formData.append("PTitle", updatedTitle);
    formData.append("slug", updatedSlug);
    formData.append("banner_alt1", UpdatedImgAlt1);
    formData.append("banner_alt2", UpdatedImgAlt2);
    formData.append("banner_alt3", UpdatedImgAlt3);
    formData.append("banner_alt4", UpdatedImgAlt4);
    formData.append("banner_alt5", UpdatedImgAlt5);
    formData.append("type", updatedGroup);
    


    // formData.append("content", updatedContent);
    
    // formData.append("CName", categoryId);

    // Append the image file if it's selected
    if (document.getElementById("image1").files.length > 0) {
      formData.append("image1", document.getElementById("image1").files[0]);
    }

    if (document.getElementById("image2").files.length > 0) {
      formData.append("image2", document.getElementById("image2").files[0]);
    }

    if (document.getElementById("image3").files.length > 0) {
      formData.append("image3", document.getElementById("image3").files[0]);
    }
    
    if (document.getElementById("image4").files.length > 0) {
      formData.append("image4", document.getElementById("image4").files[0]);
    }

    if (document.getElementById("image5").files.length > 0) {
      formData.append("image5", document.getElementById("image5").files[0]);
    }

    try {
      
    
      const response = await axios.post(
        `https://himalayanpackages.com/himalayan/api-update-package.php`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    
      
    
      if (response.data.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Package updated successfully",
        });
    
        // Check if the navigation is happening as expected
        
        navigate("/admin/allpackages");
        
      } else {
        // Handle cases where the server responds with an error
        console.error("Error updating Package. Server response:", response.data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to update Package",
        });
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error updating Package:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update Package",
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
    navigate("/admin/allpackages");
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container p-10 mx-auto">
          <div className="mx-auto">
            <form>
              <div className="flex flex-wrap -m-2">
                {/* First Column */}
                <div className="p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Update Blog Title</span>
                    </label>
                    <input
                      type="text"
                      id="PTitle"
                      placeholder="Blog Title"
                      className="input input-bordered input-primary w-full max-w-xl"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                  </div>
                </div>

                {/* Second Column */}
                <div className="p-2 w-1/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Slug</span>
                    </label>
                    <input
                      disabled
                      type="text"
                      id="slugid"
                      placeholder="Type here SEO friendly Slug"
                      className="input input-bordered input-primary w-full max-w-xl"
                      value={updatedSlug}
                      onChange={(e) => setUpdatedSlug(e.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-2/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Group Type</span>
                    </label>
                    <input
                      
                      type="text"
                      id="slugid"
                      placeholder="Type here SEO friendly Slug"
                      className="input input-bordered input-primary w-full max-w-xl"
                      value={updatedGroup}
                      onChange={(e) => setUpdatedGroup(e.target.value)}
                    />
                  </div>
                </div>


                <div className="flex p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Feature Image 1</span>
                    </label>
                    <div className="avatar">
                      <div className="w-36 rounded">
                        <img src={updatedImg1} alt={UpdatedImgAlt1} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-2">
                    {/* First Input Field: Alt Tag */}
                    <div className="relative ">
                      <label className="label">
                        <span className="label-text font-semibold	">Alt Tag</span>
                      </label>
                      <input
                        type="text"
                        id="groupid"
                        placeholder="Type here SEO friendly Slug"
                        className="input input-bordered input-primary w-full max-w-xl"
                        value={UpdatedImgAlt1}
                        onChange={(e) => setUpdatedImgAlt1(e.target.value)}
                      />
                    </div>

                    {/* Second Input Field: Choose Image */}
                    <div className="relative">
                      <label className="label">
                        <span className="label-text font-semibold	">Choose Image</span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                        id="image1"
                        onChange={handleImageChange1}
                      />
                    </div>
                  </div>

                  
                </div>

                
                <div className="flex p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Feature Image 2</span>
                    </label>
                    <div className="avatar">
                      <div className="w-36 rounded">
                        <img src={updatedImg2} alt={UpdatedImgAlt2} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-2">
                    {/* First Input Field: Alt Tag */}
                    <div className="relative ">
                      <label className="label">
                        <span className="label-text font-semibold	">Alt Tag</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Alt Tag"
                        id="imgalt2"
                        className="input input-bordered input-primary w-full "
                        value={UpdatedImgAlt2}
                        onChange={(e) => setUpdatedImgAlt2(e.target.value)}
                      />
                    </div>

                    {/* Second Input Field: Choose Image */}
                    <div className="relative">
                      <label className="label">
                        <span className="label-text font-semibold	">Choose Image</span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                        id="image2"
                        onChange={handleImageChange2}
                      />
                    </div>
                  </div>

                  
                </div>

                
                <div className="flex p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Feature Image 3</span>
                    </label>
                    <div className="avatar">
                      <div className="w-36 rounded">
                        <img src={updatedImg3} alt={UpdatedImgAlt3} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-2">
                    {/* First Input Field: Alt Tag */}
                    <div className="relative ">
                      <label className="label">
                        <span className="label-text font-semibold	">Alt Tag</span>
                      </label>
                      <input
                        type="text"
                        id="imgalt3"
                        placeholder="Alt Tag"
                        className="input input-bordered input-primary w-full "
                        value={UpdatedImgAlt3}
                        onChange={(e) => setUpdatedImgAlt3(e.target.value)}
                      />
                    </div>

                    {/* Second Input Field: Choose Image */}
                    <div className="relative">
                      <label className="label">
                        <span className="label-text font-semibold	">Choose Image 4</span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                        id="image3"
                        onChange={handleImageChange3}
                      />
                    </div>
                  </div>

                  
                </div>

                
                <div className="flex p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Feature Image 4</span>
                    </label>
                    <div className="avatar">
                      <div className="w-36 rounded">
                        <img src={updatedImg4} alt={UpdatedImgAlt4} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-2">
                    {/* First Input Field: Alt Tag */}
                    <div className="relative ">
                      <label className="label">
                        <span className="label-text font-semibold	">Alt Tag</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Alt Tag"
                        className="input input-bordered input-primary w-full "
                        value={UpdatedImgAlt4}
                        onChange={(e) => setUpdatedImgAlt4(e.target.value)}
                      />
                    </div>

                    {/* Second Input Field: Choose Image */}
                    <div className="relative">
                      <label className="label">
                        <span className="label-text font-semibold	">Choose Image</span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                        id="image4"
                        onChange={handleImageChange4}
                      />
                    </div>
                  </div>

                  
                </div>

                
                <div className="flex p-2 w-3/6">
                  <div className="relative">
                    <label className="label">
                      <span className="label-text font-semibold	">Feature Image5</span>
                    </label>
                    <div className="avatar">
                      <div className="w-36 rounded">
                        <img src={updatedImg5} alt={UpdatedImgAlt5} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col p-2">
                    {/* First Input Field: Alt Tag */}
                    <div className="relative ">
                      <label className="label">
                        <span className="label-text font-semibold	">Alt Tag</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Alt Tag"
                        className="input input-bordered input-primary w-full "
                        value={UpdatedImgAlt5}
                        onChange={(e) => setUpdatedImgAlt5(e.target.value)}
                      />
                    </div>

                    {/* Second Input Field: Choose Image */}
                    <div className="relative">
                      <label className="label">
                        <span className="label-text font-semibold	">Choose Image</span>
                      </label>
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                        id="image5"
                        onChange={handleImageChange5}
                      />
                    </div>
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

export default UpdatePackageFrom;
