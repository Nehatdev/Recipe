import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Cardsmodel = (props) => {
  
  return (
   
    <div>
      <Link to={`/category/${props.categorytitle}`} className='linkdec'>
        <Card 
          sx={{ 
            maxWidth: 345, 
            backgroundColor: 'hwb(88 22% 17%)', 
            border: '3px solid', 
            borderColor: 'black',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            '&:hover': {
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)', 
            },
          }} 
          className='cardstyle'
        >
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt={props.title}
            className='imgs'
          />
          <CardContent>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              className='titles stylealigns' 
              align="center"
              sx={{ 
                fontWeight: 'bold', 
                color: 'black',
                marginBottom: '-0.65em', 
              }}
            >
              {props.title} {props.id}
            </Typography>
            <Typography 
              gutterBottom 
              variant="subtitle1" 
              component="div" 
              className='title' 
              align="center"
              sx={{ 
                color: 'black', 
                marginBottom: '-0.65em', 
              }}
            >
              {props.categorytitle}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
    
  );
}

export default Cardsmodel;
  

