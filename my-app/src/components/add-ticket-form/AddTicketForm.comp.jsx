import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col ,Spinner,Alert} from 'react-bootstrap';
import { shortText } from '../../utils/validation';
import { useDispatch ,useSelector } from 'react-redux';
import './addTicketForm.style.css';
import { openNewTicket } from './addTicketAction';

const initialFrmDt = {
  subject: "",
  issueDate: "",
  message: "",
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const AddTicketForm = () => {
  const dispatch = useDispatch()

  const {user : {name}} =useSelector(state => state.user );
  const { isLoading, error, successMsg } = useSelector(state => state.openTicket);


  const [frmData, setFrmData] = useState(initialFrmDt);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

  const handleOnChange = e => {
    const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    const updatedError = {
      ...initialFrmError,
      subject: !isSubjectValid,
    };
     setFrmDataError(updatedError);


     dispatch(openNewTicket({...frmData,sender: name}))
   /* const hasError = Object.values(updatedError).some(error => error === true);
    if (hasError) return;
     console.log("Form submitted ✅", frmData);*/ // dispatch or API call here
  };
 

  return (
    <Container className="custom-container bg-light">
      <h1 className='text-info text-center'>Add New Ticket</h1>

      <div> 
      {error && <Alert variant='danger'>{error}</Alert>}
      {successMsg && <Alert variant='danger'>{successMsg}</Alert>}
      {isLoading && <Alert variant='primary' animation ="border"/>}
        </div>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        
        <Form.Group as={Row}>
          <Form.Label column sm={3}>Subject</Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              placeholder="Subject"
              onChange={handleOnChange}
              value={frmData.subject}
              maxLength="100"
              required
              isInvalid={frmDataError.subject}
            />
            <Form.Control.Feedback type="invalid">
              Subject is required
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mt-3">
          <Form.Label column sm={3}>Issue Date</Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="5"
            value={frmData.detail}
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" className="w-100 mt-4"> Open Ticket </Button>
      </Form>
    </Container>
  );
};

/*AddTicketForm.PropTypes = {
    handleOnSubmit :PropTypes.func.isRequired,
     handleOnChange : PropTypes.func.isRequired,
     frmDt : PropTypes.object.isRequired,
}*/


