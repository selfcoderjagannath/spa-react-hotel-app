import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './ContactForm';
import FakeData from './FakeData';
import Package from './Package';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import page from '../images/page.jpg';




const About = () => {
  const [data, setData] = useState(FakeData)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 px-2">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 0"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100 h-20" alt="logo1" />
              </div>
              <div className="carousel-item">
              <img src={img2} className="d-block w-100 h-20" alt="logo2" />
              </div>
              <div className="carousel-item">
              <img src={img3} className="d-block w-100 h-20" alt="logo3" />
              </div>
              <div className="carousel-item">
              <img src={img4} className="d-block w-100 h-20" alt="logo4" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
        <div className="col-md-4 col-sm-12 col-xs-12 text-light px-1">
          <ContactForm />
        </div>
      </div>
      <div className="row">
        {
          data.map((value, i) => {
            return (
              <Package key={i + 1} newData={value} />
            )
          })
        }

      </div>
      <div className="row bg-dark text-light text-start px-4 py-4 py-5">
        <div className="col-md-8 col-sm-12 col-xs-12">
          <h2>Welcome to Our Hotel!</h2>
          <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</h6>
          <p className='text-secondary'>Incididunt ut labore dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className='text-secondary'>Duis aute irure dolorin reprehenderit in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <button className="btn btn-light px-4 mt-4">Read More</button>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <h2 className='mb-5'>About Us</h2>
          <div className="d-flex justify-content-between">
          <img src={page} className="d-block w-100 h-20" alt="page" />
            {/* <img src="./images/page.jpg" className="test5" alt="..." /> */}
            <p className='text-secondary text-start mx-4'><span className='text-light'>10.10.2011</span><br /><span>Lorem ipsum dolor sit amet, consectetur adipisicing elited do eiusmod tempor incididunt.</span></p>
          </div>
          <button className="btn btn-light px-4 mt-4">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About