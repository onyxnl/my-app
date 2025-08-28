import { Link } from 'react-router-dom'; 
function subNav(){
    return (
        <ul className="py-20 submenu">
            <li><Link to="/selectoption">Select Option</Link></li>
            <li><Link to="/listing">Listing</Link></li>
            <li><Link to="/form">Form</Link></li>
        </ul>
    )
}


export default subNav;