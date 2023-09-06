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



  const [banner1, setBanner1] = useState("");
  const [temp, setTemp] = useState("");
  const [banner_alt1, setBannerAlt1] = useState("");
  const [banner2, setBanner2] = useState("");
  const [banner_alt2, setBannerAlt2] = useState("");
  const [banner3, setBanner3] = useState("");
  const [banner_alt3, setBannerAlt3] = useState("");
  const [banner4, setBanner4] = useState("");
  const [banner_alt4, setBannerAlt4] = useState("");

  const [categoryId, setCategoryId] = useState("");
  
  const [multilocationid, setMultiLocationId] = useState("");
  
  const [multilocation, setMultiLocation] = useState([]);

  const [selectedMultilocations, setSelectedMultilocations] = useState([]);

  useEffect(() => {
   
    getMultilocation();
  }, []);



  function getMultilocation() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_category.php/")
      .then(function (response) {
        setMultiLocation(response.data);
      });
  }

  // Add state variables for form validation
  const [errors, setErrors] = useState({});


  const handlemultilocationidChange = (e) => {
    const selectedMultilocationId = e.target.value;
    const selectedMultilocationName = multilocation.find(
      (location) => location.CID === selectedMultilocationId
    ).CName;
    setSelectedMultilocations((prevSelectedMultilocations) => [
      ...prevSelectedMultilocations,
      selectedMultilocationName,
     
    ]);
    setMultiLocationId(selectedMultilocationId);
    
  };

  const removeSelectedMultilocation = (locationName) => {
    setSelectedMultilocations((prevSelectedMultilocations) =>
      prevSelectedMultilocations.filter((location) => location !== locationName)
    );
  };

  const handlePTitleChange = (e) => {
    setPTitle(e.target.value);
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



    if (!slug) {
      validationErrors.slug = "slug is required";
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

    formData.append("slug", slug);
    formData.append("banner1", banner1);
    formData.append("banner_alt1", banner_alt1);
    formData.append("banner2", banner2);
    formData.append("banner_alt2", banner_alt2);
    formData.append("banner3", banner3);
    formData.append("banner_alt3", banner_alt3);
    formData.append("banner4", banner4);
    formData.append("banner_alt4", banner_alt4);
    formData.append("temp", temp);

    selectedMultilocations.forEach((locationName) => {
      formData.append("multilocation[]", locationName);
    });

    try {
      // Make an HTTP POST request to your PHP API endpoint
      const response = await axios.post(
        "https://himalayanpackages.com/himalayan/api-add-pkg.php",
        formData
      );

      console.log("Form Data:", formData);

      // Handle the response from the API as needed
      // For example, show a success message or redirect to another page
      console.log(response.data);

      // Clear the form fields after successful submission
      setPTitle("");
      setSlug("");
      setCategoryId("");
 

      setBanner1("");
      setBannerAlt1("");
      setBanner2("");
      setBannerAlt2("");
      setBanner3("");
      setBannerAlt3("");
      setBanner4("");
      setBannerAlt4("");
      setTemp("");

      Swal.fire("Success", "Package added successfully!", "success");
    } catch (error) {
      // Handle error if the API request fails
      console.error(error);
      Swal.fire(
        "Error",
        "Failed to add package. Please try again later.",
        "error"
      );
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
            <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
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

            <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
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
              {/* Price */}

              <label
                htmlFor="temp"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Price
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

            {/* Category for location */}
            <div className="lg:w-1/4 md:w-1/4 p-4 w-full">
              <label
                htmlFor="Category"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Location
              </label>

              <select
                className="select input-primary w-full max-w-xs"
                id="multilocationid"
                value={multilocationid}
                onChange={handlemultilocationidChange}
              >
                <option value="">
                  {selectedMultilocations.length > 0
                    ? "Select another category"
                    : "Select another category"}
                </option>
                {multilocation.map(
                  (location) =>
                    !selectedMultilocations.includes(location.CName) && (
                      <option key={location.CID} value={location.CID}>
                        {location.CName}
                      </option>
                    )
                )}
              </select>
            </div>
            {/* Multilocations */}
            <div className="lg:w-1/2 md:w-1/2 p-4 w-full">
              <label
                htmlFor="selectedMultilocations"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Selected Multilocations
              </label>

              <div className="flex flex-wrap">
                {selectedMultilocations.map((location, index) => (
                  <div
                    key={index}
                    className="rounded-md bg-blue-100 px-2 py-1 m-1 flex items-center"
                  >
                    {location}
                    <button
                      type="button"
                      onClick={() => removeSelectedMultilocation(location)}
                      className="ml-2 text-red-600"
                    >
                      &#x2715;
                    </button>
                  </div>
                ))}
              </div>
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
