import './CartWidget.css'
import cart from './assets/carro-de-la-carretilla.png'
const CartWidget = () =>{
return(
    <div>
        <img className='carrito' src={cart}  alt='carrito'/>
        0
    </div>
)

}

export default CartWidget