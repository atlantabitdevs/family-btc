import React from "react";
import { useParams } from "react-router-dom";
const Account = () => {
  const { family, user } = useParams();

  return (
    <div>
      <h1>Account Page</h1>
      <h2>
        Welcom {user} from {family} family!
      </h2>
    </div>
  );
};

export default Account;
