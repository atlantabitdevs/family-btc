import React from "react";
import {Link, useParams} from "react-router-dom";
import {ArrowDownIcon, ArrowUpIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
// unique account within family page
const Account = () => {
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
      id: 'jacob'
    },
    {
      name: 'Gertrude',
      photo: '/grandmother.jpg',
      balance: '90,000,023',
      id: 'gertrude'
    }
  ])
  
  const {account} = useParams()
  
  const [accountInfo, setAccountInfo] = React.useState({
    name: '· · ·',
    photo: '/father.jpg',
    balance: '- - -',
    id: 'placeholder'
  })
  
  const [transactions, setTransactions] = React.useState([
    {
      counterparty: 'Merchant',
      memo: 'Purchase at store',
      date: '2022-06-01 14:55',
      amount: 20000,
      direction: 'send'
    },
    {
      counterparty: 'Merchant',
      memo: 'Refund at store',
      date: '2022-06-01 14:55',
      amount: 30000,
      direction: 'receive'
    },
    {
      counterparty: 'Merchant',
      memo: 'Purchase at store',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'send'
    },
    {
      counterparty: 'Merchant',
      memo: 'Purchase at store',
      date: '2022-06-01 14:55',
      amount: 20000,
      direction: 'send'
    },
    {
      counterparty: 'Merchant',
      memo: 'Refund at store',
      date: '2022-06-01 14:55',
      amount: 30000,
      direction: 'receive'
    },
    {
      counterparty: 'Merchant',
      memo: 'Purchase at store',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'send'
    },
    {
      counterparty: 'Merchant',
      memo: 'Purchase at store',
      date: '2022-06-01 14:55',
      amount: 20000,
      direction: 'send'
    },
    {
      counterparty: 'Merchant',
      memo: 'Refund at store',
      date: '2022-06-01 14:55',
      amount: 30000,
      direction: 'receive'
    },
    {
      counterparty: 'Merchant',
      memo: 'Purchase at store',
      date: '2022-06-01 14:55',
      amount: 10000,
      direction: 'send'
    },
  ])

  React.useEffect(()=> {

    let currentAccountIndex = family.findIndex((element) => element.id === account)
    console.log(currentAccountIndex)
    console.log(family[currentAccountIndex])

    setAccountInfo(family[currentAccountIndex])

  })

  return (
    <div className="min-h-screen">
      <div className="default-bg"></div>
      <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
        <h1 className="text-2xl">Account Activity</h1>

        <div className="slots">
          <div className="flex flex-row space-x-8 justify-center items-center border-solid border-fam-teal border-b w-full p-4">
            <img src={accountInfo.photo} alt={accountInfo.name} className="rounded-full w-16 h-16" />
            <div className="grow">
              <h2>{accountInfo.name}</h2>
              <p>{accountInfo.balance} sats</p>
            </div>
          </div>

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
                  <h3>{tx.counterparty}</h3>
                  <p>{tx.date}</p>
                  <p>{tx.memo}</p>
                </div>
                <div>
                  <p>{tx.amount}</p>
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
