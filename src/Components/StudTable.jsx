import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { deleterStudProfileAPI, getAllStudProfileAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'

function StudTable() {
  const [allStudents, setAllStudents] = useState([])
  const [studDisplayProps, setStudDisplayProps] = useState([])

  useEffect(() => {
    getAllStudProfiles();

  }, [])


  const getAllStudProfiles = async () => {
    const result = await getAllStudProfileAPI()
    if (result.status === 200) {
      console.log(result);
      setAllStudents(result.data)
      // setStudDisplayProps(allStudents.getOwnPropertyNames)
      setStudDisplayProps(Object.keys(result.data[0]));
      console.log(Object.keys(result.data[0]));
    } else {
      console.log("API failed");
      setAllStudents([])
    }
  }
  const deleterStudProfile = async (id) => {
    await deleterStudProfileAPI(id)
    getAllStudProfiles();
  }
  return (
    <>
      <Table responsive className='mt-4'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>City</th>
            <th>Course</th>
            <th>Join Date</th>
            <th>Application Status</th>
            <th></th>


          </tr>
        </thead>
        <tbody>
          {
            allStudents?.length > 0 ? allStudents.map(student => (
              <tr key={student.id}>
                <td >{student.id}</td>
                <td>{student.fname + ' ' + student.lname}</td>
                <td>{student.city}</td>
                <td>{student.course}</td>
                <td>{student.joinDate}</td>
                <td>{student.appStatus}</td>
                <td className='d-flex'>
                  <div className="bg-primary border rounded " style={{ width: '60px', height: '40px' }}>
                    <Link to={"/profile"} state={{ id: student.id}} className="btn fw-bolder text-light" >View</Link>
                  </div>

                  <Link to={"/edit"} state={{ id: student.id}} className="btn fw-bolder text-tertiary" ><i className="fa-solid fa-pen-to-square"></i></Link>


                  <button className='btn' onClick={() => deleterStudProfile(student.id)}><i className='fa-solid fa-trash text-danger'></i></button>
                </td>

              </tr>
            )) : null
          }


        </tbody>
      </Table>
    </>
  )
}

export default StudTable