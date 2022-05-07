import React from "react";
import { useParams } from "react-router-dom";
// unique account within family page
const Account = () => {
  const { family, account } = useParams();

  return (
    <div>
      <h1>Account Page</h1>
      <h2>
        Welcome {account} from {family} family!
      </h2>
    </div>
  );
};

export default Account;
