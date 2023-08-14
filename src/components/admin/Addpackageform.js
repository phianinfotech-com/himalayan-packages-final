import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";


const AddPackageForm = () => {
  const [slug, setSlug] = useState("");
  const [PTitle, setPTitle] = useState("");
  const [key_img1, setKeyImg1] = useState("");
  const [key_img_alt1, setKeyImgAlt1] = useState("");
  const [key_img2, setKeyImg2] = useState("");
  const [key_img_alt2, setKeyImgAlt2] = useState("");
  const [key_img3, setKeyImg3] = useState("");
  const [key_img_alt3, setKeyImgAlt3] = useState("");
  const [key_img4, setKeyImg4] = useState("");
  const [key_img_alt4, setKeyImgAlt4] = useState("");
  const [banner1, setBanner1] = useState("");
  const [temp, setTemp] = useState("");
  const [banner_alt1, setBannerAlt1] = useState("");
  const [banner2, setBanner2] = useState("");
  const [banner_alt2, setBannerAlt2] = useState("");
  const [banner3, setBanner3] = useState("");
  const [banner_alt3, setBannerAlt3] = useState("");
  const [banner4, setBanner4] = useState("");
  const [banner_alt4, setBannerAlt4] = useState("");
  const [Category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setcategory] = useState([]); // for category


  
  // Add state variables for form validation
  const [errors, setErrors] = useState({});

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
  // Rest of the code...

  const handlePTitleChange = (e) => {
    setPTitle(e.target.value);
  };

  const handleKeyImg1Change = (e) => {
    const file = e.target.files[0];
    setKeyImg1(file);
  };

  const handleKeyImgAlt1Change = (e) => {
    setKeyImgAlt1(e.target.value);
  };

  const handleKeyImg2Change = (e) => {
    const file = e.target.files[0];
    setKeyImg2(file);
  };

  const handleKeyImgAlt2Change = (e) => {
    setKeyImgAlt2(e.target.value);
  };

  const handleKeyImg3Change = (e) => {
    const file = e.target.files[0];
    setKeyImg3(file);
  };

  const handleKeyImgAlt3Change = (e) => {
    setKeyImgAlt3(e.target.value);
  };

  const handleKeyImg4Change = (e) => {
    const file = e.target.files[0];
    setKeyImg4(file);
  };

  const handleKeyImgAlt4Change = (e) => {
    setKeyImgAlt4(e.target.value);
  };

  const handleBanner1Change = (e) => {
    const file = e.target.files[0];
    setBanner1(file);
  };

  

 

  const handleBannerAlt1Change = (e) => {
    setBannerAlt1(e.target.value);
  };

  const handleBanner2Change = (e) => {
    const file = e.target.files[0];
    setBanner2(file);
  };

  const handleBannerAlt2Change = (e) => {
    setBannerAlt2(e.target.value);
  };

  const handleBanner3Change = (e) => {
    const file = e.target.files[0];
    setBanner3(file);
  };

  const handleBannerAlt3Change = (e) => {
    setBannerAlt3(e.target.value);
  };

  const handleBanner4Change = (e) => {
    const file = e.target.files[0];
    setBanner4(file);
  };

  const handleBannerAlt4Change = (e) => {
    setBannerAlt4(e.target.value);
  };

  const handleSlugChange = (e) => {
    
    setSlug(e.target.value);
  };
  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);

  };

  const handleTempChange = (e) => {
    setTemp(e.target.value);

  };
  

  // Generate the slug from PTitle and update it whenever PTitle changes
  useEffect(() => {
    const generatedSlug = slugify(PTitle, { lower: true });
    setSlug(generatedSlug);
  }, [PTitle]);

  //   // Validation function for form fields
  //   const validateForm = () => {
  //     // ... (rest of the validation code)
  //   };

  //   // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
 // Perform form validation
    const validationErrors = {};
    if (!PTitle.trim()) {
      validationErrors.PTitle = "Package title is required";
    }

    if (!categoryId) {
      validationErrors.categoryId = "Category is required";
    }

    if (!slug) {
        validationErrors.slug = "slug is required";
      }

    if (!key_img1) {
        validationErrors.key_img1 = "key_img1 is required";
      }

      if (!key_img2) {
        validationErrors.key_img2 = "key_img2 is required";
      }

      if (!key_img3) {
        validationErrors.key_img3 = "key_img3 is required";
      }

      if (!key_img4) {
        validationErrors.key_img4 = "key_img4 is required";
      }

      if (!key_img_alt1) {
        validationErrors.key_img_alt1 = "key_img_alt1 is required";
      }

      if (!key_img_alt1) {
        validationErrors.key_img_alt2 = "key_img_alt2 is required";
      }

      if (!key_img_alt3) {
        validationErrors.key_img_alt3 = "key_img_alt3 is required";
      }

      if (!key_img_alt4) {
        validationErrors.key_img_alt4 = "key_img_alt4 is required";
      }

      if (!banner1) {
        validationErrors.banner1 = "banner1 is required";
      }

      if (!banner2) {
        validationErrors.banner2 = "banner2 is required";
      }

      if (!banner3) {
        validationErrors.banner3 = "banner3 is required";
      }

      if (!banner4) {
        validationErrors.banner4 = "banner4 is required";
      }

      if (!banner_alt1) {
        validationErrors.banner_alt1 = "banner_alt1 is required";
      }

      if (!banner_alt2) {
        validationErrors.banner_alt2 = "banner_alt2 is required";
      }

      if (!banner_alt3) {
        validationErrors.banner_alt3 = "banner_alt3 is required";
      }

      if (!banner_alt4) {
        validationErrors.banner_alt4 = "banner_alt4 is required";
      }
      if (!temp) {
        validationErrors.temp = "Duration is required";
      }
    // Add more validation for other form fields as needed

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        // Show SweetAlert error message for validation errors
        showValidationAlert();
        return;
      }

    // Create a FormData object to hold the form data
    const formData = new FormData();
    formData.append("PTitle", PTitle);
    formData.append("CID", categoryId);
    formData.append("slug", slug);

    formData.append("key_img1", key_img1);
    formData.append("key_img_alt1", key_img_alt1);
    formData.append("key_img2", key_img2);
    formData.append("key_img_alt2", key_img_alt2);
    formData.append("key_img3", key_img3);
    formData.append("key_img_alt3", key_img_alt3);
    formData.append("key_img4", key_img4);
    formData.append("key_img_alt4", key_img_alt4);
    formData.append("banner1", banner1);
    formData.append("banner_alt1", banner_alt1);
    formData.append("banner2", banner2);
    formData.append("banner_alt2", banner_alt2);
    formData.append("banner3", banner3);
    formData.append("banner_alt3", banner_alt3);
    formData.append("banner4", banner4);
    formData.append("banner_alt4", banner_alt4);
    formData.append("temp", temp);
  
 
    
    try {
        // Make an HTTP POST request to your PHP API endpoint
        const response = await axios.post("http://localhost/himalayan/api-add-pkg.php", formData);
    
        // Handle the response from the API as needed
        // For example, show a success message or redirect to another page
        console.log(response.data);
        Swal.fire("Success", "Package added successfully!", "success");
    } catch (error) {
        // Handle error if the API request fails
        console.error(error);
        Swal.fire("Error", "Failed to add package. Please try again later.", "error");
    }
    };
    
     // Function to display SweetAlert error message for validation errors
  const showValidationAlert = () => {
    let errorMessage = "Please fix the following errors:\n\n";
    for (const field in errors) {
      errorMessage += `- ${errors[field]}\n`;
    }

    Swal.fire({
      icon: "error",
      title: "Validation Error",
      text: errorMessage,
    });
  };

  
  
    
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className=" mx-auto bg-white border-2 border-gray-300 p-8 rounded-md shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Add Packages</h1>

          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/4 p-4 w-full">
              <label
                htmlFor="PTitle"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                PTitle
              </label>
              <input
                type="text"
                id="PTitle"
                name="PTitle"
                value={PTitle}
                onChange={handlePTitleChange}
                className="input input-bordered input-primary w-full"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/4 p-4 w-full">
              {/* slug */}

              <label
                htmlFor="slug"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Slug
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={slug}
                onChange={handleSlugChange}
                className="input input-bordered input-primary w-full "
                required
              />
              
            </div>

            <div className="lg:w-1/4 md:w-1/4 p-4 w-full">
              {/* Category */}

              <label
                htmlFor="Category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Slug
              </label>
             
 <select
                      className="select select-bordered w-full max-w-xs"
                      id="categoryId"
                      value={categoryId}
                      onChange={handleCategoryIdChange}
                    >
                      <option selected value={0}>
                        Select
                      </option>

                      {category.map((category) => (
                        <option key={category.CID} value={category.CID}>
                          {category.CName}
                          
                        </option>
                      
                      ))}
                    </select>
            </div>


            <div className="lg:w-1/4 md:w-1/4 p-4 w-full">
              {/* slug */}

              <label
                htmlFor="temp"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                temp
              </label>
              <input
                type="text"
                id="slug"
                name="temp"
                value={temp}
                onChange={handleTempChange}
                className="input input-bordered input-primary w-full "
                required
              />
              
            </div>
            

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* key_img1 */}

              <label
                htmlFor="key_img1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image 1
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="key_img1"
                onChange={handleKeyImg1Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* key_img_alt1 */}

              <label
                htmlFor="key_img_alt1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image Alt 1
              </label>
              <input
                type="text"
                id="key_img_alt1"
                name="key_img_alt1"
                value={key_img_alt1}
                onChange={handleKeyImgAlt1Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {" "}
              {/* key_img2 */}
              <label
                htmlFor="key_img2"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image 2
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full h-10 file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="key_img2"
                onChange={handleKeyImg2Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* key_img_alt2 */}

              <label
                htmlFor="key_img_alt2"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image Alt 2
              </label>
              <input
                type="text"
                id="key_img_alt2"
                name="key_img_alt2"
                value={key_img_alt2}
                onChange={handleKeyImgAlt2Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {" "}
              {/* key_img3 */}
              <label
                htmlFor="key_img3"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image 3
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full h-10 file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="key_img4"
                onChange={handleKeyImg3Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* key_img_alt3 */}

              <label
                htmlFor="key_img_alt3"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image Alt 3
              </label>
              <input
                type="text"
                id="key_img_alt3"
                name="key_img_alt3"
                value={key_img_alt3}
                onChange={handleKeyImgAlt3Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {" "}
              {/* key_img4 */}
              <label
                htmlFor="key_img4"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image 4
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full h-10 file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="key_img4"
                onChange={handleKeyImg4Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* key_img_alt4 */}

              <label
                htmlFor="key_img_alt4"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Key Features Image Alt 4
              </label>
              <input
                type="text"
                id="key_img_alt4"
                name="key_img_alt4"
                value={key_img_alt4}
                onChange={handleKeyImgAlt4Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* banner1 */}

              <label
                htmlFor="banner1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image 1
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="banner1"
                onChange={handleBanner1Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* bannerAlt1 */}

              <label
                htmlFor="banner_alt1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image Alt Tag 1
              </label>
              <input
                type="text"
                id="banner_alt1"
                name="banner_alt1"
                value={banner_alt1}
                onChange={handleBannerAlt1Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* banner2 */}

              <label
                htmlFor="banner2"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner 2
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="banner2"
                onChange={handleBanner2Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* bannerAlt2 */}

              <label
                htmlFor="banner_alt2"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image Alt Tag 2
              </label>
              <input
                type="text"
                id="banner_alt2"
                name="banner_alt2"
                value={banner_alt2}
                onChange={handleBannerAlt2Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* banner3 */}

              <label
                htmlFor="banner3"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image 3
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="banner3"
                onChange={handleBanner3Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* banner_alt3 */}

              <label
                htmlFor="banner_alt3"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image Alt Tag 3
              </label>
              <input
                type="text"
                id="banner_alt3"
                name="banner_alt3"
                value={banner_alt3}
                onChange={handleBannerAlt3Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* banner4 */}

              <label
                htmlFor="banner4"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image 4
              </label>
              <input
                type="file"
                accept=".webp,.jpg,.jpeg,.png,.avif"
                className="block file-input w-full file-input-bordered file-input-primary text-sm text-slate-500 file:mr-4  file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-primary hover:file:bg-sky-100"
                id="banner4"
                onChange={handleBanner4Change}
              />
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              {/* banner_alt4 */}

              <label
                htmlFor="banner_alt4"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image Alt Tag 4
              </label>
              <input
                type="text"
                id="banner_alt4"
                name="banner_alt4"
                value={banner_alt4}
                onChange={handleBannerAlt4Change}
                className="input input-bordered input-primary w-full max-w-xs"
                required
              />
            </div>
          </div>
          <form>
            {/* Rest of the fields... */}

            {/* Submit and Cancel buttons */}
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
    </div>
  );
};

export default AddPackageForm;
