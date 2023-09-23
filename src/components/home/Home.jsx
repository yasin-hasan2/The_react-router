// import React from 'react';

import { Outlet, useNavigation, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
// import User from "../users/user";
// import Users from "../users/Users";

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl text-center">this is home section </h1>
      <div>
        <Header></Header>
        {navigation.state === "loading" ? (
          <p>Loding....!</p>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
        {/* <User></User> */}
      </div>
    </div>
  );
};

export default Home;
