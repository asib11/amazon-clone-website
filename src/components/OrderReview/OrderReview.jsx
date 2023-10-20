import './OrderReview.css'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const OrderReview = ({product, deleteBtnHandler}) => {
    const {name, id, quantity,img, price} = product;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <div className='order-info'>
                <p className='title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => deleteBtnHandler(id)} className='delete-btn'><FontAwesomeIcon className='delete-icon' icon={faTrashCan} /></button>
        </div>
    );
};

OrderReview.propTypes ={
    product : PropTypes.object,
    deleteBtnHandler: PropTypes.func,
}
export default OrderReview;