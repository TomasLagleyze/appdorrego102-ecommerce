import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { useState } from 'react'
import {useNotification} from '../Notification/NotificationService'
import { useNavigate } from "react-router-dom"
import ContactForm from "../ContactForm/ContactForm"
import './Checkout.css'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: userData,
                items: cart,
                total
                }
            
            
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(ordersRef, objOrder)
                
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                setNotification('error', 'Hay productos que no tienen stock', 10)
            }
        } catch (error) {
            setNotification('error', 'Hubo un error generando la orden', 10)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return (
            <div>
                <h1>Se esta generando su orden...</h1>
            </div>
        )
    }

    if(orderId) {
        return (
            <div>
                <h1>El id de su compra es: {orderId}</h1>
            </div>
        )
    }

    return (
        <div className="pag-form-container">
            <h1 className="texto12">CHECKOUT</h1>
            <h2 className="texto12">INGRESE SUS DATOS</h2>
            <ContactForm  onConfirm={createOrder}/>
            {/* <Form onConfirm={createOrder}/> */}
            {/* <button onClick={createOrder}>Crear orden</button> */}
        </div>
    )
}

export default Checkout