import React from "react";
import { Link } from "react-router-dom";
import {BitcoinIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import {BeakerIcon} from '@heroicons/react/solid';
import Button from '../components/Button';

const Onboarding = () => {
  return (
    <div className="p-8 space-y-8 min-h-screen flex flex-col align-center justify-center bg-mountains bg-cover">
      <div className="mb-16">
        <h1 className="text-8xl lowercase font-display drop-shadow-xl font-[900] my-8">Tribe</h1>

        <p className="text-2xl">Finances for your people</p>
      </div>
      
      
      <Button>Create a new tribe</Button>

      <Button style="free">Restore existing tribe</Button>
      
      <p className="text-center drop-shadow-md pt-32">Made with ❤️ in the ATL</p>
    </div>
  );
};

export default Onboarding;
