import React from "react";

const Map = () => {
  return (
    <div className="w-full h-80 md:h-96 lg:h-[500px] px-6 md:px-10 lg:px-16 xl:px-28 my-10 pb-16">
      <h2 className="text-3xl text-center font-bold text-[#002244] mb-10">Find Us</h2>
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Ajah Lagos Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.5146762178975!2d3.573152675467513!3d6.454861995319351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf87b42e46d5f%3A0x8b9356b3d80c4f!2s5%20Gbadebo%20Ibikunle%20Street%2C%20Xtadok%20Estate%2C%20Ajah%2C%20Lagos!5e0!3m2!1sen!2sus!4v1700563456789!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
