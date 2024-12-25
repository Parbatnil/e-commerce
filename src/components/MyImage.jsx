import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }], name }) => {
  const [displayImg, setDisPlayImg] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center py-8 min-h-screen space-y-6 md:space-y-0">
      {/* Left Section: Display Thumbnails */}
      <div className="grid grid-cols-4 gap-4 md:flex md:flex-col md:space-y-4 justify-center py-2">
        {imgs.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index + 1}`}
            className={`h-16 w-16 sm:h-20 sm:w-20 rounded-lg cursor-pointer transition-transform hover:scale-110 border-2 ${
              displayImg === index
                ? "border-violet-500 shadow-lg"
                : "border-gray-300"
            }`}
            onClick={() => setDisPlayImg(index)}
          />
        ))}
      </div>

      {/* Right Section: Display Selected Image */}
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg max-w-full">
        {imgs.length > 0 && (
          <img
            src={imgs[displayImg].url}
            alt={imgs[displayImg].filename || "Selected Image"}
            className="w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[32rem] h-auto rounded-lg shadow-md object-cover"
          />
        )}
        <div className="mt-4 text-center">
          <p className="text-lg font-medium text-gray-800">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default MyImage;
