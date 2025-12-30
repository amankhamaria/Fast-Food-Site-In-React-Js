import React, { useState } from "react";
import OurSpecialsCard from "./OurSpecialsCard";

const OurSpecials = ({specials, title="Our Specials"}) => {

  console.log(Math.floor(Math.random()*2 + 1))

  

  return <div>
  <div>{title}</div>
  <div className="grid grid-cols-1 gap-2 md:grid-cols-4">

  {specials.map((special, index) => <OurSpecialsCard key={index} special={special}/>)}
 
  </div>
  </div>
};

export default OurSpecials;