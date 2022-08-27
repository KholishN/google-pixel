import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";

import image from "../../assets/phone1.webp";
import image2 from "../../assets/phone2.webp";
import image3 from "../../assets/phone3.webp";

const slider = [image, image2, image3];
let count = 0;
export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () => {
    count = (count + 1) % slider.length;
    setCurrentImage(count);
  };

  const handlePrevious = () => {
    count = (currentImage + slider.length - 1) % slider.length;
    setCurrentImage(count);
  };

  const autoSlider = () => {
    setInterval(() => {
      handleNext();
    }, 3000);
  };

  useEffect(() => {
    autoSlider();
  }, []);
  return (
    <>
      <div className="flex justify-center pt-9">
        <div className="flex bg-blue-gray-50 w-3/4 justify-center">
          <div className=" flex w-3/4 justify-center">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={slider[currentImage]}
                alt=""
                className="w-full h-full relative select-none"
              />
            </div>

            <div className="absolute w-3/4 top-3/4 translate-y-1/2 px-4 flex justify-between items-center">
              <div className="flex  w-14 h-14 border text-center justify-center rounded-full bg-white shadow-md">
                <button
                  className="w-7 text-2xl"
                  type="submit"
                  onClick={handlePrevious}
                >
                  <AiOutlineArrowLeft />
                </button>
              </div>
              <div className="flex  w-14 h-14 border text-center justify-center rounded-full bg-white shadow-md">
                <button
                  className="w-7 text-2xl"
                  type="submit"
                  onClick={handleNext}
                >
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
