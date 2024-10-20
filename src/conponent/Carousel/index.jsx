import React, { useRef } from "react";

const Carousel = ({ data }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300, // Sesuaikan dengan ukuran card
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300, // Sesuaikan dengan ukuran card
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Tombol Kiri */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 z-10 h-full p-2 bg-gray-800 text-white opacity-75 hover:opacity-100"
      >
        &#60;
      </button>

      {/* Wrapper Carousel */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth snap-x space-x-4 py-4 px-8"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Card Carousel */}
        {data.map((item, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-60 h-80 bg-gray-300 rounded-lg shadow-md"
          >
            <div className="p-4 text-center">
              <h2 className="text-xl font-bold">Card</h2>
              <p>Some description here</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Kanan */}
      <button
        onClick={scrollRight}
        className="absolute right-0 z-10 h-full p-2 bg-gray-800 text-white opacity-75 hover:opacity-100"
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
