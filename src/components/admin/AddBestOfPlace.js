import React, { useState, useEffect } from "react";

import Swal from "sweetalert2";
import axios from "axios";


const AddBestOfPlace = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [category, setCategory] = useState([]);
  const [best_of, setBest_of] = useState([]);
  const [packages, setPackages] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [best_ofId, setBest_ofId] = useState("");
  const [packageId, setPackageId] = useState(""); // Initialize as an empty string
  const [error, setError] = useState("");

  useEffect(() => {
    getcategory();
    getbest_of();
    getpackages();
  }, []);

  function getcategory() {
    axios
      .get("https://himalayanpackages.com/himalayan/api_fetch_category.php/")
      .then(function (response) {
        setCategory(response.data);
      });
  }

  function getbest_of() {
    axios
      .get("https://himalayanpackages.com/himalayan/api-fetch_bestof.php/")
      .then(function (response) {
        setBest_of(response.data);
      });
  }

  function getpackages() {
    axios
      .get("https://himalayanpackages.com/himalayan/api-fetch-package.php/")
      .then(function (response) {
        setPackages(response.data);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!best_ofId || (!isChecked && !categoryId) || (isChecked && !packageId)) {
      setError("Please fill in all required fields.");
      return;
    }

    setError(""); // Clear any previous error message

    const formData = new FormData();
    formData.append("best_of_id", best_ofId);
    formData.append("package_id", packageId);
    formData.append("categoryId", categoryId);

 

    axios
    .post("https://himalayanpackages.com/himalayan/api-add-best-of-place.php", formData)
    .then((response) => {
      console.log(response.data);

      // Show SweetAlert on successful submission
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Form submitted successfully.",
      });

      // Reset the form after successful submission
      setBest_ofId("");
      setPackageId("");
      setCategoryId("");
      setIsChecked(false);
    })
    .catch((error) => {
      console.error("Error while saving data:", error);
    });    
    
    
    // axios
    //   .post("https://himalayanpackages.com/himalayan/api-add-best-of-place.php", formData)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error while saving data:", error);
    //   });
  };

  const handleBest_OfChange = (e) => {
    setBest_ofId(e.target.value);
  };

  const handlePackagesChange = (e) => {
    console.log("Selected package:", e.target.value);
    setPackageId(e.target.value); // Make sure this is updating the state
  };

  const handleCategoryIdChange = (e) => {
    setCategoryId(e.target.value);
  };

 

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    // Reset both selection boxes when the toggle is switched
    setBest_ofId("");
    setCategoryId("");
    setPackageId("");
    setError("");
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <form className="border rounded-lg shadow-lg p-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">
              Add Best Of Place / Best Packages
            </h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                Category
              </label>

              <select
                className="select select-bordered w-full max-w-xs"
                id="best_ofId"
                value={best_ofId}
                onChange={handleBest_OfChange}
                required // Set as required
              >
                <option disabled value="">
                  Select Place
                </option>

                {best_of.map((bestOf) => (
                  <option key={bestOf.Best_id} value={bestOf.Best_id}>
                    {bestOf.BName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <div className="form-control w-[70%]">
                <label className="cursor-pointer label">
                  <span className="label-text">
                    Best Of Place / Best Packages
                  </span>
                  <input
                    type="checkbox"
                    className={` ${
                      isChecked
                        ? "toggle toggle-primary"
                        : "toggle toggle-secondary"
                    }`}
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-700 font-bold mb-2"
              >
                {isChecked ? "Best Of" : "Location"}
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                id="categoryId"
                value={isChecked ? packageId : categoryId}
                onChange={
                  isChecked ? handlePackagesChange : handleCategoryIdChange
                }
                required // Set as required
              >
                <option disabled value="">
                  {isChecked ? "Select Package" : "Area"}
                </option>
                {isChecked
                  ? packages.map((mypkg) => (
                      <option key={mypkg.PID} value={mypkg.PID}>
                        {mypkg.PTitle}
                      </option>
                    ))
                  : category.map((category) => (
                      <option key={category.CID} value={category.CID}>
                        {category.CName}
                      </option>
                    ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8"></div>
    </>
  );
};

export default AddBestOfPlace;
