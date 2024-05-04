import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
const Nav = ({setSearch,cnt})=>{
  const [count,setCount]=useState(0)
  useEffect(()=>{
    let keys = Object.keys(localStorage)
    setCount(keys.length)
  },[cnt])

    return (
        <>
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand text-primary" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link to={'/'}>
        <li className="nav-item">
         <a className="nav-link active" aria-current="page">Home</a>
        </li>
        </Link>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <Link to={'/cart'}>
        <li className="nav-item">
          <a className="nav-link disabled"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg><span class="badge bg-danger ">{count}</span></a>
        </li>
        </Link>
      </ul>
      <form className="d-flex" role="search"> 
      {/* search */}
        <input className="form-control me-2" onInput={(e)=>setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
        </div>
        </>
    )
}

export default Nav