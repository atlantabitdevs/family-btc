import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/family/BitDevs">Bitdevs Family</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;
