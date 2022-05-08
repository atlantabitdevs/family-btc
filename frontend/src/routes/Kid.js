import React from "react";
import {Link, useParams} from "react-router-dom";
import {ArrowDownIcon, ArrowUpIcon, BitcoinCircleIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
// unique account within family page
const Account = () => {

  
  const {account} = useParams()
  
  const [accountInfo, setAccountInfo] = React.useState({
    name: '· · ·',
    photo: '/father.jpg',
    balance: '- - -',
    id: 'placeholder'
  })
  
  const [transactions, setTransactions] = React.useState([
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
    {
      counterparty: 'Parents',
      memo: 'Savings',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'receive'
    },
  ])
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="min-w-screen min-h-screen py-10 px-8 flex flex-col justify-center z-10 relative">
        <h1 className="text-2xl">Jacob's Wallet</h1>

        <div className="tile kid">
          <h2 className="mb-2 flex flex-row"><span>Your Balance</span> <BitcoinCircleIcon className="w-6 h-6 text-fam-orange" /></h2>
          <p className="text-4xl">1000 <span>sats</span></p>
        </div>
        
        <div className="h-40 relative">
          <img src="/spinosaurus.svg" alt="Spinosaurus" className="absolute w-full -top-24" />
        </div>
        
        <div className="slots kid">
          {transactions.map((tx, index)=>{
            return(
              <div className="flex flex-row space-x-8 justify-center items-center border-solid border-fam-teal border-b w-full p-4">
                <div>
                  {tx.direction === 'send' ?
                    <span className="rounded-full bg-blue-500 inline-block p-2">
                      <ArrowUpIcon className="w-8 h-8" />
                    </span>
                  :
                    <span className="rounded-full bg-green-500 inline-block p-2">
                      <ArrowDownIcon className="w-8 h-8" />
                    </span>
                  }
                </div>
                <div>
                  <h3 className="font-bold">{tx.counterparty}</h3>
                  <p>{tx.date}</p>
                  <p>{tx.memo}</p>
                </div>
                <div>
                  <p className="font-bold">{tx.amount}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="h-60 relative mt-10">
          <img src="/brontosaurus.svg" alt="Brontosaurus" className="absolute w-full -top-24" />
        </div>

      </div>
    </div>
  );
};

export default Account;
