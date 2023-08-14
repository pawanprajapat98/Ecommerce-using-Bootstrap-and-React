import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { globalstate } from './App'

function Navbar() {
  const {gitem}=useContext(globalstate)
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src='./logonav.png' width='100px' height=''></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ms-1" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-3" to="/Product">Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-3" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ms-3" to="/Contact">Contact</Link>
        </li>
        
      </ul>
      <div className='btnn'>
           <Link to="" className='btn btn-outline-dark ms-2'><i class="fa-solid fa-right-to-bracket mx-2"></i>Login</Link>
           <Link to="" className='btn btn-outline-dark ms-2'><i class="fa-solid fa-user-plus mx-2"></i>Ragistration</Link>
           <Link to="/Cart" className='btn btn-outline-dark ms-2'><i class="fa-solid fa-cart-shopping mx-2"></i>Cart({gitem.length})</Link>

      </div>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
