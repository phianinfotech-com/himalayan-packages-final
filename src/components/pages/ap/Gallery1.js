import React, { useState } from "react";
import 'photoswipe/dist/photoswipe.css'



const Gallery1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="w-full h-20 pl-1 pt-1">
          <img
            src="https://media1.thrillophilia.com/filestore/e0552q6b2t4sm2mrgspdn319p948_Artboard%202_%20copy.png?w=auto&h=600"
            alt="Full Image"
            className="w-full cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://media1.thrillophilia.com/filestore/e0552q6b2t4sm2mrgspdn319p948_Artboard%202_%20copy.png?w=auto&h=600"
              )
            }
          />
        </div>
      </div>
      <div className="w-1/2">
        <div className="grid grid-cols-2">
          <div
            className="w-full pt-1 pl-1 pr-1 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://media1.thrillophilia.com/filestore/hpmbh64575y9zgwg7zrby34fr1pp_jm62wsd4yhb7dtuka4xfzsd3gqnx_nubra8.webp?w=auto&h=600"
              )
            }
          >
            <img
              src="https://media1.thrillophilia.com/filestore/hpmbh64575y9zgwg7zrby34fr1pp_jm62wsd4yhb7dtuka4xfzsd3gqnx_nubra8.webp?w=auto&h=600"
              alt="Image 1"
              className="w-full"
            />
          </div>
          <div
            className="w-full pt-1 pr-1 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://media1.thrillophilia.com/filestore/n888ck9kjsk77hlvkdu9ux035soc_Shutterstock_2295235547.jpg?w=auto&h=600"
              )
            }
          >
            <img
              src="https://media1.thrillophilia.com/filestore/n888ck9kjsk77hlvkdu9ux035soc_Shutterstock_2295235547.jpg?w=auto&h=600"
              alt="Image 2"
              className="w-full"
            />
          </div>
          <div
            className="w-full pt-1 pl-1 pr-1 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://media1.thrillophilia.com/filestore/n888ck9kjsk77hlvkdu9ux035soc_Shutterstock_2295235547.jpg?w=auto&h=600"
              )
            }
          >
            <img
              src="https://media1.thrillophilia.com/filestore/n888ck9kjsk77hlvkdu9ux035soc_Shutterstock_2295235547.jpg?w=auto&h=600"
              alt="Image 3"
              className="w-full"
            />
          </div>
          <div
            className="w-full pt-1 pr-1 cursor-pointer"
            onClick={() =>
              handleImageClick(
                "https://media1.thrillophilia.com/filestore/g83vu04hi7dxi1ii4u8j9m6nsj45_Ladakh_1.jpg?w=auto&h=600"
              )
            }
          >
            <img
              src="https://media1.thrillophilia.com/filestore/g83vu04hi7dxi1ii4u8j9m6nsj45_Ladakh_1.jpg?w=auto&h=600"
              alt="Image 4"
              className="w-full"
            />
          </div>
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10">
          <div className="w-3/4 h-3/4 relative">
            <img
              src={selectedImage}
              alt="Full Size Image"
              className="w-full h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Gallery1;
