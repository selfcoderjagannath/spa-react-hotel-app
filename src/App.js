import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Rooms from './components/Rooms';
import Locations from './components/Locations';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Navigation basename="/spa-react-hotel-app" />
            <Routes>
                <Route path="/" exact element={<About />} />
                <Route path="/services" exact element={<Services />} />
                <Route path="/booking" exact element={<Booking />} />
                <Route path="/rooms" exact element={<Rooms />} />
                <Route path="/locations" exact element={<Locations />} />
                <Route path="/contactform" exact element={<ContactForm />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
