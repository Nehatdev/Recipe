import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import reportWebVitals from './reportWebVitals';
import { Nav } from './Nav';
import Home from './Home';
import Popular from './Popular';
import Cardsmodel from './Cardsmodel';
import { Grid } from '@mui/material';
import Grids from './Grids';
import Searchgrid from './Searchgrid';
import Search from './Search';
import DataSlice from './DataSlice';
import Cardsearch from './Cardearch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/hom' element={<Home/>}/>
        <Route path='popular' element={<Popular/>}/>
        <Route path='cmodel' element={<Cardsmodel/>}/>
        <Route path='grid' element={<Grids/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='sgrid' element={<Searchgrid/>}/>
        <Route path='Dataslice' element={<DataSlice/>}/>
        <Route path='csearch' element={<Cardsearch/>}/>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
