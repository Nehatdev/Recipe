import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './Nav';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Categories } from './Categories';
import { Country } from './Country';
import { Countryitem } from './Countryitem';
import { Menuitems } from './Menuitems';
import Ingredients from './Ingredients';
import { Allitems } from './Allitems';
import { Provider } from 'react-redux';
import { Store } from './Store'; 
import Favourites from './Favourites';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}> 
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cat' element={<Categories />} />
          <Route path='country' element={<Country />} />
          <Route path='countryitem/:area' element={<Countryitem />} />
          <Route path='menuitems/:category' element={<Menuitems />} />
          <Route path='ingredients/:mealId' element={<Ingredients />} />
          <Route path='all' element={<Allitems />} />
          <Route path='fav' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);