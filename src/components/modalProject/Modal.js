import React, { useRef, useState, useEffect, useMemo } from "react";
import "./Modal.scss";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Modal = (props) => {
  let [project, setProject] = useState({});
  const modalRef = useRef(null);
  const modalStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleModalClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      props.handleToggle();
    }
  };
  const projects = useMemo(
    () => [
      {
        id: 0,
        title: "To Do List",
        about:
          "This is a task managment tool in React, with the abilities of searching, sorting and filtering options." +
          " You can sort tasks or filter tasks by status(done, active) and date. " +
          "There are options for deleting tasks one by one, as well as deleting several at a time." +
          "There is an opportunity to edit the task, which is organized through the modal window." +
          "You can change the task done or active." +
          " If you enter non-existent pages on the site, you will be redirected to 404 page, which contain a message that the desired page does not exist." +
          "",
        skills:
          "React.js, Redux, React Bootstrap, RESTful APIs, Node.js, Express, MongoDB",
        github: [
          "https://github.com/Yevaeva/ToDoList",
          "https://github.com/Yevaeva/TodoList-API",
        ],
        link: "https://todolistfortasks.netlify.app/",
      },
      {
        id: 1,
        title: "Responsive website",
        about:
          "It is a full responsive website created with pure javascript and scss",
        skills: "JavaScript, HTML, CSS",
        github: ["https://github.com/Yevaeva/responsive-website/tree/master"],
        link: "https://yevaeva.github.io/client-list/",
      },
      {
        id: 2,
        title: "Client List",
        about:
          "It is list of clients. Every client has email, phone and providers. You can create, edit and delete clients. Also you can add new provider, edit or delete it.",
        skills:
          "React.js, Redux, React Bootstrap, RESTful APIs, Node.js, Express, MongoDB",
        github: [
          "https://github.com/Yevaeva/client-list",
          "https://github.com/Yevaeva/client-list-api",
        ],
        link: "https://yevaeva.github.io/client-list/",
      },
      {
        id: 3,
        title: "Messanger",
        about:
          "This is a class chat. You can register and log in, then  select or create a class and join a group chat ․" +
          "You can see who are in the selected room online. It shows you when someone is typing.",
        skills: "React.js, Node.js, Express, Mongo db, Socket.io",
        github: [
          "https://github.com/Yevaeva/Messanger",
          "https://github.com/Yevaeva/Messanger-api",
        ],
        link: "https://yevaeva.github.io/Messanger/",
      },
      {
        id: 4,
        title: "Tic Tac Toe",
        about:
          'Tic-tac-toe is a game in which two players take turns in drawing either an "O" or an "X" in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.',
        skills: "JavaScript, HTML, CSS",
        github: ["https://codepen.io/yevaeva/pen/poRvqxr"],
        link: "https://codepen.io/yevaeva/full/poRvqxr",
      },
      {
        id: 5,
        title: "Portfolio",
        about: "This is a project",
        skills: "React",
        github: ["https://github.com/Yevaeva/Portfolio"],
        link: "https://yevaeva.github.io/Portfolio/",
      },
    ],
    []
  );
  useEffect(() => {
    let newproject = projects.filter((p) => {
      return p.id === +props.id;
    });
    setProject(newproject[0]);
  }, [projects, props.id]);

  return (
    <animated.div
      style={modalStyle}
      className="modal"
      onClick={(event) => handleModalClick(event)}
    >
      <div ref={modalRef} className="modal-content">
        <span onClick={() => props.handleToggle()} className="close">
          &times;
        </span>

        <div className="project">
          <h2 className="title">{project.title}</h2>
          <p className="aboutProject">{project.about}</p>
          <div className="projectSkills">Used stack: {project.skills}</div>
          <div className="githubContainer">
            {project.github?.map((git, key) => {
              return (
                <a href={git} target="_blank" rel="noreferrer" key={key}>
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              );
            })}
          </div>
          <button>
            <a href={project.link} target="_blank" rel="noreferrer">
              Visit Website
            </a>
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default Modal;
