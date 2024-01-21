import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
    return (
        <div>
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