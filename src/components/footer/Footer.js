import React from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faGithub, faLinkedin, faCodepen, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {

    let year = new Date().getFullYear();
 
    return (
        <div className='footer'>
            <p><span>&copy; </span>{ year}</p>
            <div className='links'>
                <a href='https://github.com/Yevaeva?tab=repositories' target="_blank">
                    <FontAwesomeIcon icon={faGithub} size='lg' />
                </a>
                <a href='https://codepen.io/yevaeva/pens/public' target="_blank">
                    <FontAwesomeIcon icon={faCodepen} size='lg' />
                </a>
                <a href='https://www.linkedin.com/in/yeva-terteryan-05a47176/' target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size='lg'  />
                </a>
                <a href='https://www.facebook.com/yeva.terteryan/' target="_blank">
                    <FontAwesomeIcon icon={faFacebookSquare} size='lg' />
                </a>
            </div>

        </div>
    )
}

export default Footer