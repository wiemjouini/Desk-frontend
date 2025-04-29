import React, { useState,useEffect } from 'react'
import { Container,Row, Col, Breadcrumb, Button } from 'react-bootstrap'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/TicketTable/TicketTable.comp'
import Tickets from '../../assets/data/dummy-tickets.json'
import PropTypes from 'prop-types';


export const TicketLists = () => {
    const[str,setStr]=useState("")
    const[dispTicket,setDispTicket]=useState(Tickets);

    useEffect(()=>{},[str,dispTicket])
    
    
    const handleOnChange = (e) =>{
        const {value}=e.target;
        console.log(value)
        setStr(value);
        searchTicket(value)
    };
    const searchTicket = (sttr) =>{
        const displayTickets = Tickets.filter((row) =>
             row.subject.toLowerCase().includes(sttr.toLowerCase())
    );

    console.log(displayTickets)
    setDispTicket(displayTickets)
    }

 
    return (
    <Container>
        <Row>
            <Col>
                <Breadcrumb page="Ticket Lists"/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Button variant='info'>Add New Ticket</Button>
            </Col>
            <Col className='text-right'>
                <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <TicketTable Tickets={dispTicket}/>
            </Col>
        </Row>
    </Container>
  )
}
TicketTable.propTypes = {
    Tickets: PropTypes.array.isRequired,
  };