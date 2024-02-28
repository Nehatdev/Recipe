import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      {categories.map(category => (
        <Link to={`/Menuitems/${category.strCategory}`} key={category.idCategory} style={{ textDecoration: 'none' }}>
          <div>
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
