import React, { useState } from "react";
import OurSpecials from "../components/OurSpecials";

const MenusPage = () => {

    const [ourMenus, setOurMenus] = useState([
      {
        img:"https://shreejirestaurant.in/assets/img/product/1.jpg",
        name:"Pizza"
      },
      {
        img:"https://shreejirestaurant.in/assets/img/product/2.jpg",
        name:"Pizza"
      },
      {
        img:"https://shreejirestaurant.in/assets/img/product/3.jpg",
        name:"Pizza"
      },
     
      {
        img:"https://shreejirestaurant.in/assets/img/product/2.jpg",
        name:"Pizza"
      },
      {
        img:"https://shreejirestaurant.in/assets/img/product/3.jpg",
        name:"Pizza"
      },
      {
        img:"https://shreejirestaurant.in/assets/img/product/1.jpg",
        name:"Pizza"
      },
      {
        img:"https://shreejirestaurant.in/assets/img/product/2.jpg",
        name:"Pizza"
      },
      {
        img:"https://shreejirestaurant.in/assets/img/product/3.jpg",
        name:"Pizza"
      },
    ])

  return    <section className="max-w-7xl container mx-auto px-5">
        <h3 className="text-xl font-semibold py-2">Our Menus</h3>
        <OurSpecials specials={ourMenus} title="Our Menus"/>
      </section>;
};

export default MenusPage;