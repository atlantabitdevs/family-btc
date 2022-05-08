import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet, Link,
} from "react-router-dom";
import Account from "./routes/Account";
import Accounts from "./routes/Accounts";
import Home from "./routes/Home";
import Family from "./routes/Family";
import NewAccount from "./routes/NewAccount";
import Onboarding from './routes/Onboarding';
import React from 'react';
import {ContactsIcon, CrossIcon, GearIcon, MenuIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import {ChartSquareBarIcon} from '@heroicons/react/solid';
import NewFamily from './routes/NewFamily';
import Invite from './routes/Invite';
import Kid from './routes/Kid';
import Grandma from './routes/Grandma';

const Child = {};

function App() {
  const [menuActive, setMenuActive] = React.useState(false)
  
  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }
  
  return (
    <div className="app">
      <nav className={"fixed bg-fam-bg-dark h-screen w-screen z-50 p-8 space-y-8 transition-all " + (menuActive ? 'right-0' : 'right-full')}>
        <p className="text-4xl font-display drop-shadow-xl font-[900]">Cete</p>
        <ul className="space-y-8 text-lg">
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/" onClick={toggleMenu}>
              <ChartSquareBarIcon className="w-8 h-8 inline" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/family" onClick={toggleMenu}>
              <ContactsIcon className="w-8 h-8 inline" /> <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/" onClick={toggleMenu}>
              <GearIcon className="w-8 h-8 inline" /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="fixed top-8 right-8 z-50" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? <CrossIcon className="w-12 h-12 drop-shadow-md" /> : <MenuIcon className="w-12 h-12 drop-shadow-md" />}
      </div>

      <Routes>
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="invite" element={<Invite />} />
        <Route path="new-family" element={<NewFamily />} />
        <Route path="/" element={<Home />}>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="family" element={<Family />} />
        <Route path="family/:account" element={<Account />} />
        <Route path="family/:account/kid" element={<Kid />} />
        <Route path="family/:account/grandma" element={<Grandma />} />
      </Routes>
    </div>
  );
}

export default App;
