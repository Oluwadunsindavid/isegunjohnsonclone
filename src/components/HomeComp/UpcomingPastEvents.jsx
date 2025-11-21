import React from "react";
import event1 from "../../assets/event1.webp";
import event2 from "../../assets/event2.webp";
import event3 from "../../assets/event3.webp";
import event4 from "../../assets/event4.webp";
import event5 from "../../assets/event5.webp";
import event6 from "../../assets/event6.webp";
import washington from "../../assets/washington.webp";
import LA from "../../assets/los-angeles.webp";
import EventCard from "./EventCard";
import PastEventCard from "./PastEventCard";

const events = [
  {
    title: "BEDFORD",
    subtitle: "Segun Johnson Live In BEDFORD",
    image: event1,
    location: "Dudu Bar, 49, Bromham Road, Bedford MK40 2AH, UK",
    time: "12:00 AM",
    tag: "EARLY BIRD",
    price: 20,
    buttonText: "Sold Out",
    soldOut: true,
    date: { day: "26", month: "May" },
  },
  {
    title: "BEDFORD",
    subtitle: "Segun Johnson Live In BEDFORD",
    image: event2,
    location: "Dudu Bar, 49, Bromham Road, Bedford MK40 2AH, UK",
    time: "12:00 AM",
    tag: "EARLY BIRD",
    price: 30,
    buttonText: "Sold Out",
    soldOut: true,
    date: { day: "26", month: "May" },
  },
  {
    title: "BEDFORD",
    subtitle: "Segun Johnson Live In BEDFORD",
    image: event3,
    location: "Dudu Bar, 49, Bromham Road, Bedford MK40 2AH, UK",
    time: "12:00 AM",
    tag: "EARLY BIRD",
    price: 250,
    buttonText: "Sold Out",
    soldOut: true,
    date: { day: "26", month: "May" },
  },
  {
    title: "BEDFORD",
    subtitle: "Segun Johnson Live In BEDFORD",
    image: event4,
    location: "Mango Night Club, 42a Bristol Street, B5 7AA, UK",
    time: "12:00 AM",
    tag: "EARLY BIRD",
    price: 20,
    buttonText: "Sold Out",
    soldOut: true,
    date: { day: "02", month: "June" },
  },
  {
    title: "BEDFORD",
    subtitle: "Segun Johnson Live In BEDFORD",
    image: event5,
    location: "Mango Night Club, 42a Bristol Street, B5 7AA, UK",
    time: "12:00 AM",
    tag: "EARLY BIRD",
    price: 30,
    buttonText: "Sold Out",
    soldOut: true,
    date: { day: "02", month: "June" },
  },
  {
    title: "BEDFORD",
    subtitle: "Segun Johnson Live In BEDFORD",
    image: event6,
    location: "Mango Night Club, 42a Bristol Street, B5 7AA, UK",
    time: "12:00 AM",
    tag: "EARLY BIRD",
    price: 250,
    buttonText: "Sold Out",
    soldOut: true,
    date: { day: "02", month: "June" },
  },
];

const pastEvents = [
  {
    image: washington,
    place: "Washington DC Concert",
    venue: "EKKON Conference Centre",
    date: { day: "13", month: "July", year: "2023" },
    soldOut: true,
  },
  {
    image: LA,
    place: "Los Angeles Showcase",
    venue: "Staples Centre",
    date: { day: "20", month: "May", year: "2023" },
    soldOut: true,
  },
];

const UpcomingPastEvents = ({
  padding = "py-24 px-6 md:px-10 lg:px-16 xl:px-28",
}) => {
  return (
    // passed in padding as props so that the component will be reuseable in the event page, but with a different padding
    <div className={padding}>
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Upcoming & Past Events
        </h1>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3"></div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {events.map((event, index) => (
          <EventCard event={event} key={index} />
        ))}
      </div>

      {/* PastEvent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {pastEvents.map((pastEvent, index) => (
          <PastEventCard pastEvent={pastEvent} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingPastEvents;
