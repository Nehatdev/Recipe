import React from 'react';
import homeimage from './home.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import './App.css'
import Grids from './Grids';
 import Popular from './Popular';
import { Link } from 'react-router-dom';


const Home = () => {
    const item = {
        display : 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'column',
    }
  return (
    <div>
      <div style={{position: 'relative'}}>
      <div xs={2} md={4} lg={1024} xl={1192}>
          <Image src={homeimage} style={{ width: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={item}>
              <h1 className='headingStyle' >Find recipies for every occasion</h1>
              <h1 className='headingStyle'> Cooking never was easier</h1> 
              {/* <Link to='all'><button className='homebtn mt-3'>Search your recipes</button></Link> */}
              <Link to='cat'><button className='homebtn mt-3'>Categories</button></Link>
            </div>
      </div>
     </div>
   
    </div> 
  )
}

export default Home
