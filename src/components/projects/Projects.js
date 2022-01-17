import React, { useState } from "react";
import "./Projects.scss";
import classchat from "../../files/classchat.jpg";
import tictac from "../../files/tictac.jpg";
import todo from "../../files/todo.jpg";
import responsive from "../../files/responsive.png";
import clientlist from "../../files/clientlist.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../modalProject/Modal";

const Projects = (props) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [id, setId] = useState("");
  const projects = [
    {
      image: responsive,
      name: "Responsive website",
    },
    {
      image: clientlist,
      name: "Client list",
    },
    {
      image: classchat,
      name: "Messanger",
    },
    {
      image: tictac,
      name: "Tic Tac Toe",
    },
  ];

  const handleToggle = (e) => {
    setToggleModal(!toggleModal);

    if (!toggleModal) {
      setId(e.currentTarget.id);
      props.disableFunc(toggleModal);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      props.disableFunc(toggleModal);
    }
  };
  const message = `You can also see my mini projects \n and experiments in`;

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projWrapper">
        <div style={{ position: "relative" }}>
          <div className="item big">
            <div className="imgWrap" id="0" onClick={(e) => handleToggle(e)}>
              <img alt="project" src={todo} />
              <div className="overlay">
                <div className="text">
                  <FontAwesomeIcon
                    icon={faSearchPlus}
                    size="2x"
                    color="white"
                  />
                </div>
              </div>
            </div>
            <p>To Do List</p>
          </div>
          <div className="also">
            <p>
              {message}
              <a href="https://codepen.io/yevaeva/pens/public" target="_blanck">
                {" "}
                Codepen
              </a>
            </p>
          </div>
        </div>
        {projects.map((project, key) => {
          return (
            <div className="item" key={key}>
              <div
                className="imgWrap"
                id={key + 1}
                onClick={(e) => handleToggle(e)}
              >
                <img alt="project pic" src={project.image} />
                <div className="overlay">
                  <div className="text">
                    <FontAwesomeIcon
                      icon={faSearchPlus}
                      size="2x"
                      color="white"
                    />
                  </div>
                </div>
              </div>
              <p>{project.name}</p>
            </div>
          );
        })}
      </div>
      {toggleModal && <Modal id={id} handleToggle={handleToggle} />}
    </div>
  );
};

export default Projects;
