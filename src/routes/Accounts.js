import { Outlet, useParams, Link } from "react-router-dom";
//Specifc, Private Family Page
const Accounts = () => {
  const { family } = useParams();

  const members = ["Steven", "Alex", "Bryan", "Jordan"];

  return (
    <div>
      <h2>Welcome {family} family!</h2>
      <ul>
        {members.map((member, key) => {
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
