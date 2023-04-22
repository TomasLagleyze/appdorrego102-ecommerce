import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cart, total , clearCart} = useCart()

    return (
        <div className="cart-container">
            <section className="cart-subcontainer">
            <h1 className="texto1">DETALLE DE COMPRA</h1>
            <div >
                { cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h2 className="texto2">{prod.marca}</h2>
                                <h2 className="texto2">Cantidad: {prod.cantidad}</h2>
                                <h2 className="texto2">${prod.precio} x Unidad</h2>
                            </div>
                        )
                    })
                }
            </div>
            <button className="Option" onClick={() => clearCart()}>Vaciar carrito</button>
            <h1 className="texto2">Total de la compra: ${total}</h1>
            <Link to='/checkout' className="Checkout">CHECKOUT</Link>
            </section>
        </div>
    )
}

export default Cart