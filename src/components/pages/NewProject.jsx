import { useNavigate } from 'react-router-dom'

import ProjectForm from '../Project/projectForm'
import styles from './NewProject.module.css'

function NewProject(){

const navigate = useNavigate()

function createPost(project){
   //initialize cost and services
   project.cost = 0
   project.services = []

   fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
         'Content-type': 'application/json', },
         body: JSON.stringify(project),
   }).then((resp) => resp.json())
   .then((data) =>{
      console.log(data)
      //REDIRECT
      navigate('/Projects', {state: {message: 'Projeto criado com sucesso!'}})
   })
   .catch(err => console.log(err))
}

   return (
      <div className={styles.newProject_container}>
         <h1>Criar projeto</h1>
         <p>Crie seu projeto para adicionar os serviços!</p>
         <ProjectForm handleSubmit={createPost} btnText='Criar projeto' />
      </div>
   )
}

export default NewProject