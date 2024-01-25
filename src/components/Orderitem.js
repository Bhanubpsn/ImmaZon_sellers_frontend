import React, { useContext, useEffect } from 'react';
import OrderContext from './context/MyordersContext';
import Colorcirle from './Colorcircle';

const Orderitem = (props) => {
  const context = useContext(OrderContext);
  const { product } = props;

  useEffect(() => {
    console.log(product);
  }, [])

  return (
    <div className='my-1 mx-2'>
      <div class="card text-white bg-success mb-3" style={{"width": "18rem"}}>
        <img src={product.imageUrl} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Order ID:</h5>
            <p class="card-text">{product._id}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Quantity : {product.quantity}</li>
            <li class="list-group-item">Color : 
            {
              product.color && <Colorcirle key={product.color} color={product.color}/>
                  
               
            }
            </li>
            <li class="list-group-item">Size : {product.size}</li>
          </ul>
          <div class="card-body">
            <button type="button" class="btn btn-light">Show Details</button>
            {/* <a href="#" class="card-link">Another link</a> */}
          </div>
      </div>
    </div>
  );

}

export default Orderitem;