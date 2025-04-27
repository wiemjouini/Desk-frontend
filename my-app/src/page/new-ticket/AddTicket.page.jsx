import React, { useState , useEffect} from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { shortText } from '../../utils/validation';

const initialFrmDt = {
    subject : "",
    issueDate: "",
    detail:"",
}
const initialFrmError = {
    subject : false,
    issueDate: false,
    detail :false
}

export const AddTicket = () => {
    const [frmData , setFrmData]=useState(initialFrmDt);
    const [frmDataError , setfrmDataError]=useState(initialFrmError);
    useEffect(()=>{}, [frmData,frmDataError]);
    const handleOnChange = e =>{
        const{name,value}= e.target

      

        setFrmData({
            ...initialFrmDt,
            [name]:value,
        });
       
    }
    const handleOnSubmit= async(e)=>{
        e.preventDefault()
        setfrmDataError(initialFrmError)
        const isSubjectValid= await shortText (frmData.subject)
        setfrmDataError({...initialFrmError,
            subject:!isSubjectValid
        })
        console.log('form submit request received',frmData)
    }
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
             <AddTicketForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
                frmDt={frmData}
                frmDataError={frmDataError}
             />
            </Col>
        </Row>
    </Container>
  )
}
