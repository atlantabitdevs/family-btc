import { ContactsIcon, CopyIcon, QrCodeIcon, ShareIcon } from "@bitcoin-design/bitcoin-icons-react/filled";
import Button from "../components/Button";
import InputText from "../components/InputText";

const Receive = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="default-bg"></div>
        <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
          <h1 className="text-2xl">Receive payment</h1>

          <div className="tile">
            <QrCodeIcon />
          </div>
          <div className="flex justify-around align-center ">
            <div className="outline outline-1">
              <Button style="free" size="small">
                <ShareIcon width="52" height="52" />
                <div>Share</div>
              </Button>
            </div>
            <div className="outline outline-1">
              <Button style="free" size="small">
                <CopyIcon width="52" height="52" />
                <div>Copy</div>
              </Button>
            </div>
          </div>

          <div className="flex justify-around align-center mt-1">
            <div>
              <Button style="free" size="small">
                <ContactsIcon width="32" height="32" />
                <div className="text-sm">Contact</div>
              </Button>
            </div>
            <div>
              <Button style="free" size="small">
                <CopyIcon width="32" height="32" />
                <div className="text-sm">Notes & Tags</div>
              </Button>
            </div>
          </div>

          <div className="tile">
            <InputText placeholder="Details and Settings              v" />


          </div>


        </div>
        <h1>This is the Receive screen</h1>
      </div>
    </>
  );
};

export default Receive;