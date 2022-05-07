import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "./routes/Account";
import Home from "./routes/Home";
import NewAccount from "./routes/NewAccount";

function App() {
  return (
    <div>
      <nav>
        <Link to="/admin">Admin</Link>
        <Link to="account/BitDevs/Steven">Bitdevs/Steven</Link>
        <Link to="account/BitDevs/Alex">Bitdevs/Alex</Link>
      </nav>

      <Routes>
        <Route path="/admin" />
        <Route path="/account" element={<NewAccount />}>
          <Route path="/account/:family/:user" element={<Account />} />
          <Route path="/account/new" element={<NewAccount />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
