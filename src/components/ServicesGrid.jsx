import ServiceCard from './ServiceCard.jsx';
import services from '../data/services.js';

export default function ServicesGrid({ limit }){
  const list = typeof limit==='number' ? services.slice(0, limit) : services;
  return (
    <div className="row g-4">
      {list.map(s => (
        <div className="col-md-6 col-lg-4" key={s.id}>
          <ServiceCard {...s}/>
        </div>
      ))}
    </div>
  );
}
