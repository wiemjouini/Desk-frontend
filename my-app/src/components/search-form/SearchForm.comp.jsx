import React from 'react'
import { Form, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types'


export const SearchForm = ({handleOnChange,str}) => {
  return (
    <div>
    <Form>
        <Form.Group as={Row}></Form.Group>
        <Form.Label column ms='2'>search : </Form.Label>
        <Col ms='9'>
            <Form.Control 
            name='searchStr'
            placeholder='search ...'
            onChange={handleOnChange}
            value={str}
            />
        </Col>
    </Form>

    </div>
  )
}
SearchForm.protoType = {
    handleOnChange :PropTypes.func.isRequired,
    str:PropTypes.string.isRequired
}
