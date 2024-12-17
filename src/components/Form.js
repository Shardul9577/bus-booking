import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';

const Form = ({
  isEdit,
  ticketopen,
  handleClickOpen,
  open,
  addTickitHandler,
}) => {
 
const[fname , setFname] = useState('')
const[lname , setLname] = useState('')
const[email , setEmail] = useState('')

useEffect(()=>{
  if (Object.keys(ticketopen).length > 0) {
    setFname(ticketopen?.fname)
    setLname(ticketopen?.lname)
    setEmail(ticketopen?.email)
  }
},[isEdit, ticketopen])

const clearForm = () => {
  setFname("") 
  setLname("")
  setEmail("")
}

const submitHandler = () => {
  addTickitHandler(fname , lname , email)
  clearForm()
  if (isEdit) {
    toast.success('Data is Updated Successfully')
  } else {
    toast.success("New Entry is added Successfully")
  }
}


  return (
    <div
      class='modal fade'
      id='exampleModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class="modal-dialog" open={open}>
        <div class='modal-content'>
          <div class='modal-header'>
            <h1 class='modal-title fs-5' id='exampleModalLabel'>
              + Add Form
            </h1>
          </div>
          <div class='modal-body'>
            <form class='row g-3 needs-validation' novalidate>
              <div class='col-md-4'>
                <label for='validationCustom01' class='form-label'>
                  First name
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='validationCustom01'
                  value={fname}
                  onChange={(e)=> setFname(e.target.value)}
                  required
                />
                <div class='valid-feedback'>Looks good!</div>
              </div>
              <div class='col-md-4'>
                <label for='validationCustom02' class='form-label'>
                  Last name
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='validationCustom02'
                  value={lname}
                  onChange={(e)=>setLname(e.target.value)}
                  required
                />
                <div class='valid-feedback'>Looks good!</div>
              </div>
              <div class='col-md-4'>
                <label for='validationCustom02' class='form-label'>
                  Email
                </label>
                <input
                  type='text'
                  class='form-control'
                  id='validationCustom02'
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                />
                <div class='valid-feedback'>Looks good!</div>
              </div>
            </form>
          </div>
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-secondary'
              data-bs-dismiss='modal'
              onClick={()=>{
                handleClickOpen()
                clearForm()
              }}
            >
              Close
            </button>
            <button type='button' class='btn btn-primary' onClick={submitHandler}>
              {isEdit ? "Save" : "+ Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;