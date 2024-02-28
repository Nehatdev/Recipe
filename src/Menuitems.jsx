import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Menuitems = () => {
    const [items, setItems] = useState([]);
    const { category} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                console.log(response.data);
                // Check if meals array exists in response data
                if (response.data.meals) {
                    setItems(response.data.meals);
                } else {
                    // If meals array does not exist, set items to an empty array
                    setItems([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [category]);
console.log(items);
    return (
        <div style={{ marginTop: '150px', textAlign: 'center' }}>
            <h1>{category}</h1>
            <div className='wrapitems'>
                {items.length > 0 ? (
                    items.map((item) => (
                        <div className='menu' key={item.idMeal}>
                            <div className='menuitems'>
                                <img src={item.strMealThumb} alt="" />
                                <h3>{item.strMeal}</h3>
                                <Link to={`/ingredients/${item.idMeal}`}>
                                    <button>View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No items found for {category}</p>
                )}
            </div>
        </div>
    );
};

