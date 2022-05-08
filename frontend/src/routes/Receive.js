import {CaretDownIcon, ContactsIcon, CopyIcon, QrCodeIcon, ShareIcon} from "@bitcoin-design/bitcoin-icons-react/filled";
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
          <div className="flex justify-around align-center space-x-4">
            <div className="outline outline-1 rounded-md basis-1/2">
              <Button style="free" size="small">
                <ShareIcon className="w-8 h-8" />
                <div>Share</div>
              </Button>
            </div>
            <div className="outline outline-1 rounded-md basis-1/2">
              <Button style="free" size="small">
                <CopyIcon className="w-8 h-8" />
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

          <div className="w-full bg-fam-bg-dark flex flex-row justify-around align-start items-center p-4 rounded-md mt-8">
            <span className="basis-1/2">Details &amp; Settings</span> <CaretDownIcon className="w-8 h-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Receive;