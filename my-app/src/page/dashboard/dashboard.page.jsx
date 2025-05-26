import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {fetchAllTickets} from '../ticket-listing/ticketAction'
import { TicketTable } from '../../components/TicketTable/TicketTable.comp';
//import Tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const dispatch =useDispatch()
  //const { Tickets } = useSelector((state) => state.Tickets);
  const { tickets } = useSelector((state) => state.tickets);


 


  useEffect(() => {
   if (!tickets.length) {
     dispatch(fetchAllTickets());
   }
}, [tickets, dispatch]);

  const pendingTickets =tickets.filter(row=>row.status!=="closed");
  const totalTickets =tickets.length;
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="dashboard" />
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
        <Link to='/add-ticket'>
          <Button className="info" style={{ fontSize: '2rem', padding: '10px 30px' }}>
            Add new tickets
          </Button>
        </Link>
        </Col>
      </Row>

      <Row className="justify-content-center text-center">
            <div > Total Tickets : {totalTickets} </div>
            <div> Pending Tickets : {pendingTickets.length} </div>
      </Row>

      <Row>
        <Col className="mt-2">Recently added ticket</Col>
      </Row>

      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

