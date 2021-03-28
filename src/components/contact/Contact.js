import React, { useState, useRef } from 'react'
import './Contact.scss'
import { useSpring, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import * as EmailValidator from 'email-validator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    let [toggleModal, setToggleModal] = useState(true)
    let [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        message: '',
    })
    let nameRef = useRef(null);
    let emailRef = useRef(null);
    let messageRef = useRef(null);


    const defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };

    const modalStyle = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    })

    const handleToggle = () => {
        setToggleModal(!toggleModal)
    }

    const handleChange = ({ target: { name }, target: { value } }) => {
        setInputValue({ ...inputValue, [name]: value })
    }

    const handleClick = () => {
        let val = EmailValidator.validate(inputValue.email)
        if (!val) {
            toast.dark('Your email address is invalid!', {
                position: "bottom-left",
            });
        } else if (!inputValue.name || !inputValue.email || !inputValue.message) {
            toast.dark('Please, fill all the required fields', {
                position: "bottom-left",
            });
        }
        else {
            fetch('https://portfolio-yevaeva.herokuapp.com/form', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputValue)
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response.error) {
                        throw response.error
                    }
                    toast.dark('Your message was sent', {
                        position: "bottom-left",
                    });
                    setInputValue({
                        name: "",
                        email: '',
                        message: ''
                    })
                    return response
                }).catch((error) => {
                    console.log(error.message);
                    toast.dark(error.message + '. Please try again later', {
                        position: "bottom-left",
                    });
                })



        }

    }

    return (
        <div id='contact'>
            <div className="mapContact">
                <button
                    onClick={handleToggle}
                >CLICK ME</button>
                <div className='map'>
                    {
                        !toggleModal &&
                        <>
                            <div className='heart'></div>
                            <p>I'll be waiting for your call.</p>
                        </>
                    }
                </div>
                {
                    toggleModal &&
                    <div className='contactModal'>
                        <div className='flexwrap'>
                            <h2>Contact me</h2>

                            <div className='addressWraper'>
                                <div>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} size='2x' color='white' />
                                    <h5>ADDRESS</h5>
                                    <p>Armenia, Echmiadzin</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faMobileAlt} size='2x' color='white' />
                                    <h5>TELEPHONE</h5>
                                    <p>+374 95208442</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />
                                    <h5>EMAIL</h5>
                                    <a href="mailto:yeva.terteryan@gmail.com">yeva.terteryan@gmail.com</a>
                                </div>

                            </div>
                            <div className='form'>
                                <div className='side'>
                                    <div className='nameWrapper'>
                                        <input
                                            ref={nameRef}
                                            value={inputValue.name}
                                            onChange={(e) => handleChange(e)}
                                            type='text'
                                            name='name' />
                                        <label
                                            onClick={() => nameRef.current.focus()}
                                            className={`${inputValue.name ? 'label fill' : 'label'}`} >Name *</label>
                                    </div>
                                    <div className='emailWrapper'>
                                        <input
                                            ref={emailRef}
                                            value={inputValue.email}
                                            onChange={(e) => handleChange(e)}
                                            type='email'
                                            name='email' />
                                        <label
                                            onClick={() => emailRef.current.focus()}
                                            className={`${inputValue.email ? 'label fill' : 'label'}`}>Email *</label>
                                    </div>

                                </div>
                                <div className='messageWrapper'>
                                    <input
                                        ref={messageRef}
                                        value={inputValue.message}
                                        onChange={(e) => handleChange(e)}
                                        type='text'
                                        name='message' />
                                    <label
                                        onClick={() => messageRef.current.focus()}
                                        className={`${inputValue.message ? 'label fill' : 'label'}`}>Massage *</label>

                                </div>
                                <button
                                    onClick={handleClick}>Send</button>

                            </div>
                        </div>
                    </div>
                }


            </div>
            <ToastContainer
                position="bottom-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Contact