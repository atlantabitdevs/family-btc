import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
import Account from "./routes/Account";
import Accounts from "./routes/Accounts";
import Home from "./routes/Home";
import Family from "./routes/Family";
import NewAccount from "./routes/NewAccount";
import Onboarding from './routes/Onboarding';

const Child = {};

function App() {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">Home</NavLink> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="family" element={<Family />}>
            <Route path=":family" element={<Accounts />}>
              <Route path=":account" element={<Account />} />
            </Route>
          </Route>
          <Route path="onboarding" element={<Onboarding />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
