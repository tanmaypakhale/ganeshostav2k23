import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState , useEffect } from 'react';
import axios from 'axios'
import DeleteButton from './DeleteButton';


const Tables = () => {
  const [table, setTable] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      try {
       const data = (await axios.get("http://localhost:5002/donation/getalldonors")).data;
       console.log(data)
       setTable(data.donors)
      } catch (error) {
        console.log(error);
      }
    }
    fetchMyAPI(); 
  }, []);

  
  function subtotal(items) {
    return items.map(({ amount }) => amount).reduce((sum, i) => sum + i, 0);
  }
  


  const handleBGcolor = (hostelName) => {
      if(hostelName==='MHR'){
          return {background: '#AED6F1'};
      }
      if(hostelName==='BHR'){
          return {background: '#F0B27A'};
      }
      if(hostelName==='RHR'){
          return {background: '#F7DC6F'};
      }
      if(hostelName==='GHR'){
          return {background: '#F5B7B1'};
      }
      if(hostelName==='SHR'){
          return {background: '#A3E4D7'};
      }
  }
  
  const invoiceTotal = subtotal(table);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6} sx={{fontWeight: '600', textTransform: 'uppercase'}}>
              Details of All Donaters
            </TableCell>
          </TableRow>
          <TableRow sx={{background:'#35393f'}}>
            <TableCell sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}>Name</TableCell>
            <TableCell align="right" sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}>Mail</TableCell>
            <TableCell align="right" sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}>Hostel Name</TableCell>
            <TableCell align="right" sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}>Room No.</TableCell>
            <TableCell align="right" sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}>Committee Member Name</TableCell>
            <TableCell align="right" sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}>Amount</TableCell>
            <TableCell align="center" sx={{fontWeight: '600', textTransform: 'uppercase', color:'#EAEDED'}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((row,index) => (
            <TableRow key={index} sx={handleBGcolor(row.hostelName)}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.mail}</TableCell>
              <TableCell align="right">{row.hostelName}</TableCell>
              <TableCell align="right">{row.roomNumber}</TableCell>
              <TableCell align="right">{row.committeeMemberName}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="center"><DeleteButton id={row._id} /></TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell align="right">{invoiceTotal}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Tables;
