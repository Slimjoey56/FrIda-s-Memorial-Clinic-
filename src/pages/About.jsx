export default function About(){
  return (
    <main className="py-5" style={{paddingTop:'7rem'}}>
      <div className="container">
        <header className="mb-4">
          <h1 className="section-title">About Us</h1>
          <p className="text-secondary">
            We are a modern healthcare facility delivering safe, patient-centered care with a multidisciplinary team.
          </p>
        </header>

        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-up">
            <img
              src="https://images.unsplash.com/photo-1586773860383-dab5f6bbaed8?q=80&w=1600&auto=format&fit=crop"
              alt="Hospital exterior"
              className="w-100 rounded-4 shadow"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <h4 className="fw-bold">Our Promise</h4>
            <ul className="text-secondary">
              <li>Evidence-based medicine & continuous quality improvement</li>
              <li>Skilled specialists and advanced diagnostics</li>
              <li>Respect, privacy, and transparent communication</li>
              <li>Emergency care available 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
