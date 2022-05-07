import { Outlet } from "react-router-dom";
const NewAccount = () => {
  return (
    <div>
      <h1>New Account Screen</h1>
      <Outlet />
    </div>
  );
};

export default NewAccount;
