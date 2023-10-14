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
        //step-1: get id
        for (const id in storeCart){
            //step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            //step-3: get the quantity of product
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
        }

    },[products])
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