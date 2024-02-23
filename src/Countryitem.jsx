import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

 export const Countryitem = () => {
    const [items, setItems] = useState([])
    const { area } = useParams()

    useEffect(() => {
        let fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
                console.log(response.data);
                setItems(response.data.meals);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [area]) // Make sure to include 'area' in the dependency array

    console.log("fggfh", items);

    return (
        <>
            <div style={{ marginTop: '150px', textAlign: 'center' }}>
                <h1>{area}</h1>
                <div className='wrapitems'>
                    {items.map((meals1) => (
                        <div className='menu' key={meals1.idMeal}>
                            <div className='menuitems'>
                                <img src={meals1.strMealThumb} alt="" />
                                <h3>{meals1.strMeal}</h3>
                                <Link to={`/ingredients/${meals1.idMeal}`} style={{ textDecoration: 'none' }}>
                                    <button>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

