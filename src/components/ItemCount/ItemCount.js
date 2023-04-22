import { useState } from "react"
import { useContext } from "react"

const ItemCount = ({stock = 0, initial = 0, onAdd}) =>{

const [cantidad, setCantidad] = useState(initial)

const increment = () =>{
    if(cantidad < stock) setCantidad(cantidad+1)
}

const decrement = () =>{
    if(cantidad > 1) setCantidad (cantidad-1)
}


    return (
              <div className="container-botones-carrito">
                <div>
            
                   <button onClick={decrement}>-</button>
                   <h4>{cantidad}</h4>
                   <button onClick={increment}>+</button>
                   <button className="boton-carrito" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
                   </div>
              </div>

    )
}

export default ItemCount