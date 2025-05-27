
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button,Spinner,Alert } from 'react-bootstrap';
import './registrationForm.style.css';
import { newUserRegistration } from './userRegAction'; 
import { useDispatch ,useSelector} from 'react-redux';

const initialState = {
  name: 'wiem ',
  email: 'fakeemail@gmail.com',
  company: 'sotetel',
  phone: '65412587',
  address: 'paris',
  password: 'Hello#123',
  confirmPass: 'Hello#123',
};

const initialPasswordError = {
  isLenthy: false,
  hasLower: false,
  hasUpper: false,
  hasNumber: false,
  hasSpclChr: false,
  confirmPass:false,
};

export const RegistrationForm = () => {
  const dispatch =useDispatch()
  const [newUser, setNewUser] = useState(initialState);
  const [passwordError, setPasswordError] = useState(initialPasswordError);
  const {isLoading,status,message} = useSelector (state=>state.registration)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });

    if (name === 'password') {
      const isLenthy = value.length >= 8;
      const hasLower = /[a-z]/.test(value);
      const hasUpper = /[A-Z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpclChr = /[$*#&=@]/.test(value);

      setPasswordError({
        isLenthy,
        hasLower,
        hasUpper,
        hasNumber,
        hasSpclChr,
      });
    }
    if (name==='confirmPass'){
        

      setPasswordError({
      ...passwordError,
      confirmPass: newUser.password ===value,

      });
  };
}
 const handleOnsubmit= (e) => { 
    e.preventDefault();
    //console.log(newUser)
    dispatch(newUserRegistration(newUser))
 }
  return (
    <Container className="mb-2 box-form custom-box-form">
      <Row>
        <Col>
          <h1 className="text-info">Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
         {message &&<Alert variant={status==='success' ? 'success' : 'danger'}>{message}</Alert>}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleOnsubmit}>
            <Form.Group className="mb-0" controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleOnChange}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group className="mb-0" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-0" controlId="formUsername">
              <Form.Label>Company name </Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={newUser.company}
                onChange={handleOnChange}
                placeholder="the name of the company"
              />
            </Form.Group>

            <Form.Group className="mb-0" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={newUser.phone}
                onChange={handleOnChange}
                placeholder="Enter your phone number"
              />
            </Form.Group>

            <Form.Group className="mb-0" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleOnChange}
                placeholder="Enter your address"
              />
            </Form.Group>

            <Form.Group className="mb-0" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleOnChange}
                placeholder="Enter a password"
              />
            </Form.Group>

            <Form.Group className="mb-0" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPass"
                value={newUser.confirmPass}
                onChange={handleOnChange}
                placeholder="Confirm password"
              />
            </Form.Group>
            <Form.Text>
                {!passwordError.confirmPass && (<div className='text-danger mb-3'> Password doesn't match ! </div>)}
            </Form.Text>

            <ul className="mb-4">
              <li className={passwordError.isLenthy ? 'text-success' : 'text-danger'}>
                Min 8 characters
              </li>
              <li className={passwordError.hasUpper ? 'text-success' : 'text-danger'}>
                At least one upper case
              </li>
              <li className={passwordError.hasLower ? 'text-success' : 'text-danger'}>
                At least one lower case
              </li>
              <li className={passwordError.hasNumber ? 'text-success' : 'text-danger'}>
                At least one number
              </li>
              <li className={passwordError.hasSpclChr ? 'text-success' : 'text-danger'}>
                At least one of the special characters i.e $ * # & = @
              </li>
            </ul>

            <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false)}>
              Submit
            </Button>
            {isLoading && <Spinner variant='info' animation='border'/>}
          </Form>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
            Already have an account {' '} <a href="/"> Login Now</a>
        </Col>
      </Row>
    </Container>
  );
};

