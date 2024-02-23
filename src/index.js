import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { Nav } from './Nav';
import Home from './Home';
import Popular from './Popular';
import Cardsmodel from './Cardsmodel';
import { Grid, Menu} from '@mui/material';
import Grids from './Grids';
import Searchgrid from './Searchgrid';
import Search from './Search';
import { Categories } from './Categories';
import { Country } from './Country';
import {Countryitem} from './Countryitem';
import { Menuitems } from './Menuitems';
import Ingredients from './Ingredients';
import { Allitems } from './Allitems';
import { Provider } from 'react-redux';
import {Store} from './Store'; // Import your Redux store
import Favourites from './Favourites';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav />} >
            <Route index element={<Home/>}/>
            <Route path='popular' element={<Popular/>}/>
            <Route path='cmodel' element={<Cardsmodel/>}/>
            <Route path='grid' element={<Grids/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='sgrid' element={<Searchgrid/>}/>
            <Route path='cat'element={<Categories/>}/>
            <Route path='country' element={<Country/>}/>
            <Route path='countryitem/:area' element={<Countryitem/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='menuitems/:category'element={<Menuitems/>}/>
            <Route path='ingredients/:mealId'element={<Ingredients/>}/>
            <Route path='all'element={<Allitems/>}/>
            <Route path='fav'element={<Favourites/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
