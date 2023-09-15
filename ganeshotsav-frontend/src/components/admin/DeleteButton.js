import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const DeleteButton = (id) => {
    async function handleData() {
        console.log(id.id);
        try {
          await axios.delete(`http://localhost:5002/donation/deletedonor/${id.id}`);
         } catch (error) {
           console.log(error);
         }
    }
  return (
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleData}>
        Delete
      </Button>
  );
}

export default DeleteButton;