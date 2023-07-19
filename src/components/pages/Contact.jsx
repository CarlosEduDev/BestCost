import { FaLinkedin, FaGithub } from "react-icons/fa"
import contact from '../../img/contact_us.svg'
import styles from './Contact.module.css'

function Contact(){
   return (
      <div className={styles.contact_container}>
         <h1>Página de contatos</h1>
         <p>Para saber mais sobre a empresa, entre em contato conosco!</p>

         <img src={contact}alt="contactUs" />

         
         <ul className={styles.contact_list}>
           <li>
            <a href="https://github.com/CarlosEduDev"><FaGithub/></a>
           </li>

           <li>
            <a href="https://www.linkedin.com/in/carlos-eduardo-310a5a255/"><FaLinkedin/></a>
           </li>
               
         </ul>
         
      </div>
   )
}

export default Contact