import React from "react";
import { Link, NavLink } from "react-router";

import logo from "../assets/logo.png"

const Navbar = () => {
  const navlinks = [
    {
      path: "/our_story",
      name: "Our Story",
    },
    {
      path: "/menus",
      name: "Menu",
    },
    {
      path: "/contact_us",
      name: "Contact Us",
    },
  ];

  return (
    <header>
      <Link to="/" className="flex justify-center py-2">
        <img
          src={logo}
          alt="Seva Sadan Restaurant"
          className="h-32 rounded-full"
        />
      </Link>
      <nav className="flex justify-center items-center gap-2 px-5">
        {navlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;