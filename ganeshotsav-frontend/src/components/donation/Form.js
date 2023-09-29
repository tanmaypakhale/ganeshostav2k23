import React from "react";
import InputWithLabel from "./InputWithLabel";
import { useState } from "react";
import IconLabelButtons from "./ButtonIcons";
import DropDown from "./DropDown";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../store/action/donorActions";
import Swal from "sweetalert2";
const Form = () => {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [hostelName, setHostelName] = useState("");
  const [block, setBlock] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [committeeMemberName, setCommitteeMemberName] = useState("");
  const navigate = useNavigate();

  async function register() {
    const roomNumber = block + "-" + roomNo;
    const donorDetails = {
      name,
      mail,
      amount,
      hostelName,
      roomNumber,
      committeeMemberName,
    };
    // generate(donorDetails, navigate);
    try {
      const result = (
        await axios.post(
          "http://localhost:5002/donation/add-donor",
          donorDetails
        )
      );
      console.log(result);
      setMail("");
      setName("");
      setAmount("");
      setHostelName("");
      setBlock("");
      setRoomNo("");
      setCommitteeMemberName("");

      await Swal.fire(`Congratulations Money  Submitted by ${name} and Mail sent to ${mail} `);
      window.location.href = "/";
    } catch (error) {
      await Swal.fire(error.response.data.message);
      window.location.href = "/";
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
  };

  const handleGenerateReciept = () => {
    const roomNumber = block + "-" + roomNo;
    const donorDetails = {
      name,
      mail,
      amount,
      hostelName,
      roomNumber,
      committeeMemberName,
    };
    //console.log(donorDetails);
    localStorage.setItem("donor", JSON.stringify(donorDetails));
    const urlToOpen = "http://localhost:3000/reciept";
    // generate(donorDetails, navigate);
    window.open(urlToOpen, "_blank");
  };

  const HostelNames = ["MHR", "RHR", "BHR", "GHR", "SHR", "Sangam"];
  const BlockNames = ["A", "B"];
  return (
    <div>
      <InputWithLabel
        value={name}
        setValue={setName}
        label="Name"
        type="text"
        placeholder="Enter donor name"
      />
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="mail"
        type="text"
        placeholder="Enter donor e-mail address"
      />
      <DropDown
        value={hostelName}
        setValue={setHostelName}
        values={HostelNames}
        label="Hostel Name"
      />
      <DropDown
        value={block}
        setValue={setBlock}
        values={BlockNames}
        label="Block"
      />
      <InputWithLabel
        value={roomNo}
        setValue={setRoomNo}
        label="Room No."
        type="number"
        placeholder="Enter Room No."
      />
      <InputWithLabel
        value={amount}
        setValue={setAmount}
        label="amount donated"
        type="number"
        placeholder="Enter donated amount"
      />
      <InputWithLabel
        value={committeeMemberName}
        setValue={setCommitteeMemberName}
        label="Committee Member Name"
        type="text"
        placeholder="Enter comittee Member Name"
      />
      <IconLabelButtons
        handleSubmitAndSend={register}
        handleClear={handleClear}
        handleGenerateReciept={handleGenerateReciept}
      />
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Form);
