import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import {uploadNewStudProfileAPI} from '../services/allAPI'


function StudReg() {

  const [studProfile, setStudProfile] = useState({
    id: 0, fname: "", lname: "", uname: "", addr1: "", addr2: "", city: "", state: "", zip: "", terms: "false", course: "", joinDate: "", appStatus: "Incomplete",receiptno:""
  })
  const [validated, setValidated] = useState(false);
  const [studID, setStudID] = useState(1000);

  useEffect(() => {
    setStudProfile({ ...studProfile, appStatus: "Registrationcomplete" })
    
  }, [validated]);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();+
      event.stopPropagation();
    }

    event.preventDefault();
    setValidated(true);
    
    console.log(studProfile);
   const result= await uploadNewStudProfileAPI(studProfile);
   console.log(result);
   alert("Registration Complete")
  };

  const handleClear = (event) => {

    setStudProfile({
      id: "", fname: "", lname: "", uname: "", addr1: "", addr2: "", city: "", state: "", zip: "", terms: "false", course: "", joinDate: "", appStatus: "Incomplete"
    })

  }

  const handleDropdown = (event, eventKey) => {
    console.log(eventKey.target.innerHTML);
    document.getElementById('dropdown-basic').innerHTML = eventKey.target.innerHTML
    setStudProfile({ ...studProfile, course: eventKey.target.innerHTML })
  };

 


  return (
    <>
      <div style={{ width: '100%', height: '50px' }} className='bg-primary text-light p-2 ps-5 fs-5 fw-bolder text-center'>Personal Details</div>

      <div className="personal">
        <Form id="regForm" noValidate validated={validated} onSubmit={handleSubmit} className='w-75 p-3' style={{ marginLeft: '200px' }}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
                onChange={e => setStudProfile({ ...studProfile, fname: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
                onChange={e => setStudProfile({ ...studProfile, lname: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={e => setStudProfile({ ...studProfile, uname: e.target.value })}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Form.Group as={Col} md="12" controlId="validationCustom07">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder=""
              defaultValue=""
              onChange={e => setStudProfile({ ...studProfile, addr1: e.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom08">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              type="text"
              placeholder="(optional)"
              defaultValue=""
              onChange={e => setStudProfile({ ...studProfile, addr2: e.target.value })}
            />
            <Form.Control.Feedback></Form.Control.Feedback>
          </Form.Group>


          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required onChange={e => setStudProfile({ ...studProfile, city: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required onChange={e => setStudProfile({ ...studProfile, state: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required onChange={e => setStudProfile({ ...studProfile, zip: e.target.value })} />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
              onChange={e => setStudProfile({ ...studProfile, terms: e.target.checked })}
            />
          </Form.Group>
          {/* <Button type="submit">Save</Button> */}
        </Form>
      </div>

      <div style={{ width: '100%', height: '50px' }} className='bg-primary text-light p-2 ps-5 fs-5 fw-bolder align-items center'>Educational Details</div>
      <div className="education">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='w-75 p-3' style={{ marginLeft: '200px' }}>
          <Row className="mb-3">

            <Form.Group as={Col} md="4" controlId="">
              <Form.Label>Course</Form.Label>
              <Dropdown onSelect={handleDropdown} >
                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                  Choose from the options
                </Dropdown.Toggle>

                <Dropdown.Menu >
                  <Dropdown.Item href="#" eventKey="1" className='fw-bolder'>MEARN Stack</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#" eventKey="2" className='fw-bolder'>Software Testing</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#" eventKey="3" className='fw-bolder'>Python Django</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#" eventKey="4" className='fw-bolder'>Java Programming</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#" eventKey="5" className='fw-bolder'>ASP.net MVC</Dropdown.Item>
                  <Dropdown.Divider />
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control.Feedback>Good</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom10">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Select Date"
                defaultValue=""
                onChange={e => setStudProfile({ ...studProfile, joinDate: e.target.value })}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

          </Row>

          <Button type="submit" className='me-3'>Register</Button>
          <Button type="btn" onClick={handleClear} className='ms-auto'>Clear</Button>
        </Form>
      </div>

      
    </>
  )
}

export default StudReg