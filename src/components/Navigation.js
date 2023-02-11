import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 text-start my-2">
                    <h1 className='text-warning my-3 display-4 font-weight-bold'>Lounge<span className='text-light'>Hotel</span></h1>
                </div>
                <div className="col-md-6 text-light text-end mt-4">
                    <p><span className='text-secondary'>LoungeHotel 9863 - 9867 Mill Road, LA, MG09 99HT</span>
                        <br /><span>Freephone:   +1 800 559 6580</span></p>
                </div>
            </div>
            <div className="row">
                <div className="d-flex justify-content-between p-0">
                    <button className="btn btn-danger btn-outline-dark text-light w-100 border-end"><NavLink className="nav-link" aria-current="page" to="/">About Us</NavLink></button>
                    <button className="btn btn-danger btn-outline-dark text-light w-100 border-end"><NavLink className="nav-link" aria-current="page" to="/services">Services</NavLink></button>
                    <button className="btn btn-danger btn-outline-dark text-light w-100 border-end"><NavLink className="nav-link" aria-current="page" to="/booking">Booking</NavLink></button>
                    <button className="btn btn-danger btn-outline-dark text-light w-100 border-end"><NavLink className="nav-link" aria-current="page" to="/rooms">Rooms</NavLink></button>
                    <button className="btn btn-danger btn-outline-dark text-light w-100 border-end"><NavLink className="nav-link" aria-current="page" to="/locations">Locations</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;

