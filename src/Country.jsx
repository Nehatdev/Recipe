import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Country = () => {

  const [country, setCountry] = useState([])

  useEffect(() => {
    let fetchData = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        console.log(response);
        setCountry(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  console.log("hhh", country);

  return (
    <>
      <div style={{ margin: '150px', textAlign: 'center'}}>
        <h1>Country</h1>
        <div className='wrapitems'>
          {country.map((area, index) => (
            <div className='country' key={index}>
              <div>
                <Link to={`/countryitem/${area.strArea}`} style={{ textDecoration: 'none', color: 'black'  }}>
                  <div>
                    {area.strArea}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}


