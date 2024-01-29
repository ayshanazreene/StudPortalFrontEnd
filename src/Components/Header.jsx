import React from 'react'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/dash">
<img id='logo' src="src\assets\logo.png" alt="" style={{width:'160px'}}/>

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ms-auto " style={{float:'right'}}>
        <li className="nav-item">
          <a className="nav-link active" href="/dash">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Student Data</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/register">Registration</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/students">Profile Search</a>
            
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