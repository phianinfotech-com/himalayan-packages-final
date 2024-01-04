import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Fetch() {
  const [enqPosts, setEnqPosts] = useState([]);
  const [enqIdToDelete, setEnqIdToDelete] = useState(null);

  // Function to fetch blog posts from the API using Axios
  useEffect(() => {
    axios
      .get("https://himalayanpackages.com/himalayan/api-fetch-all-enq.php")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setEnqPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);
  console.log("Current state of enqPosts:", enqPosts);

// Function to handle update action
const handleUpdate = (enqId) => {
  // Find the entry with the given ID
  const updatedEntry = enqPosts.find((enq) => enq.EID === enqId);

  // Toggle the value of check_true
  updatedEntry.check_true = updatedEntry.check_true === '1' ? '0' : '1';

  // Update the state to reflect the change in check_true
  setEnqPosts((prevEnqPosts) =>
    prevEnqPosts.map((enq) => (enq.EID === enqId ? updatedEntry : enq))
  );

  // Send a request to update the value in the database
  axios
    .put(`https://himalayanpackages.com/himalayan/api-update-enq.php?id=${enqId}`, {
      check_true: updatedEntry.check_true,
    })
    .then((response) => {
      // Handle success, you may choose to do something here
      console.log("Entry updated successfully");
    })
    .catch((error) => {
      // Handle error
      console.error("Error updating entry:", error);
    });
};








 // Function to handle delete action
const handleDelete = (enqId) => {

  
    // Set the ID to be deleted and proceed with the deletion
    setEnqIdToDelete(enqId);
    console.log(enqId);
 
};

// Function to confirm the delete action
const confirmDelete = () => {
  // Check if enqIdToDelete is not null before proceeding with the deletion
  if (enqIdToDelete !== null) {
    // Implement the logic to delete the entry with the given ID
    // You may use axios.delete or another suitable method
    axios
      .delete(`https://himalayanpackages.com/himalayan/api-enquiry-delete.php?id=${enqIdToDelete}`)
      .then((response) => {
        // Handle success, update the UI or reload data
        console.log("Entry deleted successfully");
        // Update the state to remove the deleted entry
        setEnqPosts(prevenqPosts => prevenqPosts.filter(enq => enq.EID !== enqIdToDelete));
        // Close the confirmation pop-up
        setEnqIdToDelete(null);
      })
      .catch((error) => {
        console.error("Error deleting entry:", error);
        // Close the confirmation pop-up
        setEnqIdToDelete(null);
      });
  }
};


  // Function to cancel the delete action
  const cancelDelete = () => {
    // Close the confirmation pop-up
    setEnqIdToDelete(null);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table table-zebra">
          {/* head */}
          <thead className="font-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Mob</th>
              <th>Date</th>
              <th>People</th>
              <th>Msg</th>
              <th>Email</th>
              <th>URL</th>
              <th>Check</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-light">
            {enqPosts.map((enq) => (
              <tr key={enq.EID}>
                <th>{enq.EID}</th>
                <th>{enq.E_Name}</th>
                <th>{enq.Mobile_No}</th>
                <th>{moment(enq.Date).format("DD - MMM - YY")}</th>
                <th>{enq.People}</th>
                <th>{enq.E_msg}</th>
                <th>{enq.Email}</th>
                <th className="link link-primary">{enq.Slug}</th>
                <th>
                <input
  type="checkbox"
  className="toggle toggle-success"
  checked={enq.check_true === '1'}
  onChange={() => handleUpdate(enq.EID)}
/>

                </th>
                <th>
                  <button className="btn btn-outline btn-error btn-xs" onClick={() => handleDelete(enq.EID)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Confirmation pop-up */}
      {enqIdToDelete !== null && (
        <div className="confirmation-popup">
          <p>Are you sure you want to delete this entry?</p>
          <button className="btn btn-outline btn-success" onClick={confirmDelete}>Yes</button>
          <button className="btn btn-outline btn-error" onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}
