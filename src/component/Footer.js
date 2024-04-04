import React from "react";
import { Link } from "react-router-dom";
import { Github, Instagram, LinkedIn } from "../assets/icons/icons";

const Footer = () => {
  return (
    <div className="text-white w-full text-center flex flex-col justify-center items-center">
      <div className="text-xs">Made with 💚 </div>
      <div className="text-medium hover:text-red-500 duration-200 delay-200">
        Akshay Hallagade
      </div>

      <div className="flex gap-4 py-2">
        <Link to="https://www.linkedin.com/in/akshayhallagade/" target="_blank">
          <LinkedIn size={25} />
        </Link>
        <Link to="https://github.com/akshayhallagade" target="_blank">
          <Github size={25} />
        </Link>
        <Link to="https://www.instagram.com/aksh_hallagade/" target="_blank">
          <Instagram size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
