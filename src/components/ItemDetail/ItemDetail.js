import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, marca , modelo, lado, precio, imagen, categoria, stock})=>{


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
  <div>
  </div>



            </div>
      
   
    )
}

export default ItemDetail

/* <ItemCount stock = {product.stock} initial ={1}/> */