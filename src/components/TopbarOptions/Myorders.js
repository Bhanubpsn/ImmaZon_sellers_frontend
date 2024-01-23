import React,{useEffect,useContext,useState} from 'react';
import { Sidebar } from '../Sidebar';
import { useNavigate } from 'react-router-dom';
import OrderContext from '../context/MyordersContext';
import Orderitem from '../Orderitem';


export const Myorders = (props) =>{

    const navigate = useNavigate();
    const context = useContext(OrderContext);
    const {orders, getMyorders} = context;
    // const [Myorders, setMyorders] = useState("initialState")

    useEffect(() => {
        const fetchData = async () => {
          if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
            await getMyorders();
             // Wait for the getMyorders function to complete
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
                  orders && orders.map((item) => {
                    return <div className="col-md-4" key={item._id}> 
                    <Orderitem key={item._id} product={item}/>
                    </div>
                      
                  } ) 
                }
            </div>
        
        </>

    );
}

