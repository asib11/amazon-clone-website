import './Product.css'

const Product = (props) => {
    const {name, price, shipping, stock, img, seller, quantity} = props.product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <h6>{name}</h6>
        </div>
    );
};

export default Product;