import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] =useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const cartHandler = product =>{
        console.log(product);
    }
    return (
        <div className='shop-container'>
            {products.map(product => console.log(product))}
            <div className="product-container">
            {products.map(product => <Product product={product} key={product.id} cartHandler={cartHandler}></Product>)}
            </div>
            <div className="cart-container">
                <h2>cart coming soon...</h2>
            </div>
        </div>
    );
};

export default Shop;