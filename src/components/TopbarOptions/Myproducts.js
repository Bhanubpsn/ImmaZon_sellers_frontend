import React,{useEffect,useContext,useState} from 'react';
import { Sidebar } from '../Sidebar';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../context/MyproductsContext';
import Productitem from '../Productitem.js';

export const Myproducts = (props) =>{

    const navigate = useNavigate();
    const context = useContext(ProductContext);
    const {products, getMyproducts} = context;
    // const [myproducts, setmyproducts] = useState("initialState")

    useEffect(() => {
        const fetchData = async () => {
          if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
            await getMyproducts();
             // Wait for the getMyproducts function to complete
            // Now you can access the updated products state
            // console.log(products);
          } else {
            navigate("/login");
          }
        };
    
        fetchData();
      }, []);

    return(
        <>
            <Sidebar/>
            
            <div className="row my-1">
                {
                  products && products.map((item) => {
                    return <div className="col-md-4" key={item._id}> 
                    <Productitem key={item._id} product={item}/>
                    </div>
                      
                  } ) 
                }
            </div>
        
        </>

    );
}

