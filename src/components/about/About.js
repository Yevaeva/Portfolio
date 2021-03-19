import React from 'react'
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
                    <p >Hi. I am a web developer.I am looking for a internship position,
                    doing programming and studying for 2 years now. I really like it a
                    nd I am ready to develop in this direction. I wish you to be useful
                    to the employer, ready to get used to any working conditions and master
                    new technologies. I will be glad to any of your suggestions, i am ready
                    to work on experience.
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