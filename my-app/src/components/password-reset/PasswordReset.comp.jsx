import PropTypes from 'prop-types'
import React from 'react'
import { Container , Col , Row , Form , Button} from 'react-bootstrap'

export const ResetPassword= ({handleOnChange , handleOnResetSubmit ,email , FormSwitcher}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                  
                    <Button type='submit'>Reset Password</Button>
                </Form>
                <hr/>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='#!' onClick={()=>FormSwitcher('login')}> login now ? </a>
            </Col>
        </Row>
    </Container>
  )
}
ResetPassword.propTypes={
    handleOnChange:PropTypes.func.isRequired,
    handleOnResetSubmit:PropTypes.func.isRequired,
    email:PropTypes.string.isRequired
    

}