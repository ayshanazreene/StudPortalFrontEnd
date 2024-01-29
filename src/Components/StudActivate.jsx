import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';


function StudActivate() {

    const [appID, setAppId]=useState({id:'99',status:'inactive'})

    function handleActivate(){
     setAppId({id:appID+1, status:'active'});
     alert("Student Profile Activated!");
    }
  return (
    <>
        <div style={{ width: '100%', height: '50px' }} className='bg-primary text-light p-2 ps-5 fs-5 fw-bolder align-items center'>Payment</div>
      <div className="payment">
        <Form noValidate onSubmit={handleActivate} className='w-75 p-3' style={{ marginLeft: '200px' }}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="">
              <Form.Label>Receipt No.</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="5 digit Receipt No."
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Button md="4" style={{height:'40px',marginTop:'10px'}} type="submit">Activate</Button>
            </Form.Group>
          
            
          </Row>
          </Form>
          </div>
    </>
  )
}

export default StudActivate