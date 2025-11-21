import React from "react";

const PastEventCard = ({ pastEvent }) => {
  return (
    <div className="grid grid-cols-1  gap-8 mt-12">
      <div className="group shadow-xl rounded-xl bg-white transition-all duration-300 overflow-hidden h-full hover:shadow-2xl relative ">
        {/* SOLD OUT BADGE – only shows if soldOut is true */}
        {pastEvent.soldOut && (
          <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-3xl shadow-md z-20 uppercase">
            Sold Out
          </span>
        )}

        {/* MAIN CONTENT */}
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src={pastEvent.image}
              alt={pastEvent.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* TEXT CONTENT */}
          <div className="p-6 transition-transform duration-300 group-hover:scale-105">
            <h2 className="font-bold text-xl mb-4">{pastEvent.place}</h2>

            <div className="ml-6 text-gray-600">
              <p className="text-gray-400 font-light mb-4">{pastEvent.venue}</p>
              <p className="mb-4">{pastEvent.place}</p>
              {/* Dynamic date */}
              <span>{pastEvent.date.day} </span>
              {pastEvent.date.month} <span>{pastEvent.date.year}</span>
              {/* <p className="mb-2">{pastEvent.date}</p> */}
            </div>
          </div>
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)",
            }}
          ></div>
        </div>

        {/* full hover image overlay */}
        <img
          src={pastEvent.image}
          alt=""
          className=" absolute inset-0 w-full h-full object-cover object-top 
            opacity-0 group-hover:opacity-100 
            scale-110 group-hover:scale-100 
            transition-all duration-500 
            z-20"
        />
      </div>
    </div>
  );
};

export default PastEventCard;
