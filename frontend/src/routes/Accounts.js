import { Outlet, useParams, Link } from "react-router-dom";
import { AddChild, CreateNewFamily, GetFamily } from "../serviceRequests/Admin";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";
//Specifc, Private Family Page
const Accounts = () => {
  const { family } = useParams();
  const [fam, setFam] = useState([]);
  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function getData() {
      // await CreateNewFamily("atlantabitdevs");
      const res = await AddChild("atlantabitdevs", "Bryan", "piggy", 20, 0);
      // const _fam = await GetFamily("atlantabitdevs");
      // setFam(_fam);
      // const members = await _fam.children.map((member) => member.name);
      // setChildren(members);
    }
    getData();
  }, []);

  // const members = ["Steven", "Alex", "Bryan", "Jordan"];

  return (
    <div>
      <h2>Welcome {family} family!</h2>
      <ul>
        {children &&
          children.map((member, key) => {
            return (
              <li key={key}>
                <Link to={`${member}`}>{member}'s Account</Link>
              </li>
            );
          })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Accounts;
