import React from 'react'
import { Table , } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const TicketTable = ({Tickets}) => {
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
      {Tickets.length ? Tickets.map((row) =>(<tr key={row.id}>
          <td>{row.id}</td>
          <td>
          <Link to={`/ticket/${row.id}`}>{row.subject}</Link>
          </td>

          <td>{row.status}</td>
          <td>{row.addedAt}</td>
        </tr>
        
     )) : 
    
        <tr>
          <td colSpan="4" className='text-center'>no ticket to show{""}</td>
        </tr>
      }
        
      </tbody>
      </Table>
  )
}

