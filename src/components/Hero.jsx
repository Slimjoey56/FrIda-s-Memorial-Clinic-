export default function Hero(){
  return (
    <section className="hero">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-up">
            <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">Compassion • Expertise • Results</span>
            <h1 className="display-5 mt-3">World-class healthcare, close to home.</h1>
            <p className="lead text-secondary mt-3">
              Our multidisciplinary specialists deliver comprehensive care—from primary medicine to advanced surgery—in a single modern facility.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#book" className="btn btn-primary btn-lg px-4">Book Appointment</a>
              <a href="/services" className="btn btn-outline-primary btn-lg px-4">Explore Services</a>
            </div>
          </div>

          <div className="col-lg-6 text-center" data-aos="zoom-in" data-aos-delay="150">
            <img
              className="hero-img"
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
              alt="Modern hospital lobby"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
