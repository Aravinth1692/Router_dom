import { Link } from "react-router-dom";
import './Header.css';
const Header = () =>{
    return (
        <div className="header-container">
        <div className="left padding_clr">
        
        <div className="nav-container display_align">
        <Link to='/' className="mrg_right">All</Link>
        <Link to='/datascience' className="mrg_right">DataScience</Link>
        <Link to='/fullstack' className="mrg_right">Full Stack</Link>
        <Link to='/carrier' className="mrg_right">Carrier</Link>
        <Link to='/cyber' className="mrg_right">Cyber Security</Link>
        </div>
        
        </div>
        </div>
    )
}
export default Header;



