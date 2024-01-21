import React,{ useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


export const Topbar = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {
        let accountCircle = document.getElementById('accountCircle');
        if(localStorage.getItem('token') || sessionStorage.getItem('token')){
            console.log("logged in ^_^")
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