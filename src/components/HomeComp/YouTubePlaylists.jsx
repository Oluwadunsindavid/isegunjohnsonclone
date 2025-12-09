// NO API
// import React from "react";

// const YouTubePlaylists = () => {
//   fetch(
//     "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYhVqZUC8W3w3yZdeC0EVkw&maxResults=2&order=date&key=AIzaSyCPM8US-bRWgCco8TZ6hqXMi7Hp66qz4Do"
//   )
//     .then((result) => result.json())
//     .then((data) => {
//       console.log(data);
//       let videos = data.items;
//       let videoContainer = document.querySelector(".youtube-container");

//       for (let video of videos) {
//         videoContainer.innerHTML += `
//         <img src="${video.snippet.thumbnails.high.url}">
//               <h3>${video.snippet.title}</h3>

//       `;
//       }
//     });

//   return (
//     <div className="mt-20 px-4 md:px-10 lg:px-20 xl:px-28 mb-32">
//       {/* Header */}
//       <div className="mb-10 text-center">
//         <h1 className="text-3xl md:text-4xl font-bold">
//           YouTube <span className="text-black">Playlists</span>
//         </h1>
//         <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
//       </div>

//       {/* Playlists */}
//       <div className="youtube-container flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
//         {/* Video 1 */}
//         <div className="w-full flex justify-center">
//           <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/32mq4C3M134?si=ThiL4DiM5kCq5_Vz"
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         {/* Video 2 */}
//         <div className="w-full flex justify-center">
//           <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
//             <div className="aspect-video">
//               <iframe
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/LI30WI7HIyc?si=du2SBct0GZQ34V-V"
//                 title="YouTube video player"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YouTubePlaylists;

// API
import React, { useEffect, useState } from "react";

const YouTubePlaylists = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCYhVqZUC8W3w3yZdeC0EVkw&maxResults=10&order=date&type=video&key=AIzaSyCPM8US-bRWgCco8TZ6hqXMi7Hp66qz4Do"
        );

        if (!res.ok) {
          throw new Error(`HTTP error!!! status: ${res.status}`);
        }

        const data = await res.json();
        setVideos(data.items || []);
      } catch (err) {
        console.error("Error fetching YouTube videos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="mt-20 px-4 md:px-10 lg:px-20 xl:px-28 mb-32">
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          YouTube <span className="text-black">Playlists</span>
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
      </div>

      {loading && (
        <p className="text-center text-gray-500">Loading videos...</p>
      )}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {!loading && !error && videos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map(
            (video) =>
              video.id.videoId && (
                <div
                  key={video.id.videoId}
                  className="w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg flex flex-col"
                >
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      title={video.snippet.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h3 className="text-lg font-semibold mt-2 px-4 text-center line-clamp-2">
                    {video.snippet.title}
                  </h3>
                </div>
              )
          )}
        </div>
      )}

      {!loading && !error && videos.length === 0 && (
        <p className="text-center text-gray-500">No videos available.</p>
      )}
    </div>
  );
};

export default YouTubePlaylists;
