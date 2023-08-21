import React, { useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect } from "react";
import JoditEditor from "jodit-react";
import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";
import slugify from "slugify";

const AddPackages = () => {
  // State to store the slug
  const [slug, setSlug] = useState("");

  const [selectedMultilocations, setSelectedMultilocations] = useState([]);
  const [category, setCategory] = useState([]);
  const [multilocation, setMultiLocation] = useState([]);

  useEffect(() => {
    getCategories();
    getMultilocation();
  }, []);

  function getCategories() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_category.php/")
      .then(function (response) {
        setCategory(response.data);
      });
  }

  function getMultilocation() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_category.php/")
      .then(function (response) {
        setMultiLocation(response.data);
      });
  }

  const editor = useRef(null);

  const [PName, setPName] = useState("");
  const [PDuration, setPDuration] = useState("");
  const [PLocation, setPLocation] = useState("");
  const [PHighlight, setPHighlight] = useState("");
  const [POverview, setPOverview] = useState("");
  const [PackPolicyID, setPackPolicyID] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [multilocationid, setMultiLocationId] = useState("");

  const imageInputRef = useRef(null);

  const handlePNameChange = (e) => {
    setPName(e.target.value);
  };

  const handlePDurationChange = (e) => {
    setPDuration(e.target.value);
  };

  const handlePLocationChange = (e) => {
    setPLocation(e.target.value);
  };

  const handlePHighlightChange = (value) => {
    setPHighlight(value);
  };

  const handlePOverviewChange = (value) => {
    setPOverview(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
  };

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

  const handlePackPolicyIDChange = (value) => {
    setPackPolicyID(value);
  };

  const handleSlugChange = (e) => {
    setSlug(e.target.value);
  };

  // Generate the slug from PName and update it whenever PName changes
  useEffect(() => {
    const generatedSlug = slugify(PName, { lower: true });
    setSlug(generatedSlug);
  }, [PName]);

  // Validation function for form fields
  const validateForm = () => {
    const errors = {};

    if (PName.trim() === "") {
      errors.PName = "Title is required";
    }

    if (PDuration.trim() === "") {
      errors.PDuration = "Content is required";
    }

    if (!image) {
      errors.image = "Image is required";
    }

    if (categoryId.trim() === "") {
      errors.categoryId = "Category ID is required";
    }

    if (PHighlight.trim() === "") {
      errors.PHighlight = "Alt Tag is required";
    }

    if (POverview.trim() === "") {
      errors.POverview = "Category ID is required";
    }

    if (PackPolicyID.trim() === "") {
      errors.PackPolicyID = "Category ID is required";
    }

    return errors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("PName", PName);
      formData.append("PDuration", PDuration);
      formData.append("PLocation", PLocation);
      formData.append("PHighlight", PHighlight);
      formData.append("POverview", POverview);
      formData.append("PackPolicyID", PackPolicyID);
      formData.append("image", image); // Ensure that "image" is added to formData

      formData.append("CID", categoryId);
      formData.append("slug", slug);

      selectedMultilocations.forEach((locationName) => {
        formData.append("multilocation[]", locationName);
      });

      try {
        const response = await axios.post(
          "https://himalayanpackages.com/himalayan/api-add-package.php",
          formData
        );
        console.log("Form Data:", formData);

        setPName("");
        setPDuration("");
        setPLocation("");
        setPHighlight("");
        setPOverview("");
        setPackPolicyID("");
        setImage("");
        setCategoryId("");
        setSlug("");
        setMultiLocationId("");

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
        <h1 className="text-2xl font-bold mb-4">Add Packages</h1>
        <form>
          {/* Select box for categories */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              id="categoryId"
              value={categoryId}
              onChange={handleCategoryIdChange}
            >
              <option disabled value="">
                Select
              </option>
              {category.map((category) => (
                <option key={category.CID} value={category.CID}>
                  {category.CName}
                </option>
              ))}
            </select>
          </div>
          {/* Category for location */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Select Category for location</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              id="multilocationid"
              value={multilocationid}
              onChange={handlemultilocationidChange}
            >
              <option disabled value="">
                Select
              </option>
              {multilocation.map((location) => (
                <option key={location.CID} value={location.CID}>
                  {location.CName}
                </option>
              ))}
            </select>
          </div>
          {/* Multilocations */}
          <div className="mb-4">
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

          {/* PName */}
          <div className="mb-4">
            <label
              htmlFor="PName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PName
            </label>
            <input
              type="text"
              id="PName"
              name="PName"
              value={PName}
              onChange={handlePNameChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* slug */}
          <div className="mb-6">
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
              value={slug} // Use the slug state here
              onChange={handleSlugChange} // Handle slug changes
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* PDuration */}
          <div className="mb-4">
            <label
              htmlFor="PDuration"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PDuration
            </label>
            <input
              type="text"
              id="PDuration"
              name="PDuration"
              value={PDuration}
              onChange={handlePDurationChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Image
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xl"
              id="image" // The id should be "image"
              ref={imageInputRef}
              onChange={handleImageChange}
            />
          </div>

          {/* PLocation */}
          <div className="mb-4">
            <label
              htmlFor="PLocation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PLocation
            </label>
            <input
              type="text"
              id="PLocation"
              name="PLocation"
              value={PLocation}
              onChange={handlePLocationChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* PHighlight */}
          <div className="mb-4">
            <label
              htmlFor="PHighlight"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PHighlight
            </label>
            <JoditEditor
              ref={editor}
              value={PHighlight}
              tabIndex={1}
              onBlur={(newPHighlight) => setPHighlight(newPHighlight)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
              onChange={handlePHighlightChange}
              style={{ width: "100%", height: "200px" }}
            />
          </div>

          {/* POverview */}
          <div className="mb-4">
            <label
              htmlFor="POverview"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              POverview
            </label>
            <JoditEditor
              ref={editor}
              value={POverview}
              tabIndex={1}
              onBlur={(newPOverview) => setPOverview(newPOverview)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
              onChange={handlePOverviewChange}
              style={{ width: "100%", height: "200px" }}
            />
          </div>

          {/* PackPolicyID */}
          <div className="mb-4">
            <label
              htmlFor="PackPolicyID"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PackPolicyID
            </label>

            <JoditEditor
              ref={editor}
              value={PackPolicyID}
              tabIndex={1}
              onBlur={(newPackPolicyID) => setPackPolicyID(newPackPolicyID)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
              onChange={handlePackPolicyIDChange}
              style={{ width: "100%", height: "200px" }}
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

export default AddPackages;
