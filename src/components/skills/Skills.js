import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faPeopleArrows,faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import './Skills.scss'
import { Motion, spring } from 'react-motion';


const Skills = (props) => {
    const skills = [
        { type: "HTML, CSS", level: 85 },
        { type: "JavaScript", level: 60 },
        { type: "SCSS, BootStrap", level: 70 },
        { type: "React.js, Redux", level: 50 },
        { type: "Git", level: 45 },
    ];

    const softSkills = ['Communicative', 'Punctuality', 'Flexibility', 'Willingness to learn',
                        'Sense of humor', 'Sociable', 'Functions well under pressure']
        const lang = [
            { type: "Armenian", level: 99 },
            { type: "English", level: 50},
            { type: "Russian", level: 50 },
           
        ];

    const refSkill = useRef(null);
    let [hit, setHit] = useState(false)

    useEffect(() => {
        window.addEventListener('wheel', (e) => {
            if (window.scrollY > refSkill.current.offsetTop - 200) {
                setHit(true);
                let skillbar = document.getElementsByClassName('bar')
      
            }

        })

    }, [])


    return (
        <div ref={refSkill} className='skills' id="skills">
            <h2>Skills & Knowledge</h2>
            <div className='skillsWrapper'>
                <section>
                    <div className="circle-wrapper">
                        <div className="circle"></div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLaptopCode} size='3x' color='white' />
                        </div>
                    </div>
                    <h3>Software skills</h3>

                    {skills.map((skill, index) => {
                        return (
                            <Motion key={index}
                                style={{ x: spring(hit ? skill.level : 0) }}>
                                {({ x }) =>
                                    <div className='skillContainer'>
                                        <div className='skillText'>
                                            <p>{skill.type}</p>

                                        </div>
                                        <div className="skillLoader">
                                            <div className="bar" style={{
                                                width: `${x}%`,
                                            }} />
                                        </div>
                                    </div>
                                }
                            </Motion>

                        )
                    })}

                </section>


                <section>
                    <div className="circle-wrapper">
                        <div className="circle"></div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLanguage} size='3x' color='white' />
                        </div>
                    </div>
                    <h3>Languages</h3>

                    {lang.map((skill, index) => {
                        return (
                            <Motion key={index}
                                style={{ x: spring(hit ? skill.level : 0) }}>
                                {({ x }) =>
                                    <div className='skillContainer'>
                                        <div className='skillText'>
                                            <p>{skill.type}</p>

                                        </div>
                                        <div className="skillLoader">
                                            <div className="bar" style={{
                                                width: `${x}%`,
                                            }} />
                                        </div>
                                    </div>
                                }
                            </Motion>

                        )
                    })}

                </section>



                <section>
                    <div className="circle-wrapper">
                        <div className="circle"></div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faPeopleArrows} size='3x' color='white' />
                        </div>
                    </div>
                    <h3>Soft skills</h3>


                    {softSkills.map((skill, index) => {
                        return (
                            <div key={index} className='skillContainer'>
                                <div className='skillText'>
                                    <p>{skill}</p>
                                </div>
                            </div>

                        )
                    })}
                </section>
                 
            </div>

        </div>
    )
}

export default Skills