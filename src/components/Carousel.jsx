import React, { useEffect, useState } from "react";

const pics = [
  "/carousel/pic1.jpg",
  "/carousel/pic2.jpg",
  "/carousel/pic3.jpg",
  "/carousel/pic4.jpg",
];
export const Carousel = () => {
  const [currentPic, setCurrentPic] = useState(0);

  const nextSlide = () => {
    setCurrentPic((prev) => (prev === pics.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentPic((prev) => (prev === 0 ? pics.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentPic]);

  return (
    <div className="max-w-350 h-150 w-full m-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentPic * 100}%)` }}
      >
        {pics.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>
      {/* <button
        className="absolute left-5 top-1/2 bg-blue-500 text-white px-3 py-2 rounded-md"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-5 top-1/2 bg-blue-500 text-white px-3 py-2 rounded-md"
        onClick={nextSlide}
      >
        Next
      </button> */}
    </div>
  );
};
