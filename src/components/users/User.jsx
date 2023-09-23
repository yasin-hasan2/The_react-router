// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const User = ({ user }) => {
  // console.log(user);
  const { id, name, email, phone } = user;

  const navigate = useNavigate();
  const handleShowDelail = () => {
    navigate(`/user/${id}`);
    // console.log("sdfsdf");
  };

  return (
    <div>
      <div className="border rounded-lg border-blue-600  text-start mb-4 p-4">
        <h2>name :{name} </h2>
        <p>email:{email} </p>
        <p>phone: {phone} </p>
        <Link to={`/user/${id}`}>show details</Link>
        <Link to={`/user/${id}`}>
          <button className="mx-3 bg-sky-600">Click me </button>
        </Link>
        <button onClick={handleShowDelail}>click to see details </button>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
