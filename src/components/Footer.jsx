import { Link } from 'react-router-dom';

export default function Footer(){
  return (
    <footer className="footer mt-5 pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-4">
            <div className="brand d-flex align-items-center gap-2 mb-2">
              <img src="/logo.svg" width="28" height="28" alt="Hospital logo"/>
              <span>Frida Memorial Clinic</span>
            </div>
            <p className="text-opacity-75">Compassionate care powered by innovation. We’re here 24/7.</p>
          </div>
          <div className="col-md-6 col-lg-2">
            <h6 className="text-white-50">Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="text-white-50">Contact</h6>
            <ul className="list-unstyled">
              <li>Km 1, Health Avenue, City</li>
              <li><a href="tel:+233000000000">+233 00 000 0000</a></li>
              <li><a href="mailto:info@modernhospital.com">info@modernhospital.com</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <h6 className="text-white-50">Hours</h6>
            <p>Open 24 hours • Emergency ready</p>
          </div>
        </div>
        <hr className="border-secondary border-opacity-25 my-4" />
        <div className="small d-flex justify-content-between">
          <span>&copy; {new Date().getFullYear()} Frida Memorial Clinic</span>
          <span>Built with React & Bootstrap</span>
        </div>
      </div>
    </footer>
  );
}
