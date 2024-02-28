// import React, { useEffect, useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Cardsmodel from './Cardsmodel';  
// import axios from 'axios';

// export const Grids = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => { 
//     axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
//       .then((res) => {
//         setData(res.data.categories);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (  
//     <Container>
//       <Row>
//         {data.map((item) => (  
//           <Col md="auto" className='mt-4' key={item.idCategory}>
//             <Cardsmodel image={item.strCategoryThumb} categorytitle={item.strCategory} title={item.strMeal} id={item.idMeal}/>
//           </Col> 
//         ))}
//       </Row>
//     </Container> 
//   );
// }


