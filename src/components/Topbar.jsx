import { BsTelephone, BsEnvelope } from 'react-icons/bs';

export default function Topbar(){
  return (
    <div className="topbar py-2">
      <div className="container d-flex flex-wrap gap-3 justify-content-between align-items-center">
        <div className="d-flex gap-4 small">
          <span className="d-flex align-items-center gap-2">
            <BsTelephone aria-hidden="true"/> <a href="tel:+233000000000">+233 00 000 0000</a>
          </span>
          <span className="d-none d-md-inline d-flex align-items-center gap-2">
            <BsEnvelope aria-hidden="true"/> <a href="mailto:info@modernhospital.com">info@modernhospital.com</a>
          </span>
        </div>
        <div className="small">
          Open 24/7 • Emergency Care Available
        </div>
      </div>
    </div>
  );
}
