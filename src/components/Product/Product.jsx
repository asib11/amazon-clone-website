import './Product.css';
import PropTypes from 'prop-types'

const Product = (props) => {
    const { name, price, shipping, stock, img, seller, quantity, ratings } = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>rating: {ratings} stars</p>
            </div>
            <button className='product-cart'>add to cart</button>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object, // Use the appropriate PropTypes type
};
export default Product;