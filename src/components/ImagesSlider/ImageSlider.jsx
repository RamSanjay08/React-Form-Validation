import React, { useState } from 'react';
import images from './images';
import ImageSlidersty from "./ImageSlider.module.css"

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  let nextbtn = () => {
    setCurrentIndex([currentIndex + 1] % [images.length])
  }

  let prevbtn = () => {
    setCurrentIndex([currentIndex - 1 + images.length ] % [images.length])
  }
  console.log(currentIndex);

  return (
    <div className={ImageSlidersty.slidecont}>
      <img src={images[currentIndex]} alt="" />
      <div>
        <div className={ImageSlidersty.slidebtn}>
      <button onClick={prevbtn}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>

      <button onClick={nextbtn}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
      </div>
      </div>

    </div>
  );
}

export default ImageSlider;

