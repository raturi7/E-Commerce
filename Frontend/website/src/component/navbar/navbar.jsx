import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMicrophone, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import DropDown from'../dropDown/DropDown';

function navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3'>
        <a className="navbar-brand" href="#">Logo</a>

        <DropDown/>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <form class="form-inline d-flex my-2 my-lg-0 w-75">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
         
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> <FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit"> <FontAwesomeIcon icon={faMicrophone} /></button>
        </form>

        <div classname
          ="collapse navbar-collapse " id="navbarNav">
          <ul className='navbar-nav'>
            <li className='nav-item '>
              <a className='nav-link btn-outline-success'><FontAwesomeIcon className='size' icon={faCartShopping} /></a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>About</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link'>Skills</a>
            </li>
            {/* <li className='nav-item'>
              <a className='nav-link'>Contact Us</a>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* construct it for the mobile view */}
      {/* <button className="navbar bg-light navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
    </>
  )
}

export default navbar
