import React, {useState} from 'react'
import PropTypes from 'prop-types';
import "./Entry.style.css"
import{Container} from 'react-bootstrap'
import { LoginForm } from '../../components/login/login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';


export const Entry = () => {
  const [frmload ,setFrmload]=useState("login");


  const FormSwitcher = (frmtype) => {
    setFrmload(frmtype);
  }
  const handleOnResetSubmit = e=>{
    e.preventDefault()
  
  }
  return (
    <div className='entry-page bg-info'>
      <Container className='box-form'> 
      {frmload === 'login'&& (<LoginForm
        FormSwitcher={FormSwitcher}
      />)}
       {frmload === 'reset'&& (<ResetPassword
        //handleOnChange={handleOnChange}
       // email={email}
        handleOnResetSubmit={handleOnResetSubmit}
        FormSwitcher={FormSwitcher}
      />)}

      </Container>
    </div>
  )
}



