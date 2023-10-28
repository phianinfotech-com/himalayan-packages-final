// ImageGrid.js
import React from "react";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";

const ImageGrid = () => {
  return (
    <div>
      <Gallery>
        <div className="flex">
          <div className="w-1/2">
            <div className=" w-full h-20 pl-1 pt-1">
              <Item
                original="./assets/img/5.jpg"
                thumbnail="./assets/img/5.jpg"
                width="923"
                height="600"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src="./assets/img/5.jpg" />
                )}
              </Item>
            </div>
          </div>
          <div className="w-1/2">
            <div className="grid grid-cols-2">
              <div className="w-full  pt-1 pl-1 pr-1">
                <Item
                  original="./assets/img/2.jpg"
                  thumbnail="./assets/img/2.jpg"
                  width="923"
                  height="600"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="./assets/img/2.jpg" />
                  )}
                </Item>
              </div>
              <div className="w-full pt-1 pr-1">
                <Item
                  original="./assets/img/3.jpg"
                  thumbnail="./assets/img/3.jpg"
                  width="923"
                  height="600"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="./assets/img/3.jpg" />
                  )}
                </Item>
              </div>
              <div className="w-full pt-1 pl-1 pr-1">
                <Item
                  original="./assets/img/4.jpg"
                  thumbnail="./assets/img/4.jpg"
                  width="923"
                  height="600"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="./assets/img/4.jpg" />
                  )}
                </Item>
              </div>
              <div className="w-full pt-1 pr-1">
                <Item
                  original="./assets/img/1.jpg"
                  thumbnail="./assets/img/1.jpg"
                  width="923"
                  height="600"
                >
                  {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="./assets/img/1.jpg" />
                  )}
                </Item>
              </div>
            </div>
          </div>
        </div>
      </Gallery>
    </div>
  );
};

export default ImageGrid;
