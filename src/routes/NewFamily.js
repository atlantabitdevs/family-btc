import {Link} from 'react-router-dom';
import Button from '../components/Button';
import React from 'react';
import {ArrowRightIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import {ArrowLeftIcon} from '@heroicons/react/solid';

const NewFamily = () => {
  const [groupName, setGroupName] = React.useState('')
  const [step, setStep] = React.useState(0)
  
  return(
    <>
      {step === 0 ?
      <div className="p-8 space-y-8 min-h-screen flex flex-col align-center justify-center bg-snowpeaks bg-cover">
        <h2 className="text-4xl font-display drop-shadow-xl font-[600]">What is your tribe name?</h2>
        
        <p>We'll walk you through the process of creating a bitcoin vault for your family. First, tell us what to call this vault.</p>
        
        <input
          type="text"
          className="w-full p-4 rounded-md font-light text-lg text-black"
          placeholder="The Adams Family"
          value={groupName}
          onChange={(e)=>setGroupName(e.target.value)}
        />
        
        <Button disabled={groupName === ''} onClick={() => setStep(1)}>
          <span>Continue</span> <ArrowRightIcon className="w-8 h-8" />
        </Button>
      </div>
      : step === 1 ?
      <div className="p-8 space-y-8 min-h-screen flex flex-col align-center justify-center bg-clouds bg-cover">
        <h2 className="text-4xl font-display drop-shadow-xl font-[600]">Let's create a backup for your bitcoin</h2>
        
        <p>The easiest way to back up your bitcoin is using a cloud provider. We'll help you encrypt it so that it stays protected.</p>

        <Button onClick={() => setStep(2)}>
          <span>Setup Backup</span> <ArrowRightIcon className="w-8 h-8" />
        </Button>

        <Button style="free" onClick={() => setStep(0)}>
          <ArrowLeftIcon className="w-8 h-8" /> <span>Back</span>
        </Button>
      </div>
      :
      <div className="p-8 space-y-8 min-h-screen flex flex-col align-center justify-center bg-boulders bg-cover">
        <h2 className="text-4xl font-display drop-shadow-xl font-[600]">Your family vault is ready</h2>

        <p>Now that your vault is ready, you can invite other people to join you.</p>
        
        <Link to="/">
          <Button onClick={() => setStep(2)}>
            <span>Let's Go</span> <ArrowRightIcon className="w-8 h-8" />
          </Button>
        </Link>
        
        <Button style="free" onClick={() => setStep(1)}>
          <ArrowLeftIcon className="w-8 h-8" /> <span>Back</span>
        </Button>
      </div> 
      }
    </>
  )
}

export default NewFamily