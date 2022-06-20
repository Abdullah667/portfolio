import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [',', 'A','b','d','u','l','l','a','h']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.',]
  const welcome =['W','e','l','c','o','m','e',' ','t','o',' ','m','y']
  const portfolio=['P','o','r','t','f','o','l','i','o']
  const site=['i','t','e']

    return(
        <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                    <AnimatedLetters letterClass={letterClass}
                     strArray={welcome}
                     idx={15}
                     /> <br/>
                     <AnimatedLetters letterClass={letterClass}
                     strArray={portfolio}
                     idx={22}
                     /> 
                     <img src={LogoTitle} alt="developer" />
                     <AnimatedLetters letterClass={letterClass}
                     strArray={site}
                     idx={15}
                     /><br/>
                      <span className={`${letterClass} _13`}>I'</span>
                      <span className={`${letterClass} _14`}>m</span>
                     <AnimatedLetters letterClass={letterClass}
                     strArray={nameArray}
                     idx={22}
                     />
                     
                    
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                     strArray={jobArray}
                     idx={48}
                     />
                </h1>
                <h2>Front End Developer / JavaScript Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}
export default Home