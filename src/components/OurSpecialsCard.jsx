import React from 'react'

const OurSpecialsCard = ({special}) => {
  return (
<div> 
    <img src={special.img} alt="not page" className="w-full h-52 object-cover"/>
    <h3>{special.name}</h3>
  </div>
  )
}

export default OurSpecialsCard