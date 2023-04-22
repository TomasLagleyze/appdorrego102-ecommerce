import './Footer.css'
import logo from './assets/LOGO-DORREGO-102.png'
import logowapp from './assets/LOGO-WAPP.png'
import logoinsta from './assets/LOGO-INSTA.png'
import logoface from './assets/LOGO-FACE.png'

const Footer = () => {

    return (<div className='footer-container'>
        <img className="logo-footer" src={logo} alt="Logo Dorrego 102"/>
 <section className='logos-container'>
 <img className="logo-wapp" src={logowapp} alt="Logo Dorrego 102"/>
 <img className="logo-insta" src={logoinsta} alt="Logo Dorrego 102"/>
 <img className="logo-insta" src={logoface} alt="Logo Dorrego 102"/>
 </section>
 
 </div>
    )
}

export default Footer