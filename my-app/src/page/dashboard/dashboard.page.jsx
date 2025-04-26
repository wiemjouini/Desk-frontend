import React from 'react'
import { Container , Row , Col , Button } from 'react-bootstrap'
import { TicketTable } from '../../components/TicketTable/TicketTable.comp'
import Tickets from '../../assets/data/dummy-tickets.json'


export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col className='text-center mt-5 mb-2'>
               <Button className='info' style={{"font-size":'2rem', padding:"10px 30px"}}>Add new tickets</Button>
            </Col>
        </Row>
        <Row className="justify-content-center text-center">
            <div > Total Tickets : 50 </div>
            <div> Pending Tickets : 5 </div>
        </Row>
        <Row>
            <div className='mt-2'> Recently added ticket</div>
        </Row> 
        <hr/>
        <Row>
            <div className='recent-ticket' T><TicketTable Tickets={Tickets} />
        </div>

        </Row>
    </Container>
  )
}
