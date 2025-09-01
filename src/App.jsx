import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

import Topbar from './components/Topbar.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App(){
  useEffect(()=>{ AOS.init({ duration:900, once:true, offset:80 }); },[]);
  return (
    <>
      <Topbar />
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}
