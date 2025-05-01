import React, { useEffect, useState } from 'react'
import { Container,Col,Row } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/messageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from 'react-router-dom';


//const ticket=tickets[0]
export const Ticket = () => {
    const {tId}=useParams()
    const [message,setMessage]=useState("")
    const [Ticket,setTicket]=useState("")
 


    useEffect(() => {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].id == tId) {
                setTicket(tickets[i]);
                break; // break au lieu de continue
            }
        }
    }, [tId]);
    
      

    const handleOnChange = (e)=> {
        setMessage(e.target.value);
    }
    const handleOnSubmit = (e)=> {
        alert("form submitted !")
    }

  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-font-weight-bolder text-secondary'>
            {/*{tId}*/}
                <div className='subject'>Subject : {Ticket.subject}</div>
                <div className='date'>Ticket Opened : {Ticket.addedAt}</div>
                <div className='status'>Status : {Ticket.status}</div>
            </Col>
            <Col className='text-right'>
                <button variant="outline-info">close ticket</button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            
               <MessageHistory msg={Ticket.history}/>
            </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
            <Col>
            <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  );
}
