import React    from 'react';
import { Link } from 'react-router-dom';

const AppBar = () => {

  return (
    <nav className="navbar navbar-expand-lg meg-nav text-white bg-primary">
      <Link to="/" className="navbar-brand meg-logo mr-auto">
        <img className="mr-2" src="mi-meg-white-logo-xs.png" alt="MI Logo" width="150" height="60" />
        <h3 className="text-white font-weight-light">AMAR LOCAL PORTAL</h3>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>  
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav app-bar-icons">
          <li className="nav-item">
            <div className="btn-group">
              <button 
                className="btn bmd-btn-icon dropdown-toggle ml-3"
                type="button"
                id="toggle-app-menu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="material-icons">apps</i>
              </button>  
              <div className="dropdown-menu dropdown-menu-right app-dropdown-content" aria-labelledby="toggle-app-menu" id="app-switcher">
              </div>
            </div>
          </li>
          <li className="nav-item">
            <div className="btn-group">
              <button
                className="btn bmd-btn-icon dropdown-toggle profile-icon ml-3"
                type="button"
                id="toggle-profile-menu"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <i className="material-icons md-48">account_circle</i>
              </button>  
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="toggle-profile-menu" id="profile">
                <div className="dropdown-item disabled ml-3 pb-1">
                  <p className="weight-regular mb-0 text-dark">Sandy Brown</p>
                  <p className="font-weight-light mb-0">sandybrown@mail.com</p>
                </div>
                <div className="profile-btns">
                  <div className="dropdown-item">
                    <a className="text-success" href="../../../tower/admin/my-account.html">My Account</a>
                  </div>
                  <div className="dropdown-item">
                    <a className="text-success" href="../../../tower/admin/login.html">Sign Out</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppBar;
