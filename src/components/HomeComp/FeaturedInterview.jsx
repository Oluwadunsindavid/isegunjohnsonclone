import React from "react";

const FeaturedInterview = () => {
  return (
    <div className="mt-20">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-black">Featured Interview</span>
        </h1>
        <div className="w-28 h-1 bg-orange-500 mx-auto mt-4"></div>
      </div>
      <div className="px-24 w-full flex items-center justify-center py-20 md:py-0">
        <div className="w-full max-w-4xl h-[350px] md:h-[450px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg relative">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/mEohif2dpoQ?si=vuzOiQ9dy87lzotD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInterview;
