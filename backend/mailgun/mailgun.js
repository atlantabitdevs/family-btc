const mailgun = require("mailgun-js");
const DOMAIN = "sandboxb488ae9cba904e73936d81f35b2ee781.mailgun.org";
const mg = mailgun({
	apiKey: process.env.MAILGUN_API_KEY,
	domain: DOMAIN,
});

const sendInvite = async (newUser, email, familyName, inviteLink) => {
  const data = {
    from: `Family BTC Wallet <postmaster@${DOMAIN}`,
    to: email,
    subject: "Welcome to BTC Family!",
    text: 
      `Hi ${newUser}, 
        You are invited to join the ${familyName} family wallet!

        Click here: ${inviteLink} to accept your invitation!
      `
  };

  await mg.messages().send(data, function (error, body) {
    if (error) {
      console.error("Invite failed:", error)
    } else {
      console.log("Invite success:", body);
    }
  });
}

export { sendInvite }