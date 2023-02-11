import React from 'react';
import { Link } from 'react-router-dom'
import { FaAngleRight, FaBell } from 'react-icons/fa';
import ContactForm from './ContactForm'
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';


const Services = () => {
  return (
    <div className="container">
      <div className="row text-dark bg-light border-bottom">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 my-4">
              <h2 className='text-start'><FaBell className='text-warning' size={35} /> Featured Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            <img src={img1} className="d-block w-100 h-20" alt="logo1" />
            </div>
            <div className="col-md-8 text-start">
              <h6>At vero eos et accusamus et iusto odio</h6>
              <p className='text-secondary'>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi quisquam est, qui dolorem ipsum sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum.</p>
              <Link className='text-warning'>Read More...</Link>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
            <img src={img2} className="d-block w-100 h-20" alt="logo2" />
            </div>
            <div className="col-md-8 text-start">
              <h6>Et harum quidem rerum facilis expedita distinctio</h6>
              <p className='text-secondary'>Nam libero tempore, cum soluta nobis eseligendi optio cumque dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsumnihil impedit quo minus id sumnda esis repellendus. Temporibus autem quibusdam et aut officiis debitis.</p>
              <Link className='text-warning'>Read More...</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 bg-dark px-2">
          <ContactForm />
        </div>
      </div>
      <div className="row bg-dark text-light text-start px-4 py-4">
        <div className="col-md-8 border-end">
          <div className="row ">
            <h2>Main Services</h2>
            <h6 className='my-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h6>
            <p className='text-secondary'>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enigm ipsam voluptatem nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Inventore veritatis et quasi architecto<br /></u></Link>
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Beatae vitae dicta sunt explicabo<br /></u></Link>
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Nemo enim ipsam voluptatem quivolupta<br /></u></Link>
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Sit aspernatur aut odit aut fugit sed<br /></u></Link>
            </div>
            <div className="col-md-6">
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Inventore veritatis et quasi architecto<br /></u></Link>
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Beatae vitae dicta sunt explicabo<br /></u></Link>
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Nemo enim ipsam voluptatem quivolupta<br /></u></Link>
              <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Sit aspernatur aut odit aut fugit sed<br /></u></Link>
            </div>
          </div>
          <button className="btn btn-light px-4 my-5">Read More</button>
        </div>
        <div className="col-md-4">
          <h2 className='mb-5'>Special Offers</h2>
          <div className="row">
            <div className="col-md-6">
            <img src={img3} className="d-block w-100 h-20" alt="logo3" />
            </div>
            <div className="col-md-6">
              <h6>Sed ut perspiciatis</h6>
              <p className='text-secondary'>Lorem ipsum dolor tur adipisicing elited do eiusmod tempor incididunt.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
            <img src={img4} className="d-block w-100 h-20" alt="logo4" />
            </div>
            <div className="col-md-6">
              <h6>Totam aperiam</h6>
              <p className='text-secondary'>Ut enim ad minim veniam, quis exercitation ullaco laboris nisi ut aliquip.</p>
            </div>
          </div>
          <button className="btn btn-light px-4 mt-4">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Services