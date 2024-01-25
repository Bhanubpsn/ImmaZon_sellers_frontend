import React , {useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export const Sidebar = () => {
    const [shop, setshop] = useState("");
    const [orders, setorders] = useState("")
    const [addproduct, setaddproduct] = useState("")

    const location = useLocation();
    
    useEffect(() => {
        console.log(location.pathname);
        if(location.pathname === "/") setshop("active");
        else if(location.pathname === "/myorders") setorders("active");
        else if(location.pathname === "/addproduct") setaddproduct("active");
    }, [])

    return (
        <div>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a href="/" className={`nav-link ${shop} py-3 border-end`} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Home">
                        <div className="bi" width="24" height="24" role="img" aria-label="Home">
                            <FontAwesomeIcon icon={faShop} size="lg" />
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/myorders" className={`nav-link ${orders} py-3 border-end`} title="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Dashboard">
                        <div className="bi" width="24" height="24" role="img" aria-label="Dashboard">
                            <FontAwesomeIcon icon={faTruckFast} size="lg" />
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className={`nav-link ${addproduct} py-3 `} title="" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-original-title="Orders">
                        <div className="bi" width="24" height="24" role="img" aria-label="Orders">
                            <FontAwesomeIcon icon={faCartPlus} size="lg" />
                        </div>
                    </a>
                </li>
            </ul>


        </div>

    );
}