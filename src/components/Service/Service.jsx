import styles from '../pages/Project.module.css'

import { useState } from 'react'

import Input from '../form/input'
import SubmitBtn from '../form/SubmitBtn'

function ServiceForm({ handleSubmit, textBtn, projectData }){

   const [service, setService] = useState([])

   function submit(e){
      e.preventDefault()
      projectData.services.push(service)
      handleSubmit(projectData)
   }

   function handleChange(e){
      setService({...service, [e.target.name]: e.target.value})
   }

   return(
      <form onSubmit={submit} className={styles.form}>
<Input
         type='text'
         text='Nome do serviço'
         name='name'
         placeholder='Insira o nome do serviço'
         handleOnChange={handleChange}
         />

<Input
         type='number'
         text='Orçamento do serviço'
         name='cost'
         placeholder='Insira o valor total do serviço'
         handleOnChange={handleChange}
         />

<Input
         type='text'
         text='Descrição do serviço'
         name='description'
         placeholder='Descreva o serviço'
         handleOnChange={handleChange}
         />
         <SubmitBtn text={textBtn}/>
      </form>
   )
}

export default ServiceForm