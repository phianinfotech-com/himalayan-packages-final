import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import slugify from 'slugify';

const AddExplore = () => {
  const [formData, setFormData] = useState({
    CID: '',
    slug: '',
    Eimg: null,
    EName: '',
    EAlt: '',
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://himalayanpackages.com/himalayan/api_fetch_place_category.php');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form fields
    if (!formData.CID || !formData.EName || !formData.slug || !formData.Eimg || !formData.EAlt) {
      Swal.fire('Error', 'Please fill in all the fields.', 'error');
      return;
    }
  
    const formDataObj = new FormData();
    formDataObj.append('CID', formData.CID);
    formDataObj.append('slug', formData.slug);
    formDataObj.append('Eimg', formData.Eimg);
    formDataObj.append('EName', formData.EName);
    formDataObj.append('EAlt', formData.EAlt);
  
    try {
      const response = await fetch('https://himalayanpackages.com/himalayan/addexplore.php', {
        method: 'POST',
        body: formDataObj,
      });
  
      if (response.ok) {
        const data = await response.json();
        Swal.fire('Success', 'Form submitted successfully!', 'success');
        console.log(data);
  
        // Clear form fields after successful submission except Explore Image
        setFormData({
          CID: '',
          slug: '',
          Eimg: null,
          EName: '',
          EAlt: '',
        });
      } else {
        console.error('API error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      Swal.fire('Error', 'Something went wrong. Please try again later.', 'error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, Eimg: imageFile }));
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const slug = slugify(title, { lower: true, strict: true });
    console.log(slug);
    setFormData((prevData) => ({ ...prevData, EName: title, slug }));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md p-6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CID">
          Category
        </label>
        <select
          name="CID"
          value={formData.CID}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value={0}>Select a category</option>
          {categories.map((category) => (
            <option key={category.CID} value={category.CID}>
              {category.CName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EName">
          Explore Name
        </label>
        <input
          type="text"
          name="EName"
          value={formData.EName}
          onChange={handleTitleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
          Slug
        </label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Eimg">
        Explore Image
      </label>
      <div className="mb-4">
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            name="Eimg"
            accept=".webp,.jpg,.jpeg,.png,.avif"
            onChange={handleImageChange}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EAlt">
          Explore Alt
        </label>
        <input
          type="text"
          name="EAlt"
          value={formData.EAlt}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddExplore;