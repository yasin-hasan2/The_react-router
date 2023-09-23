// import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div>
      <span className="text-3xl"> My Website</span>
      <nav className="text-lg flex text-blue-500 underline justify-center space-x-4 ">
        <Link to="/">Home</Link>
        <NavLink to="/users">Users</NavLink>

        <NavLink to="/about">about</NavLink>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
};

export default Header;
