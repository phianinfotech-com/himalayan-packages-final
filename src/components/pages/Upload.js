import React, { useState } from "react";
import axios from "axios";

const PostBlogPage = () => {
  const [BName, setBName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [BAlt, setBAlt] = useState("");
  const [CID, setCID] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("BName", BName);
      formData.append("content", content);
      formData.append("image", image);
      formData.append("BAlt", BAlt);
      formData.append("CID", CID);

      const response = await axios.post(
        "http://localhost/himalayan/upload_file.php",
        formData
      );
      console.log(response.data);

      setBName("");
      setContent("");
      setImage(null);
      setBAlt("");
      setCID("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Post Blog</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="BName">Blog Name:</label>
        <input
          type="text"
          id="BName"
          value={BName}
          onChange={(e) => setBName(e.target.value)}
        />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept=".png, .jpg, .jpeg, .webp"
          onChange={(e) => {
            const selectedFile = e.target.files[0];
            // Perform additional checks if needed
            if (
              selectedFile &&
              ["image/png", "image/jpeg", "image/jpg", "image/webp"].includes(
                selectedFile.type
              )
            ) {
              setImage(selectedFile);
            } else {
              // Handle file selection error, e.g., show error message
              console.error(
                "Please select a PNG, JPG, JPEG, or WebP image file"
              );
            }
          }}
        />

        <label htmlFor="BAlt">Image Alt Text:</label>
        <input
          type="text"
          id="BAlt"
          value={BAlt}
          onChange={(e) => setBAlt(e.target.value)}
        />

        <label htmlFor="CID">Category ID:</label>
        <input
          type="text"
          id="CID"
          value={CID}
          onChange={(e) => setCID(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostBlogPage;
