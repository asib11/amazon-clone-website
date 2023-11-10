import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                {/* <Link to="/orderReview">Order Review</Link> */}
                <Link to="/manageInventroy">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <p>Welcome {}</p>
                }
            </div>
        </nav>
    );
};

export default Header;  