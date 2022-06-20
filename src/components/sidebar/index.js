import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Sidebar =() =>(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={logoS} alt="logo"/>
        <img className='sub-logo' src={logoSubtitle} alt="Abdullah"/>
        </Link>
        <nav>
            <NavLink exact = "true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className='About-link' to="/about">
              <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact = "true" activeclassname="active" className='contact-link' to="/contact">
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
                <li>
                    <a target="_blank" rel='noreferer' href='https://www.linkedin.com/in/muhammad-abdullah-ab5062241/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferer' href='https://github.com/Abdullah667'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferer' href='https://www.facebook.com/profile.php?id=100043805435426'>
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>

                    </a>
                </li>
            </ul>
    </div>
)

export default Sidebar
