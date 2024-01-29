import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useLocation } from 'react-router-dom'
import { viewStudProfileAPI } from '../services/allAPI';
import { Table } from 'react-bootstrap';
import Footer from '../Components/Footer';

function StudProfileView(id) {

  const [student,setStudent]=useState({})
  let { state } = useLocation()
  console.log(state.id);


  useEffect(() => {
    viewStudProfile();
  }, []);

  const viewStudProfile = async () => {
    const result = await viewStudProfileAPI(state.id)
    if (result.status === 200) {
    console.log(result.data);
    setStudent(result.data)
    } else {
      console.log("API failed");
      setStudent({})
    }
  }




  return (

    <>
      <Header />
      <Table responsive className='mt-4 border' style={{marginLeft:'300px',width:'500px'}}>
        <thead>
          
        </thead>
        <tbody>
        
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Student ID:</td>
              <td>{student.id}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>First Name:</td>
              <td>{student.fname}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Last Name:</td>
              <td>{student.lname}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Username:</td>
              <td>{student.uname}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Address Line1:</td>
              <td>{student.addr1}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Address Line2:</td>
              <td>{student.addr2}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>City</td>
              <td>{student.city}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>State</td>
              <td>{student.state}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Zip</td>
              <td>{student.zip}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Course</td>
              <td>{student.course}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Joining Date</td>
              <td>{student.joinDate}</td>
            </tr>
            <tr className='' style={{fontSize:'.8rem',height:'30px'}}>
              <td className='fw-bolder'>Application Status</td>
              <td>{student.appStatus}</td>
            </tr>
            {/* <tr>
            <td className='d-flex align-items-center'>
                  
                  <button className='btn ms-1 '><i className="fa-solid fa-pen-to-square"></i></button>
                  <button className='btn' onClick={() => deleterStudProfile(student.id)}><i className='fa-solid fa-trash text-danger'></i></button>
                </td>
            </tr> */}

        </tbody>
      </Table>
      <Footer/>
    </>
  )
}

export default StudProfileView