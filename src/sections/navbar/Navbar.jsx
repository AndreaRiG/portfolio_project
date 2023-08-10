// importo el logo desde la carpeta de imagenes
import Logo from '../../assets/logo.png'
import data from './data'
import './navbar.css'
import {IoMdColorPalette} from 'react-icons/io'

function Navbar() {
  return (
    /* aqui modifica la clase o variable de container para el nav*/
    <nav>
      <div className='container nav__container'>
        <a href="index.html" className='nav__logo'>
          <img src={Logo} alt="logo" />
        </a>
        <ul>
          {
            data.map(item => <li key={item.id}> <a href={item.link}> {item.litle} </a> </li>)
          }
        </ul>
        <button id='theme__icon'><IoMdColorPalette/></button>
      </div>
    </nav>
  )
}

export default Navbar