import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from '../OrderReview/OrderReview'
import './Order.css'

const Order = () => {
    const cart = useLoaderData();
    console.log(cart)

    return (
        <div className="shop-container">

            <div className="order-container">
                {
                    cart.map(product => <OrderReview key={product.id} product ={product}></OrderReview> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Order;