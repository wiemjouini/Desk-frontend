import React, {useState} from 'react'
import PropTypes from 'prop-types';
import "./Entry.style.css"
import{Container} from 'react-bootstrap'
import { LoginForm } from '../../components/login/login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';


export const Entry = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [frmload ,setFrmload]=useState("login")
  const handleOnChange = e =>{
    const{name,value} = e.target
    switch(name){
      case 'email':
        setEmail(value)
        break;

        case 'password':
        setPassword(value)
        break;

        default:
          break
    }
  }
  const handleOnSubmit = e=>{
    e.preventDefault()
    if(!email || !password){
      alert("fill up all the form!")
    }
    //to do call api to submit the form
    console.log(email,password);
  }
  const FormSwitcher = (frmtype) => {
    setFrmload(frmtype);
  }
  const handleOnResetSubmit = e=>{
    e.preventDefault()
    if(!email){
      alert("please enter the email")
    }
    //to do call api to submit the form
    console.log(email);
  }
  return (
    <div className='entry-page bg-info'>
      <Container className='box-form'> 
      {frmload === 'login'&& (<LoginForm
        handleOnChange={handleOnChange}
        email={email}
        password={password}
        handleOnSubmit={handleOnSubmit}
        FormSwitcher={FormSwitcher}
      />)}
       {frmload === 'reset'&& (<ResetPassword
        handleOnChange={handleOnChange}
        email={email}
        handleOnResetSubmit={handleOnResetSubmit}
        FormSwitcher={FormSwitcher}
      />)}

      </Container>
    </div>
  )
}


