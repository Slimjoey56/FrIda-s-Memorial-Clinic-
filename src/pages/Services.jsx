import ServicesGrid from '../components/ServicesGrid.jsx';

export default function Services(){
  return (
    <main className="py-5" style={{paddingTop:'7rem'}}>
      <div className="container">
        <header className="mb-4">
          <h1 className="section-title">All Services</h1>
          <p className="text-secondary">From primary care to surgical subspecialties, explore what we offer.</p>
        </header>

        <ServicesGrid />
      </div>
    </main>
  );
}
