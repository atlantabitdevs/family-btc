import senseiClient from './sensei';

const init = async () => {// initialize your sensei node
  const { pubkey, macaroon } = await senseiClient.init({
    username: 'admin',
    alias: 'Big Daddy',
    passphrase: 'ATL bitd3vs',
    start: true,
  });

  senseiClient.setMacaroon(macaroon);

  // send bitcoin to this address to fund your node
  const { address } = await senseiClient.getUnusedAddress();
  console.log(address)
}
init()
// create lightweight child node
// const { alicePubkey, aliceMacaroon } = await senseiClient.createNode({
//   username: 'alice',
//   alias: 'alice',
//   passphrase: 'alicespassphrase',
//   start: true,
// });

// search nodes for alice
// const { nodes } = await senseiClient.getNodes({
//   page: 0,
//   searchTerm: alicePubkey,
//   take: 1,
// });

// const aliceNodeInfo = nodes[0];
// const { listenAddr, listenPort } = aliceNodeInfo;

// open a public channel with alice
// await senseiClient.openChannel({
//   nodeConnectionString: `${alicePubkey}@${listenAddr}:${listenPort}`,
//   amtSatoshis: 25000,
//   isPublic: true,
// });

// have alice generate an invoice for 1000 satoshis
// senseiClient.setMacaroon(aliceMacaroon);
// const { invoice } = await senseiClient.createInvoice({
//   amountMillisats: 1000000,
//   description: 'paying for some coffee',
// });

// have admin node pay the invoice
// senseiClient.setMacaroon(macaroon);
// await senseiClient.payInvoice(invoice);