import './Product.css';
import PropTypes from 'prop-types'

const Product = (props) => {
    const { name, price, img, seller, ratings } = props.product;
    const cartAdd = props.cartHandler;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>rating: {ratings} stars</p>
            </div>
            <button onClick={() => cartAdd(props.product)} className='product-cart'>add to cart</button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object,
    cartHandler: PropTypes.func,
     // Use the appropriate PropTypes type
};
export default Product;