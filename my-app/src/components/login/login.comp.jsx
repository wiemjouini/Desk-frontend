

import PropTypes from 'prop-types'
import React ,{useEffect, useState} from 'react'
import { Container , Col , Row , Form , Button,Spinner,Alert} from 'react-bootstrap';
import {loginPending, loginSuccess,loginFail} from'./loginSlice';
import { useDispatch , useSelector } from 'react-redux';
import{userLogin}from '../../api/userApi';
import { useNavigate } from "react-router-dom";
import {getUserProfile} from '../../page/dashboard/userAction'


export const LoginForm= ({FormSwitcher}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const {isLoading,isAuth,error}=useSelector(state=>state.login)



 
useEffect(() => {
  const accessJWT = sessionStorage.getItem('accessJWT');
  if (isAuth && accessJWT) {
    navigate('/dashboard');
  }
}, [isAuth, navigate]);





  const [email,setEmail]=useState('wiem757@gmail.com')
  const [password,setPassword]=useState('hello1234')
  
  const handleOnChange = (e) =>{
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
const handleOnSubmit = async (e) => {
  e.preventDefault();
  if (!email || !password) {
    return alert("Fill up all the form!");
  }

  dispatch(loginPending());

  try {
    const isAuth = await userLogin({ email, password });
    if(isAuth.status ==='error'){
     return dispatch(loginFail(isAuth.message));
    };
    dispatch(loginSuccess());
    dispatch(getUserProfile())
   navigate("/dashboard");
    console.log(isAuth);
  } catch (error) {
    dispatch(loginFail(error.message));
  }
};


  return (


    <Container>
        <Row>
            <Col>
                <h1> Authentification </h1>
                <hr/>
                 {error && <Alert variant='danger'>{error}</Alert>}
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter Email'
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Enter password'
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>
                    <Button type='submit'>Login</Button>
                    {isLoading && <Spinner variant='primary' animation='border'/>}
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#!' onClick={()=>FormSwitcher('reset')}>forget password ? </a>
            </Col>
        </Row>

         <Row>
            <Col>Are you new here {' '}
                <a href='Registration' >Register Now </a>
            </Col>
        </Row>
    </Container>
  )
}
LoginForm.propTypes={
   
    FormSwitcher:PropTypes.func.isRequired,
    


}