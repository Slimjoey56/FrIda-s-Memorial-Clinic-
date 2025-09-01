import Hero from '../components/Hero.jsx';
import ServicesGrid from '../components/ServicesGrid.jsx';

export default function Home(){
  return (
    <>
      <Hero />

      {/* Services preview */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-3">
            <div>
              <h2 className="section-title">Our Services</h2>
              <p className="text-secondary mb-0">Integrated care across key specialties.</p>
            </div>
            <a href="/services" className="btn btn-outline-primary">See all</a>
          </div>
          <ServicesGrid limit={6}/>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8" data-aos="fade-right">
              <h3 className="mb-2">Need an appointment?</h3>
              <p className="text-secondary mb-0">Call our front desk or use the contact form to request a slot. Emergencies are prioritized.</p>
            </div>
            <div className="col-lg-4 text-lg-end" data-aos="fade-left">
              <a href="/contact" className="btn btn-primary btn-lg">Request now</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
