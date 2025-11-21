import React from "react";
import { HiOutlineHome, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="w-full bg-white py-12 px-6 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-[#002244] mb-10">Get in Touch</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* FORM SECTION */}
        <form className="lg:col-span-2 space-y-6">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border border-gray-300 rounded-md p-4 text-gray-700 outline-none"
          />

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full border border-gray-300 rounded-md p-4 text-gray-700 outline-none"
            />
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md p-4 text-gray-700 outline-none"
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Enter Message"
            rows="8"
            className="w-full border border-gray-300 rounded-md p-4 text-gray-700 outline-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="px-10 py-4 border border-red-500 text-red-600 text-xl font-semibold hover:bg-red-600 hover:text-white transition"
          >
            Send Message
          </button>
        </form>

        {/* CONTACT INFO SECTION */}
        <div className="space-y-10">
          {/* Address */}
          <div className="flex items-start gap-4">
            <HiOutlineHome className="text-3xl text-gray-600" />
            <p className="text-gray-700 leading-6">
              <span className="font-semibold">5 Gbadebo ibikunle street,</span>
              <br />
              xtadok estate, ajah, Lagos
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <HiOutlinePhone className="text-3xl text-gray-600" />
            <p className="text-gray-700 leading-6">
              <span className="font-semibold">+234-808-690-0421</span>
              <br />
              Mon to Fri 9am to 6pm
            </p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <HiOutlineMail className="text-3xl text-gray-600" />
            <p className="text-gray-700 leading-6">
              <span className="font-semibold">aqoreenmusicent@gmail.com</span>
              <br />
              Send us your query anytime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
