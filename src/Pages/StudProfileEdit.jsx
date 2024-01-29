import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { updateStudProfileAPI, viewStudProfileAPI } from '../services/allAPI';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Dropdown } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function StudProfileEdit(id) {
    var result
    const [studProfile, setStudProfile] = useState({})
    let { state } = useLocation()
    console.log(state.id);

    useEffect(() => {
        viewStudProfile();
        console.log(studProfile);

    }, []);

    const viewStudProfile = async () => {
        result = await viewStudProfileAPI(state.id)
        if (result.status === 200) {
            console.log(result.data);
            setStudProfile(result.data)
            //set data to local storage
            let { id, fname, lname, uname, addr1, addr2, city, state, zip, terms, course, joinDate, appStatus } = result.data;
            localStorage.setItem('id', id);
            localStorage.setItem('fname', fname);
            localStorage.setItem('lname', lname);
            localStorage.setItem('uname', uname);
            localStorage.setItem('addr1', addr1);
            localStorage.setItem('addr2', addr2);
            localStorage.setItem('city', city);
            localStorage.setItem('state', state);
            localStorage.setItem('zip', zip);
            localStorage.setItem('terms', terms);
            localStorage.setItem('course', course);
            localStorage.setItem('joinDate', joinDate);
            localStorage.setItem('appStatus', appStatus);

        } else {
            console.log("API failed");
            setStudProfile({})
        }
    }

    // const [studProfile, setStudProfile] = useState({
    //     id: "", fname: "", lname: "", uname: "", addr1: "", addr2: "", city: "", state: "", zip: "", terms: "false", course: "", joinDate: "", appStatus: "Incomplete"
    // })
    const [validated, setValidated] = useState(false);


    useEffect(() => {
        setStudProfile({ ...studProfile, appStatus: "Registrationcomplete" })
        // setStudID(studID + 1);
        // setStudProfile({ ...studProfile, id: studID })

    }, [validated]);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault(); +
                event.stopPropagation();
        }

        event.preventDefault();
        setValidated(true);
        console.log(studProfile);
        const result = await updateStudProfileAPI(state.id,studProfile);
        console.log(result);
    };

   

    const handleDropdown = (event, eventKey) => {
        console.log(eventKey.target.innerHTML);
        document.getElementById('dropdown-basic').innerHTML = eventKey.target.innerHTML
        setStudProfile({ ...studProfile, course: eventKey.target.innerHTML})
    };

 
    return (
        <>
        <Header/>
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
                                
                             value={localStorage.getItem('fname')}
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
                                value={localStorage.getItem('lname')}
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
                                    value={localStorage.getItem('uname')}
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
                            value={localStorage.getItem('addr1')}
                            onChange={e => setStudProfile({ ...studProfile, addr1: e.target.value })}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom08">
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="(optional)"
                            value={localStorage.getItem('addr2')}
                            onChange={e => setStudProfile({ ...studProfile, addr2: e.target.value })}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                    </Form.Group>


                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={localStorage.getItem('city')} placeholder="City" required onChange={e => setStudProfile({ ...studProfile, city: e.target.value })} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid city.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>State</Form.Label>
                            <Form.Control type="text" value={localStorage.getItem('state')} placeholder="State" required onChange={e => setStudProfile({ ...studProfile, state: e.target.value })} />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid state.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control type="text" value={localStorage.getItem('zip')} placeholder="Zip" required onChange={e => setStudProfile({ ...studProfile, zip: e.target.value })} />
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
                            defaultValue=""
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
                                    {localStorage.getItem('course')}
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
                                defaultValue={localStorage.getItem('joinDate')}
                                onChange={e => setStudProfile({ ...studProfile, joinDate: e.target.value })}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Button type="submit" className='me-3'>Update</Button>
                    <Button type="btn"  className='ms-auto'>Cancel</Button>
                </Form>
            </div>

     
            <Footer/>
        </>
    )
}

export default StudProfileEdit