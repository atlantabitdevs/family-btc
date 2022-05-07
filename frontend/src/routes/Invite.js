import React from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button';
import {MailIcon, PlusIcon} from '@heroicons/react/solid';
import InputText from '../components/InputText';

const Invite = () => {
  const [invited, setInvited] = React.useState(false)
  const [invitedEmail, setInvitedEmail] = React.useState('')
  
  return (
    <div className="min-h-screen">
      <div className="default-bg"></div>
      <div className="min-w-screen min-h-screen p-8 flex flex-col justify-center z-10 relative">
        {!invited ?
          <div className="tile">
            <h2>Invite Members</h2>

            <p className="text-lg">Your tribe has no members. Add&nbsp;one! </p>

            <InputText
              type="email"
              placeholder="marie@domain.com"
              value={invitedEmail}
              onChange={ (e)=>{setInvitedEmail(e.target.value)} }
            />

            <Button onClick={() => setInvited(true)}>
              <MailIcon className="w-8 h-8"/> <span>Invite Member</span>
            </Button>
          </div>
        :
          <div className="tile">
            <h2>Invite Members</h2>

            <p className="text-lg">
              <strong>{invitedEmail}</strong> has been invited! Would you like to add another member?
            </p>
            
            <Button onClick={()=>{setInvited(false); setInvitedEmail('');}}>
              <PlusIcon className="w-8 h-8" /> <span>Invite Another</span>
            </Button>
            <Link to="/">
              <Button style="free">Return to Dashboard</Button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Invite;
