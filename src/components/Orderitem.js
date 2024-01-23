import React, { useContext, useEffect } from 'react';
import OrderContext from './context/MyordersContext';

const Orderitem = (props) => {
    const context = useContext(OrderContext);
    const { product } = props;

    useEffect(() => {
        console.log(product);
    }, [])

    return (
        <div className='my-1 mx-2'>
        <div className="card" style={{width: "18rem"}}>
          {/* <img src={!product.image?"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg":product.image} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }}/> */}
          <div className="card-body">
            <h5 className="card-title">{product.id}</h5>
            <p className="card-text">{product.quantity}</p>
            {/* <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More...</a> */}
          </div>
        </div>
      </div>
    );

}

export default Orderitem;