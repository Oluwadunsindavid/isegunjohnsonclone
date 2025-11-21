import React from "react";

const EventCard = ({ event }) => {
  return (
    <div>
      <div className="group shadow-xl rounded-xl bg-white transition-all duration-300 overflow-hidden h-full hover:shadow-2xl relative">
        {/* SOLD OUT BADGE – only shows if soldOut is true */}
        {event.soldOut && (
          <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-3xl shadow-md z-20 uppercase">
            Sold Out
          </span>
        )}

        {/* DATE BADGE – only shows if date is true */}
        {event.date && (
          <span className="absolute top-4 left-4 bg-black opacity-80 text-white font-semibold px-2 py- text-center rounded shadow-md z-20 uppercase">
            {/* Dynamic date */}
            <span className="text-xl">{event.date.day}</span> <br />
            {event.date.month}
          </span>
        )}

        <div className="relative overflow-hidden rounded-t-xl">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="p-6 transition-transform duration-300 group-hover:scale-105">
          <h2 className="font-bold text-xl mb-4">{event.title}</h2>

          <p className="text-gray-400 font-light mb-4">{event.subtitle}</p>

          <div className="ml-6 text-gray-600">
            <p className="mb-4">{event.location}</p>
            <p className="mb-2">{event.time}</p>
            <p>{event.tag}</p>
          </div>

          <hr className="my-4 text-gray-200" />

          <div className="flex justify-between items-center pb-4">
            <p className="text-2xl font-bold text-red-600">£ {event.price}</p>

            {/* <button
            type="button"
            className="font-semibold rounded-lg px-4 py-2 text-sm text-white bg-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {event.buttonText}
          </button> */}
            <button
              type="button"
              className={`font-semibold rounded-lg px-4 py-2 text-sm text-white shadow-lg transition-all duration-300 ${
                event.soldOut
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {event.soldOut ? "Sold Out" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
