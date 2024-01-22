import React, {useContext,useEffect} from 'react';
import ProductContext from './context/MyproductsContext';

const Productitem = (props)=> {
    const context = useContext(ProductContext);
    const {product} = props;

    useEffect(() => {
        console.log(product);
    }, [])

    return(
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{product.productname}</h5>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Productitem;