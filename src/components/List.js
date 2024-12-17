import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import classes from './Global.module.css'

const data = localStorage.getItem("reservation")
const parsedData = JSON.parse(data)
console.log(parsedData);



const rows = parsedData

export default function BasicTable() {
  return (
    <>
    <h1 className={`container ${classes.title}`} style={{textAlign:"initial"}}>DashBoard</h1>
    <p  className="container" >There are total <bold style={{color:"darkmagenta"}}>40</bold> seats</p>
    <TableContainer className='container' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Seat Number</TableCell>
            <TableCell align="right">Date of Booking</TableCell>
            <TableCell align="right"><i className="fa-sharp fa-solid fa-trash"></i></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.seat}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}