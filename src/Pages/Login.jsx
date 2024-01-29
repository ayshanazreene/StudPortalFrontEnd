import React, { useState,useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


function login() {
  const [loginUser, setLoginUser]=useState({})

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/dash`; 
    navigate(path);
  }

  useEffect(() => {
    localStorage.clear();
  }, [loginUser]);
  return (
    <>
     <div className='w-75 align-items-center' style={{margin:'90px'}}>
      <div className="row border shadow rounded pt-2 pb-2">
        <div className="col-lg-6">
          <img src="https://image.freepik.com/free-vector/hand-drawn-people-using-electronic-devices-illustration_23-2148136262.jpg" alt="" style={{width:'100%', height:'400px'}} />
        </div>
        <div className="col-lg-6 mt-3 p-5">
        
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
     
      <Link to="/dash" className="btn btn-primary">Submit</Link>
        
    </Form>
          
        </div>
      </div>
      </div> 

    </>
  )
}

export default login