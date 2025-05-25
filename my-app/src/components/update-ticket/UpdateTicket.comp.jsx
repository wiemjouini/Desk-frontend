import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import {replyOnTicket} from '../../page/ticket-listing/ticketAction'
import PropTypes from 'prop-types'
//import { MessageHistory } from '../message-history/messageHistory.comp'

export const UpdateTicket = ({_id}) => {
 
  const dispatch = useDispatch()

  const {user: {name}} = useSelector(state => state.user )

  const [message,setMessage]=useState('')

   const handleOnChange = (e)=> {
        setMessage(e.target.value);
    }
    const handleOnSubmit = (e)=> {
      e.preventDefault()
     const msgObj = {
        message,
        sender :name,
      };
      dispatch(replyOnTicket(_id,msgObj))
      setMessage("")
    }

  return (
    <div>
      
    
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label><br />
      <Form.Text>Please reply your message here or update the ticket</Form.Text>
      
      <Form.Control 
        as="textarea"
        rows={5}
        value={message}
        name="detail"
        onChange={handleOnChange}
      />

      <div className='text-right mt-3 mb-3'>
        <Button variant='info' type='submit'>Reply</Button>
      </div>
    </Form>
    </div>
  )
}

 UpdateTicket.propTypes = {
  _id: PropTypes.string.isRequired,

}

