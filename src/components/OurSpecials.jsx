import React from "react";
import OurSpecialsCard from "./OurSpecialsCard";

const OurSpecials = ({ specials = [], title = "Our Specials" }) => {
  return (
    <div className="px-4 py-6">
      
      <h2 className="text-2xl font-bold mb-6 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {specials.map((special, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-xl p-4 shadow-md
                       transform transition-all duration-300
                       hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
          >
            <OurSpecialsCard special={special} />
          </div>
        ))}
      </div>

    </div>
  );
};

export default OurSpecials;
