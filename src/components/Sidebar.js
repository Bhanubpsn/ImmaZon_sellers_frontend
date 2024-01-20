import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark py-0">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="https://firebasestorage.googleapis.com/v0/b/immazon-83e9e.appspot.com/o/immazon_logo-removebg-preview.png?alt=media&token=1c2e65de-a80a-44de-a8a1-39bea1ef136d" alt="" width="100" height="45" className="d-inline-block align-text-top" />
                    </a>
                    <div className="dropdown">
                        <a href="/" className="d-flex align-items-center justify-content-center p-3 link-light text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="30" height="30" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small shadow dropdown-menu-end" aria-labelledby="dropdownUser3">
                            <li><a className="dropdown-item" href="/">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a href="/" className="nav-link active py-3 border-end" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Home">
                            <div className="bi" width="24" height="24" role="img" aria-label="Home">
                                <FontAwesomeIcon icon={faShop} size="lg" />
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link py-3 border-end" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Dashboard">
                            <div className="bi" width="24" height="24" role="img" aria-label="Dashboard">
                                <FontAwesomeIcon icon={faTruckFast} size="lg" />
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Orders">
                            <div className="bi" width="24" height="24" role="img" aria-label="Orders">
                                <FontAwesomeIcon icon={faCartPlus} size="lg" />
                            </div>
                        </a>
                    </li>
                </ul>
            

        </div>

    );
}