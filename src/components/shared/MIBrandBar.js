import React    from 'react';
import { Link } from 'react-router-dom';

const MIBrandBar = () => {
  return(
    <nav className="navbar mi-brand-bar justify-content-end">
      <Link className="nav-link text-white" to="http://www.michigan.gov/treasury" target="_blank">Home</Link>
      <Link className="nav-link text-white" to="http://www.michigan.gov/treasury/0,4679,7-121--8483--,00.html" target="_blank">Contact</Link>
      <Link className="nav-link text-white" to="http://www.michigan.gov/" title="MI Gov Home">
        <img src="../img/mi-white-logo-xs.png" alt="MI Gov Home" height="20" width="20" />
        MI.gov
      </Link>
    </nav>
  );
}

export default MIBrandBar;
