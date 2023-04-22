import './navbar.css'
import logo from './assets/img/LOGO-DORREGO-102.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const NavBar = () => {
    const [categorias, setCategorias] = useState([])
  
    useEffect(() => {
      const categoriasRef = query(collection(db, 'categorias'), orderBy('label', 'asc'))
  
      getDocs(categoriasRef)
        .then(snapshot => {
          const categoriasAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setCategorias(categoriasAdapted)
        })
    }, [])
  
    console.log(categorias)
    return (
      <nav className="Navbar" >
        <img className='logo' src={logo} alt='logo' />
        <Link to='/' className='titulo-principal'>DORREGO 102 - TU LOCAL DE AUTOPARTES</Link>
          <div className="Categorias">
            {
              categorias.map(cat => {
                return <NavLink key={cat.id} to={`/categoria/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
              })
            }
          </div>
          <CartWidget />
      </nav>
    )
  }
  
  export default NavBar

