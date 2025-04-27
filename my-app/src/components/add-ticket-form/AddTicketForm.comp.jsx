import React from 'react';
import { Container, Form, Button, Row , Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './addTicketForm.style.css'


export const AddTicketForm = ({ handleOnSubmit, frmDataError,handleOnChange ,frmDt}) => {
  return (
    <Container className="custom-container bg-light">
    <h1 className='text-info text-center'>Add New Ticket</h1>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Subject</Form.Label>
          <Col sm={9}>
          <Form.Control
            name="subject"
            placeholder="subject"
            onChange={handleOnChange}
            value={frmDt.subject}
            //minLength='3'
            maxLength='100'
            required
          />
            <Form.Text className='text-danger'>{frmDataError.subject && "subject is required"}</Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>Issue Date</Form.Label>
          <Col sm={9}>
          <Form.Control
            type="date"
            name="issueDate"
            value={frmDt.date}
            onChange={handleOnChange}
            required
          />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="details"
            rows="5"
            value={frmDt.details}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant='info' className="w-100" >Submit</Button>
      </Form>
    </Container>
  );
};
AddTicketForm.PropTypes = {
    handleOnSubmit :PropTypes.func.isRequired,
     handleOnChange : PropTypes.func.isRequired,
     frmDt : PropTypes.object.isRequired,
}


