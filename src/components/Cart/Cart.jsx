import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({ cart }) => {
    // const cart = props.cart; option-1
    //const {cart} = props; option-2

    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = total*0.07

    return (
        <div>
            <h2>Order Summary</h2>
            <p>selected items: {cart.length}</p>
            <p>Total price: ${total.toFixed(2)}</p>
            <p>Total Shipping Charge: ${totalShipping.toFixed(2)}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total Price: ${(total+totalShipping+tax).toFixed(2)}</h6>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object, // Use the appropriate PropTypes type
};
export default Cart;