
import React from 'react';
import { useParams } from 'react-router-dom';

const Product_details = ({ data }) => {
  const { itemId } = useParams();
  const selectedItem = data.find(item => item.id == parseInt(itemId, 20));

  if (!selectedItem) {
    return <div>NO Details</div>;
  }

  return (
    <div className="Product-details">
      <img src={selectedItem.image} alt={selectedItem.title} />
      <h2 className='tiltle'>{selectedItem.title}</h2>
      <p>{selectedItem.description}</p>
      
    </div>
  );
};

export {Product_details};
