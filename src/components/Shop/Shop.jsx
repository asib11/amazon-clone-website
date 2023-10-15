import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];
        //step-1: get id
        for (const id in storeCart) {
            //step-2: get the product by using id
            const addedProduct = products.find(product => product.id === id);
            //step-3: get the quantity of product
            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                //step-4: add the added product in savecart
                saveCart.push(addedProduct);
            }
        }
        //step-5: set the cart
        setCart(saveCart);

    }, [products])
    const cartHandler = product => {
        // setCart([...cart, product]);
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart =[...cart, product];
        }
        // else{
        //     exists.quantity = exists.quantity + 1;
        //     const remaining = cart.filter(pd => pd.id !== product.id);
        //     newCart = [...remaining, exists];
        // }
        setCart(newCart)
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