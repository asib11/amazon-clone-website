import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/order">Order</a>
                <a href="/orderReview">Order Review</a>
                <a href="/manageInventroy">Manage Inventory</a>
                <a href="/login">Login</a>

            </div>

        </nav>
    );
};

export default Header;  