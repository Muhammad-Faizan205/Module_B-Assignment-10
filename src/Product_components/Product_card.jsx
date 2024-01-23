
import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Product_card = ({ data }) => {
  return (
    <div className="card-gallery ">
      {data.map(item => (
        <Link to={`/details/${item.id}`} key={item.id}>
           <Card style={{ width: '18rem' }} className='m-2'>
      <Card.Img src={item.image} alt={item.title} />
      <Card.Body>
        <Card.Title><h1>Category{item.category}</h1></Card.Title>
        <Card.Text className='catr'>
        <h1>Category{item.item}</h1>
        </Card.Text>
        <Card.Text className='rs'>
        <h2>Rs. {item.price}</h2> 
        </Card.Text>
      </Card.Body>
    </Card>
        </Link>
      ))}
    </div>
  );
};

export {Product_card};



