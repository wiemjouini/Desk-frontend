import React from 'react'
import { Form,Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { MessageHistory } from '../message-history/messageHistory.comp'
export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
  return (
    <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label><br/>
        <Form.Text>please reply your message here or update the ticket</Form.Text>
        <Form.Control 
        as='textarea'
        value={msg} 
        name=""
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        row="5" 
        name='detail'></Form.Control>
        <div className='text-right mt-3 mb-3'>
        <Button variant='info' type='submit'>Reply</Button>
        </div>
        
    </Form>
  )
}
MessageHistory.propTypes={
    msg: PropTypes.string.isRequired,
    handleOnChange:PropTypes.func.isRequired,
    handleOnSubmit:PropTypes.func.isRequired,

}
