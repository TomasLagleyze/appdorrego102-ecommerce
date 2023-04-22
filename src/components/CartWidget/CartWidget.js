import './CartWidget.css'
import cart from './assets/carro-de-la-carretilla.png'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useCart()

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            <div className='cantidad-letra'>
            {totalQuantity}
            </div>
        </div>
    );
}

export default CartWidget