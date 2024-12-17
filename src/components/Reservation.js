import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from "@mui/material";
import {useState} from 'react'
import Form from './Form';
import {useEffect} from 'react'
import classes from './Global.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Reservation() {

  const[open , setOpen]= useState(false)
  const[seatNumber , setSeatNumber]= useState("")
  const[reservations , setReservations]= useState([])

  useEffect(()=>{
    setSeatNumber("")
    getReservationData()
  },[])
 
  const getReservationData = () => {
    const reservationList = JSON.parse(localStorage.getItem('reservation')) || []
    setReservations(reservationList)
  }

const handleClickOpen = () => {
  setOpen(!true)
  setSeatNumber("")
}
const reserveTicket = (seat) => {
  setOpen(true)
  setSeatNumber(seat)
}

  const addTickitHandler = (fname , lname , email) => {
   const packet = {
    fname,
    lname,
    email,
    seat: seatNumber,
    date: new Date().toLocaleDateString()
   }
   const newReservation = [...reservations , packet]
   localStorage.setItem("reservation" , JSON.stringify(newReservation))
   getReservationData()
   setSeatNumber("")
  }



  const displaySeat = (number) => {
   const isBooked = reservations.find((ticket) => ticket ?.seat === number)

   return isBooked ? (
    <Item key={number} className={` ${classes.booked} ${classes.item}`} style={{marginTop:"10px" , marginBottom:"10px"}}>
      <img className={`${classes.image}`} src='https://cdn-icons-png.flaticon.com/512/1678/1678670.png'/>
      <p>{number}</p>
    </Item>
   ) 
  : (
    <Item key={number} onClick={()=>{reserveTicket(number)}} data-bs-toggle="modal" data-bs-target="#exampleModal"  className={`${seatNumber == number ? `${classes.selected}` : `${classes.available}`} ${classes.item} `}  style={{marginTop:"10px" , marginBottom:"10px"}}>
            <img className={`${classes.image}`} src='https://cdn-icons-png.flaticon.com/512/1678/1678670.png'/>
            <p>{number}</p>
    </Item>
   )
   }

  return (
    <div >
    <h1 className={`${classes.title} container`} style={{textAlign:"initial"}}>Reservation View</h1>
    <p className='container' style={{textAlign:"initial"}}>Click on Available seat to proceed with your transaction.</p>

    <h3 className={`${classes.title} container`} style={{textAlign:"initial"}}>Choose Seat</h3>
    <div className='container' style={{alignItems:"center" , display:"flex"}}>
     <span style={{display: "block",height: "20px",marginRight: "10px", marginLeft: "10px",width: "20px" , backgroundColor:"rgb(87, 196, 255)"}}></span> Available
     <span style={{display: "block",height: "20px",marginRight: "10px", marginLeft: "10px",width: "20px" , backgroundColor:"rgb(150, 255, 134)"}}></span> Selected
     <span style={{display: "block",height: "20px",marginRight: "10px", marginLeft: "10px",width: "20px" , backgroundColor:" rgb(255, 134, 134)"}}></span> Booked
    </div>

    <Typography className={`${classes.title}`}  variant="h6" mt={3}>
        Upper Deck
    </Typography>
    <Stack
      className={`${classes.uppercase} container`}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      style={{
        backgroundColor:"#f6e0ff",
        borderRadius:"10px"
      }}
    >

{Array.from({length:20} , (_,index) =>  index + 1).map((number)=>
            displaySeat(number)
      )}
    
    </Stack>

    <Typography className={`${classes.title}`}   variant="h6" mt={3}>
        Lower Deck
    </Typography>
    <Stack
      className={`${classes.lowercase} container`}
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      style={{
        backgroundColor:"#f6e0ff",
        borderRadius:"10px"
      }}
    >
      {Array.from({length:20} , (_,index) =>  index + 21).map((number)=>
            displaySeat(number)
      )}
    </Stack>
    <Form
        isEdit={false}
    ticketopen={{}}
    open={open}
    handleClickOpen={handleClickOpen}
    addTickitHandler={addTickitHandler}
    />
  </div>
  )
}


