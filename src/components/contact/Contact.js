import React, { useState, useRef } from "react";
import { Formik } from "formik";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactValidationSchema } from "../../helpers/validation";

const Contact = () => {
  const [toggleModal, setToggleModal] = useState(true);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleToggle = () => {
    setToggleModal(!toggleModal);
  };

  const handleClick = (inputValue) => {
    fetch("https://portfolio-yevaeva.herokuapp.com/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          throw response.error;
        }
        toast.dark("Your message was sent", {
          position: "bottom-left",
        });
        return response;
      })
      .catch((error) => {
        console.log(error.message);
        toast.dark(error.message + ". Please try again later", {
          position: "bottom-left",
        });
      });
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={contactValidationSchema}
      onSubmit={(values) => {
        handleClick(values);
      }}
    >
      {({ values, handleChange, handleSubmit, errors }) => {
        return (
          <div id="contact">
            <div className="mapContact">
              <button onClick={handleToggle}>CLICK ME</button>
              <div className="map">
                {!toggleModal && (
                  <>
                    <div className="heart"></div>
                    <p>I'll be waiting for your call.</p>
                  </>
                )}
              </div>
              {toggleModal && (
                <div className="contactModal">
                  <div className="flexwrap">
                    <h2>Contact me</h2>

                    <div className="addressWraper">
                      <div>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          size="2x"
                          color="white"
                        />
                        <h5>ADDRESS</h5>
                        <p>Armenia, Echmiadzin</p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faMobileAlt}
                          size="2x"
                          color="white"
                        />
                        <h5>TELEPHONE</h5>
                        <p>+374 95208442</p>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="2x"
                          color="white"
                        />
                        <h5>EMAIL</h5>
                        <a href="mailto:yeva.terteryan@gmail.com">
                          yeva.terteryan@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="form">
                      <div className="side">
                        <div>
                          <div className="nameWrapper">
                            <input
                              ref={nameRef}
                              value={values.name}
                              onChange={handleChange}
                              type="text"
                              name="name"
                            />
                            <label
                              onClick={() => nameRef.current.focus()}
                              className={`${
                                values.name ? "label fill" : "label"
                              }`}
                            >
                              Name *
                            </label>
                          </div>
                          <div className="required">{errors.name}</div>
                        </div>
                        <div>
                          <div className="emailWrapper">
                            <input
                              ref={emailRef}
                              value={values.email}
                              onChange={handleChange}
                              type="email"
                              name="email"
                            />
                            <label
                              onClick={() => emailRef.current.focus()}
                              className={`${
                                values.email ? "label fill" : "label"
                              }`}
                            >
                              Email *
                            </label>
                          </div>
                          <div className="required">{errors.email}</div>
                        </div>
                      </div>
                      <div className="messageWrapper">
                        <input
                          ref={messageRef}
                          value={values.message}
                          onChange={handleChange}
                          type="text"
                          name="message"
                        />
                        <label
                          onClick={() => messageRef.current.focus()}
                          className={`${
                            values.message ? "label fill" : "label"
                          }`}
                        >
                          Massage *
                        </label>
                        <div className="required">{errors.message}</div>
                      </div>
                      <button type="submit" onClick={handleSubmit}>
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
        );
      }}
    </Formik>
  );
};

export default Contact;
