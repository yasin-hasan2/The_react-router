// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";

const UsersDitails = () => {
  const user = useLoaderData();
  const { id, name, website } = user;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-slate-500">
      <h1>this is user number : {id} </h1>
      <h1>this is user details</h1>
      <h1 className="text-3xl mb-3">user name : {name} </h1>
      <p>user website : {website} </p>

      <button className="bg-yellow-700 p-3 rounded-lg" onClick={handleBack}>
        Go Back{" "}
      </button>
    </div>
  );
};

export default UsersDitails;
