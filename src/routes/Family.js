import { Outlet } from "react-router-dom";
//generic Family Page
const Family = () => {
  return (
    <div>
      <h3>Private Family Page</h3>
      <Outlet />
    </div>
  );
};

export default Family;
