export default function Contact(){
  return (
    <main className="py-5" style={{paddingTop:'7rem'}}>
      <div className="container">
        <header className="mb-4">
          <h1 className="section-title">Contact Us</h1>
          <p className="text-secondary">We typically respond within one business day.</p>
        </header>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5>Send a message</h5>
                {/* You can wire this to Formspree or your backend later */}
                <form onSubmit={(e)=>e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Full name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input type="tel" className="form-control" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea rows="5" className="form-control" required></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5>Visit us</h5>
                <p className="mb-2">Km 1, Health Avenue, City</p>
                <p className="mb-2"><a href="tel:+233000000000">+233 00 000 0000</a></p>
                <p className="mb-3"><a href="mailto:info@modernhospital.com">info@modernhospital.com</a></p>
                <div className="ratio ratio-16x9">
                  <iframe
                    title="Map"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Kumasi&output=embed">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
