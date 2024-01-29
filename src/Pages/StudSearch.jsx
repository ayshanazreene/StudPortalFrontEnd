import React from 'react'
import Header from '../Components/Header'
import StudTable from '../Components/StudTable'
import {viewStudProfileAPI} from '../services/allAPI'
import Footer from '../Components/Footer'

function StudSearch() {

  const handleSubmit = async (event) => {
    // event.preventDefault();

    // const name = document.getElementById('searchName').value
    // alert(name)
    // if (name) {
    //   // const result= await viewStudProfileAPI(1000)
    //   console.log(typeof viewStudProfileAPI(1000));
    // }
  }

  return (
    <>
      <Header />
      <h2 className='mt-5' style={{ marginLeft: '180px' }}>Search Student Data</h2>

      <form className="d-flex" >
        <input id="searchName" className="form-control me-sm-2" style={{ marginLeft: '750px' }} type="search" placeholder="Search by Name" />
        <button className="btn btn-secondary my-2 my-sm-0" onClick={handleSubmit}>Search</button>
      </form>
      <StudTable />
      <Footer/>
    </>
  )
}

export default StudSearch