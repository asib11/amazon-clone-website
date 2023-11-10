import './Header.css'
import logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log('header', user);

    const handleLogOut = () => {
        logOut()
            .then(result => { 
                const userdetails = result.user;
                console.log(userdetails)
            })
            .catch(error => console.log(error))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    user && <Link>Welcome {user.email} <button onClick={handleLogOut}>Sign Out</button></Link>
                }
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                {/* <Link to="/orderReview">Order Review</Link> */}
                <Link to="/manageInventroy">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>

            </div>
        </nav>
    );
};

export default Header;  