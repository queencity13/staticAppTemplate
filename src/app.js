import React             from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render }        from 'react-dom'

import './css/app.css';

import AppBar       from  './components/shared/AppBar';
import Footer           from  './components/shared/Footer';

const App = () => (

  <div>
    <AppBar />
    <Footer />
  </div>
)

render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>

  , document.getElementById('staticAppTemplate'));