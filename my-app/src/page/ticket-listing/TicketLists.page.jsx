import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchAllTickets } from './ticketAction';
import { Container,Row, Col, Breadcrumb, Button } from 'react-bootstrap'
import { SearchForm } from '../../components/search-form/SearchForm.comp'
import { TicketTable } from '../../components/TicketTable/TicketTable.comp'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export const TicketLists = () => {
    const dispatch = useDispatch()


    useEffect(() => {
  dispatch(fetchAllTickets());
}, [dispatch]); 
    return (
    <Container>
        <Row>
            <Col>
                <Breadcrumb page="Ticket Lists"/>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Link to='/add-ticket'>
                <Button variant='info'>Add New Ticket</Button>
            </Link>
            </Col>
            <Col className='text-right'>
                <SearchForm/>
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col>
                <TicketTable />
            </Col>
        </Row>
    </Container>
  )
}
TicketTable.propTypes = {
    Tickets: PropTypes.array.isRequired,
  };