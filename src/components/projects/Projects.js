import React, { useState } from 'react'
import './Projects.scss'
import img1 from '../../img1.jpg'
import tictac from '../../files/tictac.jpg'
import todo from '../../files/todo.jpg'
import portfolio from '../../files/portfolio.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from '../modalProject/Modal'


const Projects = (props) => {
    let [toggleModal, setToggleModal] = useState(false)
    let [id, setId] = useState('');

    const handleToggle = (e) => {

        setToggleModal(!toggleModal)

        if (!toggleModal) {
            setId(e.currentTarget.id);
            props.disableFunc(toggleModal)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
            props.disableFunc(toggleModal)

        }

    }
    const message = `You can also see my mini projects \n and experiments in`

    return (
        <div id='projects'>
            <h2>Projects</h2>
            <div className='projWrapper'>
<div style={{position:'relative'}}>
                <div className='item big'>
                    <div

                        className='imgWrap'
                        id='1'
                        onClick={(e) => handleToggle(e)}
                    >
                        <img src={todo} />
                        <div className="overlay">
                            <div className="text">
                                <FontAwesomeIcon icon={faSearchPlus} size='2x' color='white' />

                            </div>
                        </div>
                    </div>
                    <p>To Do List</p>
                </div>
                <div className='also'>
                    <p >{message}
                            <a href='https://codepen.io/yevaeva/pens/public' target='_blanck'> Codepen</a>
                    </p>
                </div>
                </div>
                <div className='item'>
                    <div
                        className='imgWrap'
                        id='2'
                        onClick={(e) => handleToggle(e)}
                    >
                        <img src={img1} />
                        <div className="overlay">
                            <div className="text">
                                <FontAwesomeIcon icon={faSearchPlus} size='2x' color='white' />

                            </div>
                        </div>
                    </div>
                    <p>Messanger</p>
                </div>
                <div className='item'>
                    <div
                        className='imgWrap'
                        id='3'
                        onClick={(e) => handleToggle(e)}
                    >
                        <img src={tictac} />
                        <div className="overlay">
                            <div className="text">
                                <FontAwesomeIcon icon={faSearchPlus} size='2x' color='white' />

                            </div>
                        </div>
                    </div>
                    <p>Tic Tac Toe</p>
                </div>
                {/* <div className='item'>
                    <div
                        className='imgWrap'
                        id='4'
                        onClick={(e) => handleToggle(e)}
                    >
                        <img src={portfolio} />
                        <div className="overlay">
                            <div className="text">
                                <FontAwesomeIcon icon={faSearchPlus} size='2x' color='white' />

                            </div>
                        </div>
                    </div>
                    <p>Portfolio</p>
                </div> */}


            </div>
            {toggleModal &&
                <Modal id={id} handleToggle={handleToggle} />
            }

        </div>
    )
}

export default Projects