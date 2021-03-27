import React,{useRef,useEffect} from 'react'
import Main from '../main/Main'
import './About.scss'
import Slide from 'react-reveal/Slide';
import Pulse from 'react-reveal/Pulse';



const About = () => {

    

    return (
        <div>
            <Main />
            <div id='about'>
            <div className='cover'>
            </div>
            <Pulse right>
                <div   className='about'>
                    <h2 >Who am I</h2>
                    <p >Hi, I am a future Web developer. I have worked in the banking sector for several years, but I have been
                        also interested in the programming for a long time. Now I'm on childcare leave.
                        During this period, I have taken the opportunity to learn and acquire a new profession. I'm always in for
                        learning new stuff, seeking to improve and grow as a professional and as a person. I enjoy solving
                        complex problems.
                        As an energetic and imaginative young web developer I am able to work alongside another talented IT
                        professionals for creating websites. Right now I am in the seek of an internship position or an entry level
                        position with an exciting company.    
                </p>
                </div>
            </Pulse>
            <div className='bgImage'>
            </div>
            </div>
        </div>
    )
}
export default About