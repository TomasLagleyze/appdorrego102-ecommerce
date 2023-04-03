import{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategoria } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])

    const {categoriaId} = useParams()

    useEffect(() => {
        const asyncFunction = categoriaId ? getProductsByCategoria : getProducts

        asyncFunction(categoriaId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoriaId])

    return(
  <div>
     <h1>{greeting}</h1>
              <ItemList  products = {products}/>
              </div>
              )
              }

    
    export default ItemListContainer