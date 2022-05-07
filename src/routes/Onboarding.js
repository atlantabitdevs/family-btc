import React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div>
      <h1>Onboarding Page</h1>
      <ul>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="account/BitDevs/Steven">Bitdevs/Steven</Link>
        </li>
        <li>
          <Link to="account/BitDevs/Alex">Bitdevs/Alex</Link>
        </li>
      </ul>
    </div>
  );
};

export default Onboarding;
