import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Container,Col,Row ,Button,Spinner,Alert} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
//import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/messageHistory.comp';
import { UpdateTicket } from '../../components/update-ticket/UpdateTicket.comp';
import { useParams } from 'react-router-dom';
import { closeTicket, fetchSingleTicket } from '../ticket-listing/ticketAction';
import {resetResponseMsg} from '../ticket-listing/ticketSlice'



//const ticket=tickets[0]
export const Ticket = () => {
    //const { replyMsg } = useSelector((state) => state.tickets);
    const {tId}=useParams()
    const dispatch = useDispatch();
    const { isLoading, error, selectedTicket,replyMsg,replyTicketError } = useSelector(state => state.tickets);

useEffect(() => {
  // Quand tId change, on récupère le ticket
  dispatch(fetchSingleTicket(tId));

  // Cleanup function : reset les messages quand on quitte ou démonte
  return () => {
    if (replyMsg || replyTicketError) {
      dispatch(resetResponseMsg());
    }
  };
}, [tId, dispatch, replyMsg, replyTicketError]);

    
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="Ticket"/>
            </Col>
        </Row>
         <Row>
            <Col>
                {isLoading && <Spinner variant ='primary' animation="border"/>}
                {error && <Alert variant ='danger'>{error}</Alert>}
                {replyTicketError && <Alert variant ='danger'>{replyTicketError}</Alert>}
                {replyMsg && <Alert variant='success'>{replyMsg}</Alert>}
            </Col>
        </Row>
        <Row>
            <Col className='text-font-weight-bolder text-secondary'>
           


                     {selectedTicket?.subject && (
                     <>
                        <div className='subject'>Subject : {selectedTicket.subject}</div>
                        <div className='date'>Ticket Opened : {selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
                        <div className='status'>Status : {selectedTicket.status}</div>
                     </>
                    )}

            </Col>
            <Col className='text-right'>
                <Button variant="outline-info" onClick={()=>dispatch(closeTicket(tId))}
                disabled = {selectedTicket.status==="closed"}>Close Ticket</Button>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            
               {/*<MessageHistory msg={selectedTicket.conversation}/>*/}
               <MessageHistory msg={selectedTicket?.conversation || []}/>

            </Col>
        </Row>
        <hr/>
        <Row className='mt-4'>
            <Col>
            {/*<UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}/>*/}
            <UpdateTicket _id={tId} />
            </Col>
        </Row>
    </Container>
  )}

