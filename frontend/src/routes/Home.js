import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from '../components/Button';
import {PlusIcon} from '@heroicons/react/solid';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="default-bg"></div>
      <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
        <h1 className="text-2xl">Welcome, Jerry</h1>
        
        <div className="rounded-lg bg-fam-bg-dark p-8 drop-shadow-lg my-4 border border-fam-teal border-solid">
          <h2 className="mb-4">Your Balance</h2>
          <p className="text-4xl">1000 <span>sats</span></p>
        </div>

        <div className="rounded-lg bg-fam-bg-dark p-8 drop-shadow-lg my-4 border border-fam-teal border-solid space-y-4 flex flex-col">
          <h2>Members</h2>
          
          <p className="text-lg">Your tribe has no members. Add&nbsp;one! </p>
          
          <Link to="/">
            <Button><PlusIcon className="w-8 h-8" /> <span>Add Member</span></Button>
          </Link>
        </div>
        
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
