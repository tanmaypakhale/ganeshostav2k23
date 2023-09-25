import * as React from "react";
import Button from "@mui/material/Button";
import ArticleIcon from "@mui/icons-material/Article";
import axios from 'axios'

const SendPDFButton = (id) => {
  async function handleData() {
    try {
      const result = await axios.get(`http://localhost:5002/donation/getdonor/${id.id}`);
      const donor = result.data.donor;
      console.log(donor);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Button variant="contained" startIcon={<ArticleIcon />} onClick={handleData}>
      Send PDF
    </Button>
  );
};

export default SendPDFButton;
