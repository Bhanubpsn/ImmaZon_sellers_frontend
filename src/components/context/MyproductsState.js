import React, { useState} from 'react';
import ProductContext from './MyproductsContext.js';

const ProductState = (props) =>{

    const url = 'http://localhost:5000';
    const productsInitial = [];

    const [products, setproducts] = useState(productsInitial);

    //GET all seller's products
    const getMyproducts = async() => {
        
        let sellerid;
        if (localStorage.getItem('id')) {
            sellerid = localStorage.getItem('id');
        }else{
            sellerid = sessionStorage.getItem('id');
        }
        const response = await fetch(`${url}/api/products/getmyproducts/${sellerid}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();
        console.log(json[0]);
        // console.log(typeof(json[0]));

        setproducts(json[0]);
    }

    return (
        <ProductContext.Provider value={{products, getMyproducts}}>
            {props.children}
        </ProductContext.Provider>
    )

}

export default ProductState;