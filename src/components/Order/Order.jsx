import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderReview from '../OrderReview/OrderReview'
import './Order.css'
import { useState } from "react";
import { removeFromDb } from "../../assets/utilities/fakedb";

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart);

    const deleteBtnHandler = (id)=>{
        const reminder = cart.filter(product => product.id !== id);
        setCart(reminder);
        removeFromDb(id);
    }

    console.log(cart)

    return (
        <div className="shop-container">

            <div className="order-container">
                {
                    cart.map(product => <OrderReview
                         key={product.id} 
                         product ={product}
                         deleteBtnHandler ={deleteBtnHandler}
                         ></OrderReview> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Order;