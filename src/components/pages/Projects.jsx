import Message from "../layout/Message"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Loading from "../layout/Loading"

import { useState, useEffect } from "react"

import { useLocation } from "react-router-dom"
import ProjectCard from "../Project/projectCard"

function Projects(){

   const [projects, setProjects] = useState([])
   const [removeLoading, setRemoveLoading] = useState(false)
   
   const [projectMessage, setProjectMessage] = useState('')

   const location = useLocation()
   
   let message = ''
   if(location.state){
      message = location.state.message
   }

   useEffect(() => {
      fetch('http://localhost:5000/projects', {
         method: "GET",
         headers: {
            'Content-Type': 'application/json',
         },
      }).then(resp => resp.json())
      .then(data => {
         console.log(data)
         setProjects(data)
         setRemoveLoading(true)
      })
      .catch((e) => console.log(e))

   }, [])

   function removeProject(id){
      fetch(`http://localhost:5000/projects/${id}`, {
         method: 'DELETE',
         headers:{
            'Content-Type': 'application/json'
         },
      }).then(resp => resp.json())
      .then(data => {
         setProjects(projects.filter((project) => project.id !== id))
         //message
         setProjectMessage('projeto removido com sucesso!')
         
      })
      .catch(err => console.log(err))
   }

   return(
      <div className={styles.project_container}>
        <div className={styles.title_container}>
         <h1>Meus projetos</h1>
         <LinkButton to='/newProject' text='Criar projeto'/>
        </div>
         {message && <Message type='sucess' msg={message}/>}
         
         {projectMessage && <Message type='sucess' msg={projectMessage}/>}
         <Container customClass='start'>
            {projects.length > 0 && 
            projects.map((project) => (
               <ProjectCard
               id={project.id}
              category={project?.category?.name}
               key={project.id}
               budget={project.budget}
                name={project.name}
                handleRemove={removeProject}
                
                />   
            ))}
            {!removeLoading && <Loading/>}
            {removeLoading && projects.length === 0 && (
               <p>Não há projetos!</p>
            )}
         </Container>
      </div>
   )
}

export default Projects