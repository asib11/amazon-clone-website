import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';

const Shop = () => {
    const [products, setProducts] =useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(() =>{
        const storeCart = getShoppingCart();
        console.log(storeCart)

    },[])
    const cartHandler = product =>{
        setCart([...cart, product]);
        addToDb(product.id)
    }


    return (
        <div className='shop-container'>
            <div className="product-container">
            {products.map(product => <Product product={product} key={product.id} cartHandler={cartHandler}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;