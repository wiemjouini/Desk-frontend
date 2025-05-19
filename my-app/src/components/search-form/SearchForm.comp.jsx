import React from 'react'
import { Form, Row, Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {filterSearchTicket} from '../../page/ticket-listing/ticketAction';


export const SearchForm = () => {
  const dispatch = useDispatch()
  const handleOnChange = e =>{
    const {value} = e.target
    dispatch(filterSearchTicket(value))

  }
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
           
            />
        </Col>
    </Form>

    </div>
  )
}
