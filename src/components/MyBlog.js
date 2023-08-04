import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

export default function MyMyBlog() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    placeholder: "Start typings...",
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-10 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add MyBlog
            </h1>
           
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="label">
                    <span className="label-text">What is your MyBlog Title?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xl"
                  />
                </div>
              </div>

                 
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="label">
                    <span className="label-text">Select Banner Image</span>
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered file-input-primary w-full max-w-xl"
                  />
                </div>
              </div>

              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="label">
                    <span className="label-text">Select Category</span>
                  </label>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled="" defaultValue="">
                      Select
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="label">
                    <span className="label-text">Alt Tag </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xl"
                  />
                </div>
              </div>

            

           
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>

                  <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
                    onChange={(newContent) => {}}
                  />

                  <textarea
                    id="message"
                    hidden
                    name="message"
                    value={content}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="flex ">
                  <button className="btn btn-outline btn-primary m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="2"
                        d="M12 11V14M12 14V17M12 14H15M12 14H9M6 7H18M8 5H16M6 9H18C19.1046 9 20 9.89543 20 11V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V11C4 9.89543 4.89543 9 6 9Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Publish
                  </button>

                  <button className="btn btn-outline btn-secondary m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        d="M 6 1 L 6 4 L 7 4 L 7 2 L 9 2 L 9 1 L 6 1 z M 11 1 L 11 2 L 14 2 L 14 1 L 11 1 z M 16 1 L 16 2 L 18 2 L 18 4 L 19 4 L 19 1 L 16 1 z M 1 6 L 1 19 L 14 19 L 14 6 L 1 6 z M 18 6 L 18 9 L 19 9 L 19 6 L 18 6 z M 2 7 L 13 7 L 13 18 L 2 18 L 2 7 z M 4.8789062 9.171875 L 4.171875 9.8789062 L 6.7929688 12.5 L 4.171875 15.121094 L 4.8789062 15.828125 L 7.5 13.207031 L 10.121094 15.828125 L 10.828125 15.121094 L 8.2070312 12.5 L 10.828125 9.8789062 L 10.121094 9.171875 L 7.5 11.792969 L 4.8789062 9.171875 z M 18 11 L 18 13 L 16 13 L 16 14 L 19 14 L 19 11 L 18 11 z "
                        strokeWidth="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className='w-[900px] mx-auto  h-auto '>
        <JoditEditor
			ref={editor}
			value={content}
            config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content htmlFor perhtmlFormance reasons
			onChange={newContent => {}}
		/>
        </div>
        {content} */}
    </div>
  );
}
