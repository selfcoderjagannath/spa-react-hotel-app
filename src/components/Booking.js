import React from 'react'
import { FaAngleRight, FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';




const Booking = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-dark bg-light">
          <div className="row">
            <div className="col-md-12 my-3">
              <h2 className='text-start'><FaBell className='text-warning' size={35} /> Best Proposition of This Month</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 m-auto text-start">
            <img src={img2} className="d-block w-100 h-20" alt="logo2" />
              <h6 className='my-2'>Lorem ipsum dolor amet consectetur</h6>
              <p className='text-secondary'>Adipisicing elito eiusmod tempor incididunt ut labore dolore magna.</p>
              <div className='d-flex justify-content-between border-bottom'>
                <p className='text-secondary'>Rooms</p>
                <p className='text-secondary'>2</p>
              </div>
              <div className='d-flex justify-content-between border-bottom my-2'>
                <p className='text-secondary'>Beds</p>
                <p className='text-secondary'>4</p>
              </div>
              <button className="btn btn-dark my-2">Book Room</button>
            </div>
            <div className="col-md-5 m-auto text-start border-start">
            <img src={img3} className="d-block w-100 h-20" alt="logo3" />
              <h6 className='my-2'>Lorem ipsum dolor amet consectetur</h6>
              <p className='text-secondary'>Adipisicing elito eiusmod tempor incididunt ut labore dolore magna.</p>
              <div className='d-flex justify-content-between border-bottom'>
                <p className='text-secondary'>Rooms</p>
                <p className='text-secondary'>2</p>
              </div>
              <div className='d-flex justify-content-between border-bottom my-2'>
                <p className='text-secondary'>Beds</p>
                <p className='text-secondary'>4</p>
              </div>
              <button className="btn btn-dark my-2">Book Room</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-light bg-dark border-bottom p-0">
          <ContactForm />
        </div>
      </div>
      <div className="row bg-dark text-light text-start px-4 py-4">
        <div className="col-md-8 border-end">
          <div className="row ">
            <h2>About Booking</h2>
            <h6 className='my-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</h6>
            <p className='text-secondary'>Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enigm ipsam voluptatem nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          </div>
          <div className="row">
            <div className="col-md-4">
            <img src={img1} className="d-block w-100 h-20" alt="logo1" />
            </div>
            <div className="col-md-8">
              <h6>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</h6>
              <p className='text-secondary'>Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga harum quidem rerum facilis est et expedita.</p>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-6 border-end">
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
          <button className="btn btn-light px-4">Read More</button>
        </div>
        <div className="col-md-4">
          <h2>Booking Info</h2>
          <h6 className='my-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h6>
          <p className='text-secondary'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <div className='my-4'>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Inventore veritatis et quasi architecto<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Beatae vitae dicta sunt explicabo<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Nemo enim ipsam voluptatem quivolupta<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Sit aspernatur aut odit aut fugit sed<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Inventore veritatis et quasi architecto<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Beatae vitae dicta sunt explicabo<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Nemo enim ipsam voluptatem quivolupta<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Sit aspernatur aut odit aut fugit sed<br /></u></Link>
            <Link className='text-warning'><span className='m-2'><FaAngleRight /></span><u>Inventore veritatis et quasi architecto<br /></u></Link>
          </div>
          <button className="btn btn-light px-4 mt-5">Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Booking