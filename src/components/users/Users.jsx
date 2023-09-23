// import React from 'react';

import { useLoaderData } from "react-router-dom";
import User from "./user";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <h1> this is Users</h1>
      <h2>our users:{users.length} </h2>
      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
