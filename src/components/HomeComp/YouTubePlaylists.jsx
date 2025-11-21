import React from "react";

const YouTubePlaylists = () => {
  return (
    <div className="mt-20 px-4 md:px-10 lg:px-20 xl:px-28 mb-32">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          YouTube <span className="text-black">Playlists</span>
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
      </div>

      {/* Playlists */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
        {/* Video 1 */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/32mq4C3M134?si=ThiL4DiM5kCq5_Vz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Video 2 */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/LI30WI7HIyc?si=du2SBct0GZQ34V-V"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubePlaylists;
