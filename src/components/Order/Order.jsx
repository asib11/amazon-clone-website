import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from '../OrderReview/OrderReview'
import './Order.css'
import { useState } from "react";
import { deleteShoppingCart, removeFromDb } from "../../assets/utilities/fakedb";

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);

    const deleteBtnHandler = (id) => {
        const reminder = cart.filter(product => product.id !== id);
        setCart(reminder);
        removeFromDb(id);
    }

    const clearCarthandler = () => {
        setCart([]);
        deleteShoppingCart();
    }
    console.log(cart)

    return (
        <div className="shop-container">

            <div className="order-container">
                {
                    cart.map(product => <OrderReview
                        key={product.id}
                        product={product}
                        deleteBtnHandler={deleteBtnHandler}
                    ></OrderReview>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    clearCarthandler={clearCarthandler}
                >
                    <Link to='/cheakout'>
                        <button>Proceed Cheakout</button>
                    </Link>

                </Cart>
            </div>

        </div>
    );
};

export default Order;