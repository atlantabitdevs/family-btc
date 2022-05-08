import React from "react";
import {Link, useParams} from "react-router-dom";
import {ArrowDownIcon, ArrowUpIcon, BitcoinCircleIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
// unique account within family page
const Account = () => {

  
  const {account} = useParams()
  
  const [transactions, setTransactions] = React.useState([
    {
      counterparty: 'Miller Insurance Co.',
      memo: 'Insurance payout',
      date: '2022-06-01 14:55',
      amount: 200000,
      direction: 'receive'
    },
    {
      counterparty: 'Sunnyville',
      memo: 'Assisted living rent',
      date: '2022-06-01 14:55',
      amount: 100000,
      direction: 'send'
    },
    {
      counterparty: 'Dr. Melissa Schafer, MD',
      memo: 'Quarterly checkup',
      date: '2022-06-01 14:55',
      amount: 100000,
      direction: 'send'
    },
    {
      counterparty: 'Miller Insurance Co.',
      memo: 'Insurance payout',
      date: '2022-06-01 14:55',
      amount: 200000,
      direction: 'receive'
    },
    {
      counterparty: 'Sunnyville',
      memo: 'Assisted living rent',
      date: '2022-06-01 14:55',
      amount: 100000,
      direction: 'send'
    },
    {
      counterparty: 'Dr. Melissa Schafer, MD',
      memo: 'Quarterly checkup',
      date: '2022-06-01 14:55',
      amount: 100000,
      direction: 'send'
    },
    {
      counterparty: 'Miller Insurance Co.',
      memo: 'Insurance payout',
      date: '2022-06-01 14:55',
      amount: 200000,
      direction: 'receive'
    },
    {
      counterparty: 'Sunnyville',
      memo: 'Assisted living rent',
      date: '2022-06-01 14:55',
      amount: 100000,
      direction: 'send'
    },
    {
      counterparty: 'Dr. Melissa Schafer, MD',
      memo: 'Quarterly checkup',
      date: '2022-06-01 14:55',
      amount: 100000,
      direction: 'send'
    },
  ])

  return (
    <div className="min-h-screen">
      <div className="grandma-bg"></div>
      <div className="min-w-screen min-h-screen py-10 px-8 flex flex-col justify-center z-10 relative">
        <h1 className="text-2xl text-neutral-900">Gertrude's Wallet</h1>

        <div className="tile grandma">
          <h2 className="mb-2 flex flex-row"><span>Your Balance</span> <BitcoinCircleIcon className="w-6 h-6 text-fam-orange" /></h2>
          <p className="text-4xl">70,000,000 <span>sats</span></p>
        </div>
        
        <div className="slots grandma">
          {transactions.map((tx, index)=>{
            return(
              <div className="flex flex-row space-x-8 justify-center items-center border-solid border-fam-teal border-b w-full p-4">
                <div>
                  {tx.direction === 'send' ?
                    <span className="rounded-full bg-blue-500 inline-block p-2">
                      <ArrowUpIcon className="w-8 h-8 text-white" />
                    </span>
                  :
                    <span className="rounded-full bg-green-500 inline-block p-2">
                      <ArrowDownIcon className="w-8 h-8 text-white" />
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
      </div>
    </div>
  );
};

export default Account;
