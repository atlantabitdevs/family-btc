import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from '../components/Button';
import { PlusIcon } from '@heroicons/react/solid';
import { ReceiveIcon, ScanIcon, SendIcon } from '@bitcoin-design/bitcoin-icons-react/filled';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="default-bg"></div>
      <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
        <h1 className="text-2xl">Welcome, Jerry</h1>

        <div className="tile">
          <h2 className="mb-4">Your Balance</h2>
          <p className="text-4xl">1000 <span>sats</span></p>
        </div>

        <div className="tile">
          <h2>Members</h2>

          <p className="text-lg">Your tribe has no members. Add&nbsp;one! </p>

          <Link to="/invite">
            <Button><PlusIcon className="w-8 h-8" /> <span>Add Member</span></Button>
          </Link>
        </div>


        <div className="flex flex-row space-x-2 mt-8">
          <Link to="/" className="basis-1/3">
            <Button size="large" direction="vertical"><SendIcon className="w-8 h-8" /> <span>Send</span></Button>
          </Link>
          <Link to="/" className="basis-1/3">
            <Button size="large" direction="vertical"><ScanIcon className="w-8 h-8" /> <span>Scan</span></Button>
          </Link>
          <Link to="/receive" className="basis-1/3">
            <Button size="large" direction="vertical">
              <ReceiveIcon className="w-8 h-8" /> <span>Receive</span>
            </Button>
          </Link>
        </div>

      </div>
      <Outlet />
    </div>
  );
};

export default Home;
