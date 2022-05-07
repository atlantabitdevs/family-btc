import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="default-bg"></div>
      <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center">
        <h1 className="text-2xl">Welcome, Jerry</h1>
        
        <div className="rounded-md bg-fam-bg-dark p-8">
          <h2>Balance</h2>
          <p>1000 <span>sats</span></p>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
