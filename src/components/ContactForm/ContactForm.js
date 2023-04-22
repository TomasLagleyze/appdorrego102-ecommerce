import { useState } from "react"
import './ContactForm.css'

const ContactForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleSubmit = () => {
        const userData = {
            name, phone, email
        }

        
        onConfirm(userData)
    }

    return (
        <form className="formulario" onSubmit={handleSubmit}>
            <input placeholder="Nombre y Apellido" value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder="1167518502" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <input placeholder="juanxxx@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button className="boton-form">GENERAR ORDEN</button>
        </form>
    )
}

export default ContactForm