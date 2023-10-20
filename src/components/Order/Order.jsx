import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Order = () => {
    const cart = useLoaderData();
    console.log(cart)

    return (
        <div className="shop-container">

            <div className="product-container">
                <h1>order {cart.length} items</h1>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Order;