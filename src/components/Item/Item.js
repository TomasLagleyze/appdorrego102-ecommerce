import './Item.css'
import { Link,  } from 'react-router-dom'


const Item = ({id, marca , modelo, lado, precio, imagen, categoria})=>{




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
  <Link to={`/item/${id}`} className='Option' >DETALLE DE PRODUCTO</Link>
            </div>
   
    )
}

export default Item
