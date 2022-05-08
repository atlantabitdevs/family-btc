import {Link, Outlet} from "react-router-dom";
import Button from '../components/Button';
import {PlusIcon} from '@heroicons/react/solid';
import React from 'react';
//generic Family Page
const Family = () => {
  const [family, setFamily] = React.useState([
    {
      name: 'Jerry',
      photo: '/father.jpg',
      balance: '1,000,000',
      id: 'jerry'
    },
    {
      name: 'Jennifer',
      photo: '/mother.jpg',
      balance: '999,000',
      id: 'jennifer'
    },
    {
      name: 'Jacob',
      photo: '/child.jpg',
      balance: '2,350',
      id: 'jacob/kid'
    },
    {
      name: 'Gertrude',
      photo: '/grandmother.jpg',
      balance: '90,000,023',
      id: 'gertrude'
    }
  ])
  
  return (
    <div className="min-h-screen">
      <div className="default-bg"></div>
      <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
        <h1 className="text-2xl">Malone Family</h1>

        <div className="slots">
        {family.map((member, index) => {
          return (
            <Link to={'/family/' + member.id} className="flex flex-row space-x-8 justify-center items-center border-solid border-fam-teal border-b w-full p-4">
              <img src={member.photo} alt={member.name} className="rounded-full w-16 h-16" />
              <div className="grow">
                <h2>{member.name}</h2>
                <p>{member.balance} sats</p>
              </div>
            </Link>
          )
        })}
        </div>
        

      </div>
    </div>
  );
};

export default Family;
