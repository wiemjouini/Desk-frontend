import PropTypes from 'prop-types'

import React from 'react'
import './message-history.style.css'
//import { replyMsg } from '../../page/ticket-listing/ticketSlice'
//import { Alert } from 'react-bootstrap'




export const MessageHistory = ({msg}) => {
 // const { replyMsg } = useSelector((state) => state.tickets);
  if(!msg) return null;
  
  console.log(msg)
  return msg.map((row,i)=>(
    <div key={i} className='message-history mt-3'>
         <div className='send font-weight-bold text-secondary'>
            <div className='sender'>{row.sender}</div>
            <div className='date'>{row.msgAt && new Date(row.msgAt).toLocaleString()}</div>
         </div>
         <div className='message'>{row.message}</div>
    </div>
  
))
  
  
}
MessageHistory.propTypes = {
  msg: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      msgAt: PropTypes.string,
      message: PropTypes.string
    })
  ).isRequired,
}
