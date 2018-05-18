import React             from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render }        from 'react-dom'

import './css/app.css';

import MIBrandBar       from  './components/shared/MIBrandBar';
import Footer           from  './components/shared/Footer';

const App = () => (

  <div>
    <MIBrandBar />
    <Footer />
  </div>
)

render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>

  , document.getElementById('staticAppTemplate'));