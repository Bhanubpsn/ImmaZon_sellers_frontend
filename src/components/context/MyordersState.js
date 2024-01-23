import React, { useState} from 'react';
import OrderContext from './MyordersContext.js';

const OrderState = (props) =>{

    const url = 'http://localhost:5000';
    const ordersInitial = [];

    const [orders, setorders] = useState(ordersInitial);

    //GET all seller's orders
    const getMyorders = async() => {
        props.setprogress(20);
        let sellerid;
        if (localStorage.getItem('id')) {
            sellerid = localStorage.getItem('id');
        }else{
            sellerid = sessionStorage.getItem('id');
        }
        props.setprogress(50);
        const response = await fetch(`${url}/api/orders/getmyorders/${sellerid}`,{
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            }
        });
        props.setprogress(70);

        const json = await response.json();
        console.log(json);
        // console.log(typeof(json[0]));

        setorders(json);
        props.setprogress(100);
    }

    return (
        <OrderContext.Provider value={{orders, getMyorders}}>
            {props.children}
        </OrderContext.Provider>
    )

}

export default OrderState;