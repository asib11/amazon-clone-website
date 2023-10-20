import { getShoppingCart } from "../assets/utilities/fakedb";

const cartProductLoader = async() =>{
    const loadedData = await fetch('products.json');
    const response = await loadedData.json()
    console.log(response);
    //if cart data in database, you have to async await
    const storeCart = getShoppingCart();
    const saveCart = [];

    for (const id in storeCart){
        const addedProduct = response.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }

    return saveCart;
    //if you need to send two things
    // return [product, saveCart]
    //other option
    //return {product, saveCart} or return {product, cart:saveCart}
}

export default cartProductLoader