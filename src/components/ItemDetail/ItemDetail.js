import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../Notification/NotificationService'



const ItemDetail = ({id, marca , modelo, lado, precio, imagen, categoria, stock})=>{

  const { addItem, isInCart } = useCart()
  const {setNotification} = useNotification ()

  const handleOnAdd = (cantidad) => {
    const productToAdd = {
        id, marca, modelo, precio, cantidad
    }
    addItem(productToAdd)
    setNotification ('success', `Se agrego correctamente al carrito ${cantidad} ${categoria} Marca ${marca} Modelo ${modelo}`)
}

    return(

        <div className="card" style={{width: 300}}>
            <img src={imagen} className="card-img-top" alt=''/>
            <div class="card-body">
    <h5 class="card-title">{marca}</h5>
    <p class="card-text">{modelo}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{categoria}</li>
    <li class="list-group-item">{lado}</li>
    <li class="list-group-item">Precio:${precio}</li>
  </ul>
  <footer className='item-footer'>
        {
                    isInCart(id) ? (
                        <Link to='/cart' className='link-compra'>TERMINAR COMPRA</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }

  </footer>
  <div>
  </div>



            </div>
      
   
    )
     }
       
export default ItemDetail

