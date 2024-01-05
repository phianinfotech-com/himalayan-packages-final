  import React, { useState, useRef } from "react";
  import axios from "axios";
  import Swal from "sweetalert2";
  import { useEffect } from "react";
  import JoditEditor from "jodit-react";
  import { HiPlusCircle, HiExclamationCircle } from "react-icons/hi";

  import AOS from "aos";
  import "aos/dist/aos.css"; // Import AOS CSS

  const AllDetailPackages = () => {
    const [pkgId, setPkgId] = useState(""); // for pkg
    const [grpId, setGrpId] = useState(""); // for grp
    const [pdid, setGRPId] = useState(""); // for grp
    const editor = useRef(null);
    const editor1 = useRef(null);
    const editor2 = useRef(null);
    const editor3 = useRef(null);
    const editor4 = useRef(null);
    const editor5 = useRef(null);
    const editor6 = useRef(null);
    const editor7 = useRef(null);
    const editor8 = useRef(null);
    const editor9 = useRef(null);
    const editor10 = useRef(null);

    const [Title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");
    const [pkg, setPkg] = useState([]);
    const [pgrp, setPgrp] = useState([]);
    const [Duration, setDuration] = useState("");

    const imageInputRef = useRef(null);

    

    //   `Title`, `Content`, `type`, `Date`,
    //    `Duration`, `PDID`, `day1`, `day2`, `day3`,
    //    `day4`, `day5`, `day6`, `day7`, `day8`, `day9`,
    //     `day10`

    const [pkgdetails, setPkgDetails] = useState({});
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedContent, setUpdatedContent] = useState("");
    const [updatedDuration, setUpdatedDuration] = useState("");
    const [updatedday1, setUpdatedday1] = useState("");
    const [updatedday2, setUpdatedday2] = useState("");
    const [updatedday3, setUpdatedday3] = useState("");
    const [updatedday4, setUpdatedday4] = useState("");
    const [updatedday5, setUpdatedday5] = useState("");
    const [updatedday6, setUpdatedday6] = useState("");
    const [updatedday7, setUpdatedday7] = useState("");
    const [updatedday8, setUpdatedday8] = useState("");
    const [updatedday9, setUpdatedday9] = useState("");
    const [updatedday10, setUpdatedday10] = useState("");

    useEffect(() => {
      getPkg();
      AOS.init({ duration: 1000 });
    }, []);
    const formRef = useRef(null);

    const getPkg = async () => {
      try {
        const response = await axios.get(
          "https://himalayanpackages.com/himalayan/api_fetch_packageDetail.php/"
        );
        setPkg(response.data);

        // Reset the entire form state
      setPkgDetails({
        Title: "",
        Content: "",
        Duration: "",
        day1: "",
        day2: "",
        day3: "",
        day4: "",
        day5: "",
        day6: "",
        day7: "",
        day8: "",
        day9: "",
        day10: "",
      });

      // Reset the form using the ref
      if (formRef.current) {
        formRef.current.reset();
      }
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    
    

    const getPkgGrpup = async (PID) => {
      try {
        if (!PID) {
          console.error("PID parameter is required");
          return;
        }

        const apiUrl =
          "https://himalayanpackages.com/himalayan/api-fetch-all-type-by-pid.php";

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ PID: PID }),
        });

        const jsonData = await response.json();

        // Check if the response has an error message
        if (jsonData.status === false) {
          // Handle the error, e.g., show an error message
          console.error(jsonData.message);
          return;
        }

        // Check if the response is an array before setting the state
        if (Array.isArray(jsonData)) {
          setPgrp(jsonData);
        } else {
          console.error("Invalid response format for pgrp:", jsonData);
        }
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

      const fetchDataByPDID  = async (selectedGRPId) => {
        try {
          const response = await fetch(
            `https://himalayanpackages.com/himalayan/api-fetch-single-package-details-by-id.php?PDID=${selectedGRPId}`
          );
          const jsonData = await response.json();
          setPkgDetails(jsonData);
          setUpdatedTitle(jsonData.Title);
          setUpdatedContent(jsonData.Content);
          setUpdatedDuration(jsonData.Duration);
          setUpdatedday1(jsonData.day1);
          setUpdatedday2(jsonData.day2);
          setUpdatedday3(jsonData.day3);
          setUpdatedday4(jsonData.day4);
          setUpdatedday5(jsonData.day5);
          setUpdatedday6(jsonData.day6);
          setUpdatedday7(jsonData.day7);
          setUpdatedday8(jsonData.day8);
          setUpdatedday9(jsonData.day9);
          setUpdatedday10(jsonData.day10);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };





    // const fetchDataByPDID = async (selectedGRPId) => {
    //   try {
    //     const response = await fetch(
    //       `https://himalayanpackages.com/himalayan/api-fetch-single-package-details-by-id.php`,
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ PDID: selectedGRPId }), // Update to use GRPId
    //       }
    //     );

    //     const jsonData = await response.json();

    //     // Check if the response has an error message
    //     if (jsonData.error) {
    //       // Handle the error, e.g., show an error message
    //       console.error(jsonData.error);
    //       return;
    //     }

    //     // Update your state or perform any necessary actions with the fetched data


    //      // If jsonData is an array, use the first item
    //   const firstItem = Array.isArray(jsonData) ? jsonData[0] : jsonData;


    //     // Set the state variables with the fetched data
    //     setUpdatedTitle(firstItem.Title);

    //     setUpdatedDuration(firstItem.Duration);
        
        


    //      // Ensure jsonData is an object before setting the state
    

    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };

    const handleContentChange = (value) => {
      setContent(value);
    };

    const handlepkgIdChange = (e) => {
      const selectedPkgId = e.target.value;
      setPkgId(selectedPkgId);
      // Fetch groups based on the selected package
      getPkgGrpup(selectedPkgId);


      
    setUpdatedTitle("");  // Reset the state variables
    setUpdatedContent("");
    setUpdatedDuration("");
    setUpdatedday1("");
    setUpdatedday2("");
    setUpdatedday3("");
    setUpdatedday4("");
    setUpdatedday5("");
    setUpdatedday6("");
    setUpdatedday7("");
    setUpdatedday8("");
    setUpdatedday9("");
    setUpdatedday10("");
      
    };

    const handleGRPIdChange = (e) => {
      const selectedGRPId = e.target.value;
      setGRPId(selectedGRPId); // Update the state variable
      fetchDataByPDID(selectedGRPId);
    };

    //   const handleGRPIdChange = (e) => {
    //     const selectedPkgGRPId = e.target.value;
    //     setGrpId(e.target.value);
    //     fetchDataBypdid(selectedPkgGRPId);
    //   };

   

      const handleSubmit = async (e) => {
        e.preventDefault();
    
      
        const formData = new FormData();

        
        
        formData.append("PDID", pkgdetails.PDID);
        formData.append("title", updatedTitle);
        formData.append("content", updatedContent);
        formData.append("Duration", updatedDuration);
        
        formData.append("day1", updatedday1);
        formData.append("day2", updatedday2);
        formData.append("day3", updatedday3);
        formData.append("day4", updatedday4);
        formData.append("day5", updatedday5);
        formData.append("day6", updatedday6);
        formData.append("day7", updatedday7);
        formData.append("day8", updatedday8);
        formData.append("day9", updatedday9);
        formData.append("day10", updatedday10);
       
        
        try {
          const response = await axios.post(
            `https://himalayanpackages.com/himalayan/api-package-details-update.php`,
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
              text: "Package Details updated successfully",
            });

            setUpdatedTitle("");
        setUpdatedContent("");
        setUpdatedDuration("");
        setUpdatedday1("");
        setUpdatedday2("");
        setUpdatedday3("");
        setUpdatedday4("");
        setUpdatedday5("");
        setUpdatedday6("");
        setUpdatedday7("");
        setUpdatedday8("");
        setUpdatedday9("");
        setUpdatedday10("");
       
            // navigate("/admin/all-blog"); 
          
          }
        } catch (error) {
          console.error("Error updating Package Details:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to update Package Details",
          });
        }
     
    };
    

    const uniquePgrp = pgrp.filter(
      (grpItem, index, self) =>
        index === self.findIndex((t) => t.PDID === grpItem.PDID)
    );

    return (
      <div className="bg-white">
        <section className="text-gray-600 body-font relative">
          <div className="container px-10 py-10 mx-auto">
            <div className="mx-auto">
              <form>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-2/3">
                    <div className="relative">
                      <label className="label">
                        <span className="label-text">Select Master Packages</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        id="pkgId"
                        value={pkgId}
                        onChange={handlepkgIdChange}
                      >
                        <option disabled value="">
                          Select
                        </option>
                        {pkg.map((pkgItem) => (
                          <option key={pkgItem.PID} value={pkgItem.PID}>
                            {pkgItem.PTitle}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-2 w-1/3">
                    <div className="relative">
                      <label className="label">
                        <span className="label-text">Select Group</span>
                      </label>
                      <select
                        className="select select-bordered w-full"
                        id="grpId"
                        value={grpId}
                        onChange={handleGRPIdChange}
                      >
                        <option disabled value="">
                          Select
                        </option>
                        {/* Dynamically populate options based on pgrp state */}
                        {/* // Then use uniquePgrp to map options */}
                        {uniquePgrp.map((grpItem) => (
                          <option key={grpItem.PDID} value={grpItem.PDID}>
                            {grpItem.type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="label">
                        <span className="label-text">Package Title </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Package Title"
                        className="input input-bordered w-full max-w-xl"
                        id="pkgtitle"
                        value={updatedTitle}
                        name="Title"  // Ensure this matches the expected key in PHP

                        onChange={(e) => setUpdatedTitle(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="label">
                        <span className="label-text">Duration </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Duration"
                        className="input input-bordered w-full max-w-xl"
                        id="pkgduration"
                        name="Duration" 
                        value={updatedDuration}
                        onChange={(e) => setUpdatedDuration(e.target.value)}
                        //     const [updatedDuration, setUpdatedDuration] = useState("");
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Content
                      </label>
                      <JoditEditor
                       name="Content" 
                      value={updatedContent}
                      onChange={(newContent) => setUpdatedContent(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day1"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day1

                      </label>
                      <JoditEditor
                      name="day1"
                        value={updatedday1}
                        onChange={(newContent) => setUpdatedday1(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day2"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day2
                      </label>
                      <JoditEditor
               
                           name="day2"
                        value={updatedday2}
                        onChange={(newContent) => setUpdatedday2(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day3"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day3
                      </label>
                      <JoditEditor
                     name="day3"
                        value={updatedday3}
                        onChange={(newContent) => setUpdatedday3(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day4"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day4
                      </label>
                      <JoditEditor
                          nam="day4"
                          value={updatedday4}
                          onChange={(newContent) => setUpdatedday4(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day5"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day5
                      </label>
                      <JoditEditor
                        
                        value={updatedday5}
                        onChange={(newContent) => setUpdatedday5(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day6"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day6
                      </label>
                      <JoditEditor
                          
                          value={updatedday6}
                          onChange={(newContent) => setUpdatedday6(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day7"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day7
                      </label>
                      <JoditEditor
                          
                          value={updatedday7}
                          onChange={(newContent) => setUpdatedday7(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day8"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day8
                      </label>
                      <JoditEditor
                          
                          value={updatedday8}
                          onChange={(newContent) => setUpdatedday8(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day9"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day9
                      </label>
                      <JoditEditor
                         
                         value={updatedday9}
                         onChange={(newContent) => setUpdatedday9(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="Day10"
                        className="leading-7 text-sm text-gray-600"
                      >
                        Day 10
                      </label>
                      <JoditEditor
                           
                           value={updatedday10}
                           onChange={(newContent) => setUpdatedday10(newContent)}
                      />
                    </div>
                  </div>

                  <div className="p-2 w-full">
                    <div className="flex">
                      <button
                        type="submit"
                        className="btn btn-outline btn-primary m-2"
                        onClick={handleSubmit}
                      >
                        <HiPlusCircle className="h-6 w-6" />
                        Publish
                      </button>

                      <button
                        className="btn btn-outline btn-secondary m-2"
                        type="reset"
                      >
                        <HiExclamationCircle className="h-6 w-6" />
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

  export default AllDetailPackages;
