import { CaretDownIcon, ContactsIcon, CopyIcon, EditIcon, QrCodeIcon, ShareIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import InputText from "../components/InputText";

const Receive = () => {
  const [paymentInvoice, setPaymentInvoice] = useState('lnbcrt10u1p38wdlrdpgf4ujq3nfwfehggzzd96xxmmfdcs9qcted4jkuappnp4qdnruvuevwuqskwrqva9jpax24rczdf2qeetaupsr40qcppqy8rtypp5zym6sjac2srj06ww8s0ehe5jwq0y25w2z4ugjnqjm83vc4n0u4hssp5r5x9xrp7l36euve6qr262n9n22v9gsxsh6exnxjnvg39424gtgys9qyysgqcqpcgafsss7sev079jjdvwlhelh9mys02p4t0pzg0y2y9k8sshxrhcfhwph2ttd8j2gg8h7um5usrv3z267dha3uar6urrp67fqul6yun5cqz0gkk9');
  console.log(paymentInvoice)
  const [copied, setCopied] = useState(false);
  const paymentInvoiceConst = 'lnbcrt10u1p38wdlrdpgf4ujq3nfwfehggzzd96xxmmfdcs9qcted4jkuappnp4qdnruvuevwuqskwrqva9jpax24rczdf2qeetaupsr40qcppqy8rtypp5zym6sjac2srj06ww8s0ehe5jwq0y25w2z4ugjnqjm83vc4n0u4hssp5r5x9xrp7l36euve6qr262n9n22v9gsxsh6exnxjnvg39424gtgys9qyysgqcqpcgafsss7sev079jjdvwlhelh9mys02p4t0pzg0y2y9k8sshxrhcfhwph2ttd8j2gg8h7um5usrv3z267dha3uar6urrp67fqul6yun5cqz0gkk9';

  const invoiceUrl = 'http://localhost:8080'

  const getInvoice = async () => {
    // const response = await fetch(invoiceUrl);
    // return response.json();
    console.log('simulated http request')
  };

  // useEffect(() => {
  //   // request invoice from back end
  //   setPaymentInvoice(getInvoice());

  // }, [])

  const copyTextToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(JSON.stringify(text));
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopy = () => {
    setCopied(true);
    copyTextToClipboard(paymentInvoice);
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  };



  return (
    <>
      <div className="min-h-screen">
        <div className="default-bg"></div>
        <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
          <h1 className="text-2xl">Receive payment</h1>

          <div className="tile">
            <QrCodeIcon />
          </div>
          <div className={`flex justify-center mb-2 ${copied ? "" : "invisible"}`}>
            <p>Invoice copied to clipboard!</p>
          </div>
          <div className="flex justify-around align-center space-x-4">
            <div className="outline outline-1 rounded-md basis-1/2">
              <Button style="free" size="small">
                <ShareIcon className="w-8 h-8" />
                <div>Share</div>
              </Button>
            </div>
            <div className="outline outline-1 rounded-md basis-1/2">
              <Button style="free" size="small" onClick={handleCopy}>
                <CopyIcon className="w-8 h-8" />
                <div>Copy</div>
              </Button>
            </div>
          </div>

          <div className="flex justify-around align-center mt-2">
            <div>
              <Button style="free" size="small">
                <ContactsIcon width="32" height="32" />
                <div className="text-sm">Contact</div>
              </Button>
            </div>
            <div>
              <Button style="free" size="small">
                <EditIcon width="32" height="32" />
                <div className="text-sm">Notes & Tags</div>
              </Button>
            </div>
          </div>

          <div className="w-full bg-fam-bg-dark flex flex-row justify-around align-start items-center p-4 rounded-md mt-8">
            <span className="basis-1/2">Details &amp; Settings</span> <CaretDownIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Receive;