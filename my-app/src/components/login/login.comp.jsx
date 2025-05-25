import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { loginPending, loginSuccess, loginFail } from './loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../page/dashboard/userAction';

// ✅ Import the CSS file that handles background and form styling
import './login-background.css';

export const LoginForm = ({ FormSwitcher }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

  useEffect(() => {
    const accessJWT = sessionStorage.getItem('accessJWT');
    if (isAuth && accessJWT) {
      navigate('/dashboard');
    }
  }, [isAuth, navigate]);

  const [email, setEmail] = useState('wiem757@gmail.com');
  const [password, setPassword] = useState('hello1234');

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Fill up all the form!');
    }

    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });
      if (isAuth.status === 'error') {
        return dispatch(loginFail(isAuth.message));
      }

      dispatch(loginSuccess());
      dispatch(getUserProfile());
      navigate('/dashboard');
    } catch (error) {
      dispatch(loginFail(error.message));
    }
  };

  return (
    // ✅ Added className="login-bg" for background image and layout from CSS
    <Container fluid className="login-bg">
      {/* ✅ Wrapped form in a div with className="form-wrapper" to apply styling */}
      <div className="form-wrapper">
        <h1>Client Login</h1>
        <hr />
        {error && <Alert variant="danger">{error}</Alert>}

        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button type="submit">Login</Button>
          {isLoading && <Spinner variant="primary" animation="border" />}
        </Form>

        <hr />
        <a href="#!" onClick={() => FormSwitcher('reset')}>
          Forget password?
        </a>
      </div>
    </Container>
  );
};

LoginForm.propTypes = {
  FormSwitcher: PropTypes.func.isRequired,
};

