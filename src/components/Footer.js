import React from 'react';
import { Link } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaGoogle, FaInstagram, FaTachometerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark border-top">
      <div className="container text-light">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-xs-12 m-auto my-5">
            <p className='text-start'>Copyright © Domain Name All Rights Reserved | Design by <span className='text-warning font-wight-bold'><u>Jagannathselfcoder</u></span></p>
            <div className="d-flex justify-content-start">
              <Link className="nav-link border-end pe-2" aria-current="page" to="/">About Us</Link>
              <Link className="nav-link border-end pe-2 ps-2" aria-current="page" to="/services">Services</Link>
              <Link className="nav-link border-end pe-2 ps-2" aria-current="page" to="/booking">Booking</Link>
              <Link className="nav-link border-end pe-2 ps-2" aria-current="page" to="/rooms">Rooms</Link>
              <Link className="nav-link pe-2 ps-2" aria-current="page" to="/locations">Locations</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 my-5-md m-auto">
            <div className="d-flex justify-content-start">
              <Link className='mx-3 text-primary border p-2'><FaInstagram size={30} /></Link>
              <Link className='mx-3 text-primary border p-2'><FaFacebook size={30} /></Link>
              <Link className='mx-3 text-primary border p-2'><FaGoogle size={30} /></Link>
              <Link className='mx-3 text-primary border p-2'><FaTachometerAlt size={30} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer