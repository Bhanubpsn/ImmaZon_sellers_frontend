import React, { useContext, useEffect } from 'react';
import ProductContext from './context/MyproductsContext';
import Colorcirle from './Colorcircle';

const Productitem = (props) => {
  const context = useContext(ProductContext);
  const { product } = props;

  useEffect(() => {
    console.log(product);
  }, [])

  return (
    <div className='my-1 mx-2'>
      <div className="card border-success mb-3" style={{ "width": "18rem" }}>
        <img src={product.image} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }}/>
        <div className="card-body">
          <h5 className="card-title">{product.productname}</h5>
          <p className="card-text">{product._id}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price : {product.price}</li>
          <li className="list-group-item">Color :
          
            {
              product.color && product.color.map((color) => {
                return <Colorcirle key={color} color={color}/>
                  
              } ) 
            }
            
          </li>
          <li className="list-group-item">Size : {product.size}</li>
        </ul>
        <div className="card-body">
          <button type="button" className="btn btn-success mx-1">Show Details</button>
          <button type="button" className="btn btn-info mx-1">Edit Product</button>
        </div>
      </div>
    </div>
  );

}

export default Productitem;