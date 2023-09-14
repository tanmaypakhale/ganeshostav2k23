import React from 'react'
import InputWithLabel from './InputWithLabel'
import { useState } from 'react';
import IconLabelButtons from './ButtonIcons';
import DropDown from './DropDown';
import axios from 'axios'

const Form = () => {
  
    const [mail,setMail] = useState('');
    const [name,setName] = useState('');
    const [amount,setAmount] = useState('');
    const [hostelName,setHostelName]=useState('');
    const [block,setBlock]=useState('');
    const [roomNo,setRoomNo] = useState('');
    const [committeeMemberName,setCommitteeMemberName] = useState('');

    async function register() {
      const roomNumber = block+'-'+roomNo;
      const donorDetails = {
                name,
                mail,
                amount,
                hostelName,
                roomNumber,
                committeeMemberName,
            }
     
        try {
          const result = (await axios.post("http://localhost:5002/donation/add-donor", donorDetails)).data;

          setMail("");
          setName("");
          setAmount("");
          setHostelName("");
          setBlock("");
          setRoomNo("");
          setCommitteeMemberName("");
        } catch (error) {
          console.log(error);
        }
      
    }

    const handleClear = () => {
      setMail("");
      setName("");
      setAmount("");
      setHostelName("");
      setBlock("");
      setRoomNo("");
      setCommitteeMemberName("");
    }

    const HostelNames = ['MHR','RHR','BHR','GHR','SHR','Sangam'];
    const BlockNames = ['A','B'];
  return (
    <div>
      <InputWithLabel value={name} setValue={setName} label='Name' type='text' placeholder='Enter donor name'/>
      <InputWithLabel value={mail} setValue={setMail} label='mail' type='text' placeholder='Enter donor e-mail address'/>
      <DropDown value={hostelName} setValue={setHostelName} values={HostelNames} label='Hostel Name'/>
      <DropDown value={block} setValue={setBlock} values={BlockNames} label='Block'/>
      <InputWithLabel value={roomNo} setValue={setRoomNo} label='Room No.' type='number' placeholder='Enter Room No.'/>
      <InputWithLabel value={amount} setValue={setAmount} label='amount donated' type='number' placeholder='Enter donated amount'/>
      <InputWithLabel value={committeeMemberName} setValue={setCommitteeMemberName} label='Committee Member Name' type='text' placeholder='Enter comittee Member Name'/>
      <IconLabelButtons handleSubmitAndSend={register} handleClear={handleClear}/>
    </div>
  )
}

export default Form
