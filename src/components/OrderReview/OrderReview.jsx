import './OrderReview.css'
import PropTypes from 'prop-types'

const OrderReview = ({product}) => {
    const {name, id, quantity,img, price} = product;
    return (
        <div className='review'>
            <img src={img} alt="" />
        </div>
    );
};

OrderReview.propTypes ={
    product : PropTypes.object,
}
export default OrderReview;