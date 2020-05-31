import React from "react";

const IMAGE_SLIDER_WP_SIZES = {
  slide1920: "1920w",
  slide1280: "1280w",
  slide768: "768w",
};
const IMAGE_SLIDER_SIZES = {
  "(max-width: 1920px)": "1920px",
  "(max-width: 1280px)": "1280px",
  "(max-width: 768px)": "768px",
};

const IMAGE_STD_WP_SIZES = {
  large: "1024w",
  medium_large: "768w",
  medium: "300w",
};
const IMAGE_STD_SIZES = {
  "(max-width: 1920px)": "1024px",
  "(max-width: 1024px)": "768px",
  "(max-width: 800px)": "300px",
};
export {
  IMAGE_SLIDER_WP_SIZES,
  IMAGE_SLIDER_SIZES,
  IMAGE_STD_WP_SIZES,
  IMAGE_STD_SIZES,
};

const getImageSrcSet = (image, wpSizes, imgSize) => {
  let i = 0;
  let len = Object.keys(wpSizes).length;
  let srcSetString = "";
  for (const key in wpSizes) {
    if (wpSizes.hasOwnProperty(key)) {
      const size = wpSizes[key];
      const attachmentSrc = image.sizes[key];
      if (attachmentSrc) {
        srcSetString += attachmentSrc + " " + size;
        if (i != len - 1) {
          srcSetString += ",";
        }
        i++;
      }
    }
  }
  return srcSetString;
};

const getImageSizes = (image, wpSize, imgSizes) => {
  let i = 0;
  let len = Object.keys(imgSizes).length;
  let sizesString = "";
  for (const key in imgSizes) {
    if (imgSizes.hasOwnProperty(key)) {
      sizesString += imgSizes[key] + " " + key;
      if (i != len - 1) {
        //Last iteration
        sizesString += ", ";
      }
    }
    i++;
  }
  return sizesString;
};

export { getImageSrcSet, getImageSizes };
