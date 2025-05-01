import PropTypes from 'prop-types'
import React from 'react'
import { Container , Col , Row , Form , Button} from 'react-bootstrap'

export const LoginForm= ({handleOnChange ,FormSwitcher, handleOnSubmit , email ,password}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>client login</h1>
                <hr/>
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
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#!' onClick={()=>FormSwitcher('reset')}>forget password ? </a>
            </Col>
        </Row>
    </Container>
  )
}
LoginForm.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,
    FormSwitcher:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,


}
