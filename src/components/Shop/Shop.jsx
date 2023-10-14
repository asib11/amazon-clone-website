import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const cartHandler = product =>{
        setCart([...cart, product])
    }
    return (
        <div className='shop-container'>
            {products.map(product => console.log(product))}
            <div className="product-container">
            {products.map(product => <Product product={product} key={product.id} cartHandler={cartHandler}></Product>)}
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>select item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;