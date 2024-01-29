import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <>
    <Header/>
    <div className='align-items-center text-light' style={{margin:'150px',width:'620px'}}>
      <div className="row border shadow rounded pt-2 pb-2 justify-content-between">
<div className="col-lg-6 bg-primary border rounded m-2" style={{width:'300px',height:'200px'}}>
<Link to="/register" className="btn fw-bolder fs-5" style={{margin:'75px'}}>Registration</Link>
</div>
<div className="col-lg-6 bg-primary border rounded m-2" style={{width:'300px',height:'200px'}}>
<Link to="/students" className="btn fw-bolder fs-5" style={{margin:'75px'}}>Student Data</Link>
</div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard