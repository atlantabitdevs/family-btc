import React from "react";
import { Link } from "react-router-dom";
import {BitcoinIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import {BeakerIcon} from '@heroicons/react/solid';

const Onboarding = () => {
  return (
    <div>
      <h1>Onboarding Page</h1>
      
      <BitcoinIcon className="w-20 h-20 text-black" />
      <BeakerIcon className="w-20 h-20 text-black" />
      
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
