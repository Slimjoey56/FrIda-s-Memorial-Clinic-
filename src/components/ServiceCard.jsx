import { useState, useEffect } from 'react';
//import './ServiceCard.css'; // your existing CSS file for the card
import './OverlayModal.css'; // the new CSS file for the modal

export default function ServiceCard({ 
  title, 
  desc, 
  img, 
  link,
  additionalDetails = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Apply styles to prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY.toString());
      
      // Prevent scrolling on html element as well (for some browsers)
      document.documentElement.style.overflow = 'hidden';
      
      return () => {
        // Restore scrolling when component unmounts or modal closes
        const scrollY = document.body.getAttribute('data-scroll-y');
        
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        
        // Restore scroll position
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY, 10));
        }
        
        document.body.removeAttribute('data-scroll-y');
      };
    }
  }, [isExpanded]);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
    }
  };

  // Handle keyboard navigation (ESC key to close)
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('keydown', handleEscapeKey);
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isExpanded]);

  // Features data for the modal
  const features = [
    { icon: "bi-check-circle-fill", text: "Professional consultation" },
    { icon: "bi-check-circle-fill", text: "24/7 support availability" },
    { icon: "bi-check-circle-fill", text: "Follow-up services" },
    { icon: "bi-check-circle-fill", text: "Certified specialists" },
    { icon: "bi-check-circle-fill", text: "Modern equipment" },
    { icon: "bi-check-circle-fill", text: "Comprehensive reports" }
  ];

  return (
    <>
      {/* Original Card - Keep your existing styling */}
      <div className="card service-card h-100" data-aos="fade-up">
        <img src={img} alt={title} className="thumb" loading="lazy"/>
        <div className="card-body">
          <h5 className="card-title mb-2">{title}</h5>
          <p className="card-text text-secondary">{desc}</p>
          
          <a 
            className="stretched-link text-primary" 
            href="#" 
            onClick={handleToggle}
            aria-label={`Read more about ${title}`}
          >
            Read More →
          </a>
        </div>
      </div>

      {/* Beautiful Full Screen Overlay Modal */}
      {isExpanded && (
        <div 
          className="modal-overlay" 
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button
              className="modal-close-btn"
              onClick={handleToggle}
              aria-label="Close modal"
              type="button"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="modal-content-wrapper">
              <div className="modal-content">
                
                {/* Hero Image */}
                <div className="modal-image-container">
                  <img 
                    src={img} 
                    alt={title} 
                    className="modal-image"
                  />
                  <div className="modal-image-overlay"></div>
                </div>

                {/* Title */}
                <h2 id="modal-title" className="modal-title">{title}</h2>

                {/* Description */}
                <p className="modal-description">{desc}</p>

                {/* Additional Details */}
                <div className="modal-details">
                  <h5 className="modal-section-title">Detailed Information</h5>
                  <p className="modal-details-text">{additionalDetails}</p>
                </div>

                {/* Features */}
                <div className="features-section">
                  <h5 className="modal-section-title">Key Features & Benefits</h5>
                  <div className="features-grid">
                    {features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <i className={`bi ${feature.icon} feature-icon`} aria-hidden="true"></i>
                        <p className="feature-text">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact/Action Section */}
                <div className="contact-section">
                  <div className="contact-content">
                    <div className="contact-info">
                      <h6>Ready to get started?</h6>
                      <p>Contact us today to schedule your appointment</p>
                    </div>
                    <button className="contact-btn" type="button">
                      <i className="bi bi-telephone" aria-hidden="true"></i>
                      Contact Us
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}