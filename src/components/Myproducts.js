import React,{useEffect} from 'react';
import { Sidebar } from './Sidebar';
import { useNavigate } from 'react-router-dom';

export const Myproducts = () =>{

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token') || sessionStorage.getItem('token')){
            console.log("User is Logged In");
        }
        else{
            navigate("/login")
        }
        // showAlert("Welcome","primary")
    }, [])

    return(
        <Sidebar/>
    );
}