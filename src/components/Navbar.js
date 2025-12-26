import React from 'react'
import '../App.css'
import PropTypes from 'prop-types'
import { Link, Router } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{backgroundColor:"#F6F4F3"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><div><h2 style={{margin:"0px"}}>TextUtils</h2></div><p style={{fontSize:"12px",margin:"0px"}}>one place for text formating</p></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">About</Link>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
    </>
)}
Navbar.propTypes = {
    title: PropTypes.string
}
// Navbar.defaultProps = {
//     title: "Set title here"
// }