import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/dash">
<img id='logo' src="/logo.png" alt="" style={{width:'160px'}}/>

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ms-auto " style={{float:'right'}}>
        <li className="nav-item">
          <Link className="nav-link active" to="/dash">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Student Data</a>
          <div className="dropdown-menu">
            {/* <a className="dropdown-item" href="/register">Registration</a> */}
            <div className="dropdown-item">
            <Link to="/register" className="text-decoration-none text-light" >Registration</Link>
            </div>
            <div className="dropdown-divider"></div>
            <div className="dropdown-item">
            <Link to="/students" className="text-decoration-none text-light" >Profile Search</Link>
            </div>
            {/* <a className="dropdown-item" href="/students">Profile Search</a> */}
            
          </div>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header