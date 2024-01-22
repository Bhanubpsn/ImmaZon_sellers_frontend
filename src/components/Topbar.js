import React,{ useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'




export const Topbar = () => {

    const navigate = useNavigate();

    const [shopname, setshopname] = useState("");

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('id');
        navigate('/login');
    }

    const fetchData = async ()=>{
        let res = await fetch("http://localhost:5000/api/auth/getseller",{
            headers: { 
                'authtoken': sessionStorage.getItem('token') || localStorage.getItem('token'),
            }
        });
        let sellerdata = await res.json();
        setshopname(sellerdata.shopName);
    }

    useEffect(() => {
        let accountCircle = document.getElementById('accountCircle');
        if(localStorage.getItem('token') || sessionStorage.getItem('token')){
            // console.log("logged in ^_^")
            
            fetchData();
            accountCircle.removeAttribute("hidden");
        }
        else{
            accountCircle.setAttribute("hidden", "true");
        }
        // showAlert("Welcome","primary")
    }, [])


    return (
        <nav className="navbar navbar-light bg-dark py-0">
            <div className="container-fluid" >
                <a className="navbar-brand" href="/">
                    <img src="https://firebasestorage.googleapis.com/v0/b/immazon-83e9e.appspot.com/o/immazon_logo-removebg-preview.png?alt=media&token=1c2e65de-a80a-44de-a8a1-39bea1ef136d" alt="" width="100" height="45" className="d-inline-block align-text-top" />
                </a>
                <div>
                    <p style={{"color" : "white"}}>{shopname}</p>
                </div>
                <div className="dropdown" id="accountCircle">
                    <a href="/" className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser} size='lg'/>
                    </a>
                    <ul className="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser3">
                        <li><a className="dropdown-item" href="/" onClick={handleSignOut}>Sign out</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}