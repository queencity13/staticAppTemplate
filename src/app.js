import React             from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render }        from 'react-dom'

import './css/app.css';

import MIBrandBar       from  './components/shared/MIBrandBar';
import AppBar           from  './components/shared/AppBar';
import Breadcrumbs      from  './components/shared/Breadcrumbs';
import Footer           from  './components/shared/Footer';

const App = () => (

  <div>
    <MIBrandBar />
    <AppBar />
    <Breadcrumbs />
    <Footer />
  </div>
)

render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>

  , document.getElementById('mi-amar-local-spa'));