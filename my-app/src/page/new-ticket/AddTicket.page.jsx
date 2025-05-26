import React from 'react'
import { Container , Row , Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'




export const AddTicket = () => {
  
   /* useEffect(()=>{}, [frmData,frmDataError]);
    const handleOnChange = e =>{
        const{name,value}= e.target*/

      

       /* setFrmData({
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
    }*/
  return (
    <Container>
        <Row>
            <Col>
                <PageBreadcrumb page="New Ticket"/>
            </Col>
        </Row>
        <Row>
            <Col>
             <AddTicketForm/>
            </Col>
        </Row>
    </Container>
  )
}
