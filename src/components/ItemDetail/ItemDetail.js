import './ItemDetail.css'
const ItemDetail = ({ marca , modelo, lado, precio, imagen, categoria})=>{


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
  <button>Agregar al carrito</button>
            </div>
      
   
    )
}

export default ItemDetail