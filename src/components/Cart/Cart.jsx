import './Cart.css'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart, clearCarthandler, children }) => {
    // const cart = props.cart; option-1
    //const {cart} = props; option-2

    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart){
        // product.quantity = product.quantity || 1; //shortcut
        total = total + product.price* product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*0.07;
    const grandTotal = total+totalShipping+tax;


    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>selected items: {quantity}</p>
            <p>Total price: ${total.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShipping.toFixed(2)}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total Price: ${grandTotal.toFixed(2)}</h6>
            <button onClick={clearCarthandler} className='clear-btn'><span>Clear Cart</span><FontAwesomeIcon icon={faTrashCan}/></button>
            {children}
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    clearCarthandler: PropTypes.func,
    children:PropTypes.any // Use the appropriate PropTypes type
};
export default Cart;