import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FaBell } from 'react-icons/fa'
import ContactForm from './ContactForm'
const Locations = () => {
  return (
    <>
      <div className="container">
        <div className="row bg-light">
          <h2 className='text-start my-2'><FaBell className='text-warning' size={35} /> Contact Form</h2>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12 text-start">
                <form>
                  <div className="form-group col-md-12 col-sm-12 mb-2">
                    <div className="row px-4">
                      <div className="col-md-2 py-2"><label>Name:</label></div>
                      <div className="col-md-10"><input type="text" className="form-control" id="inputEmail4" placeholder="Enter Your Name" name='name' /></div>
                    </div>
                  </div>
                  <div className="form-group col-md-12 col-sm-12 mb-2">
                    <div className="row px-4">
                      <div className="col-md-2 py-2"><label>Address:</label></div>
                      <div className="col-md-10"><input type="text" className="form-control" id="inputEmail5" placeholder="address" name='email' /></div>
                    </div>
                  </div>
                  <div className="form-group col-md-12 col-sm-12 mb-2">
                    <div className="row px-4">
                      <div className="col-md-2 py-2"><label>Email:</label></div>
                      <div className="col-md-10"><input type="email" className="form-control" id="inputEmail5" placeholder="example@gmail.com" name='email' /></div>
                    </div>
                  </div>
                  <div className="form-group col-md-12 mb-2">
                    <div className="row px-4">
                      <div className="col-md-2 py-2"> <label>Contact:</label></div>
                      <div className="col-md-10"><textarea type="text" className="form-control" rows={13} id="inputEmail5" placeholder="Home Phone Number" name='email' />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end my-4">
                    <button className="btn btn-dark mx-4 btn-outline-light">Clear</button>
                    <button className="btn btn-dark btn-outline-light">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-4 bg-dark border-bottom">
            <ContactForm />
          </div>
        </div>
        <div className="row text-start bg-dark text-light">
          <h2 className="my-4">Our Contacts</h2>
          <div className="col-md-4 text-start border-end my-4">
            <h6>USA</h6>
            <p>8901 Marmora Road, Glasgow, D04</p>
            <div className="row">
              <div className="col-md-4">
                <small>Freephone:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 559 6580</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Telephone:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 603 6035</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Fax:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 889 9898</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Email:</small>
              </div>
              <div className="col-md-8">
                <small className='text-warning'>mail@demolink.org</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-start border-end my-4">
            <h6>Canada</h6>
            <p>8901 Marmora Road, Glasgow, D04</p>
            <div className="row">
              <div className="col-md-4">
                <small>Freephone:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 559 6580</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Telephone:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 603 6035</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Fax:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 889 9898</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Email:</small>
              </div>
              <div className="col-md-8">
                <small className='text-warning'>mail@demolink.org</small>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-start my-4">
            <h6>Mexico</h6>
            <p>8901 Marmora Road, Glasgow, D04</p>
            <div className="row">
              <div className="col-md-4">
                <small>Freephone:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 559 6580</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Telephone:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 603 6035</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Fax:</small>
              </div>
              <div className="col-md-8">
                <small>+1 800 889 9898</small>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <small>Email:</small>
              </div>
              <div className="col-md-8">
                <small className='text-warning'>mail@demolink.org</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locations