import './navbar.css'
import logo from './assets/img/LOGO-DORREGO-102.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () =>{
return(
    <nav className='Navbar'>
        <img className='logo' src={logo} alt='logo' />
<h1 className='titulo-principal'> Dorrego 102</h1>
        <div className='botonesnav-container'>
        <Link className='inicio' to='/'>Todas</Link>
        <NavLink to='/categoria/Faros' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option-boton'}>Faros</NavLink>
            <NavLink to='/categoria/Opticas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option-boton'}>Opticas</NavLink>
            <NavLink to='/categoria/Paragolpes' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option-boton'}>Paragolpes</NavLink>
 

    </div>

    <CartWidget/>
    </nav>
)

}

export default Navbar