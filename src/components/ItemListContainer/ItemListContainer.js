import{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
// import { getProducts, getProductsByCategoria } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const [title, setTitle] = useState('Primer titulo')

    const {categoriaId} = useParams()

    useEffect(() => {
setLoading (true)

const productsRef = categoriaId
? query(collection(db, 'products'), where ('categoria', '==', categoriaId))
: collection(db, 'products')


getDocs(productsRef)
.then (snapshot => {
    console.log (snapshot)
    const productsAdapted = snapshot.docs.map (doc => {
        const data =doc.data()
        return {
            id: doc.id, ...data
        }
    })
    setProducts(productsAdapted)
})
.catch (error =>{
    console.log (error)
})
.finally (()=>{
    setLoading (false)
})



        // const asyncFunction = categoriaId ? getProductsByCategoria : getProducts

        // asyncFunction(categoriaId)
        //     .then(response => {
        //         setProducts(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }, [categoriaId])

    useEffect(() => {
        setTimeout(() => {
            setTitle()
        }, 2000)
    }, [])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }


    return(
  <div>
     <h1 className='texto-intro'>{greeting}</h1>
     <h2>{title}</h2>
              <ItemList  products = {products}/>
              </div>
              )
              }

    
    export default ItemListContainer