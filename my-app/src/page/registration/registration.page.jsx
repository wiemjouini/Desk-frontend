

import React from 'react'
import './registration.style.css'
import { Container } from 'react-bootstrap';
import {RegistrationForm} from '../../components/registration-form/registrationForm.comp'

export const Registration = () => {
  return (
    <div className='registration-page'>
      <div className='overlay'></div>
      <div>
      <Container className='box-form'>
        <RegistrationForm/>
      </Container>
      </div>
    </div>
  );
};

