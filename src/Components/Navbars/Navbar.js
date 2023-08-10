import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Logo</a>
        
        <form className="d-flex mx-auto">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Hesabım</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sepetim</a>
            </li>
          </ul>
        </div>
        
        <FontAwesomeIcon icon={faUser} className="ml-3" />
        <FontAwesomeIcon icon={faShoppingCart} className="ml-3" />
      </div>
    </nav>
  );
}

export default Navbar;
