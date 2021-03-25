import React, { useRef, useState,useEffect } from 'react'
import './Modal.scss'
import { useSpring, animated } from 'react-spring'
import { List } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'



const Modal = (props) => {
let [project,setProject] = useState({})
  const modalRef = useRef(null)
  const modalStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })

  const handleModalClick = (event) => {
    if (!modalRef.current.contains(event.target)) {
      props.handleToggle()
    }

  }
  const projects = [
    {
      id: 1,
      title: 'To Do List',
      about: 'This is a project loremEst velit velit ea Lorem culpa ut consectetur aliqua ullamco qui fugiat. Ex non cillum consequat do commodo eiusmod. Aute proident aute elit reprehenderit dolor dolor ipsum ullamco pariatur. Exercitation duis eiusmod ipsum proident incididunt voluptate exercitation in consectetur et. Eu fugiat labore consequat cupidatat qui enim fugiat ex duis id. Reprehender',
      skills: 'React',
      github: 'https://github.com/Yevaeva/ToDoList',
      link: 'https://todolistfortasks.netlify.app/'
    },
    {
      id: 2,
      title: 'Messanger',
      about: 'This is a project',
      skills: 'React',
      github: 'https://github.com/Yevaeva/Messanger',
      link: 'https://yevaeva.github.io/Messanger/'
    },
    {
      id: 3,
      title: 'Tic Tac Toe',
      about: 'This is a project',
      skills: 'React',
      github: 'https://codepen.io/yevaeva/pen/poRvqxr',
      link: 'https://codepen.io/yevaeva/full/poRvqxr'
    },
    {
      id: 4,
      title: 'Portfolio',
      about: 'This is a project',
      skills: 'React',
      github: 'https://github.com/Yevaeva/Portfolio',
      link: ''
    },
  ]
 useEffect(()=>{
  let newproject =  projects.filter((p) => {
    return p.id==props.id
  })
  setProject(newproject[0])
 },[])
  



  return (



    <animated.div style={modalStyle} className='modal'
      onClick={(event) => handleModalClick(event)}
    >

      <div ref={modalRef} className="modal-content">
        <span
          onClick={() => props.handleToggle()}
          className="close">&times;</span>
        
            <div className='project'>
              <h2 className='title'>
                {project.title}
              </h2>
              <div className='aboutProject'>{project.about}</div>
              <div className='projectSkills'>Used stack: {project.skills}</div>
              <div className='githubContainer'>
              <a href={project.github} target="_blank">
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                </a>
                </div>
              <button>
                <a href={project.link} target="_blank" >Visit Website</a>
              </button>
            </div>
      </div>

    </animated.div>


  )
}

export default Modal