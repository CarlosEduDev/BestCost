import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'


function Footer(){
   return (
      <footer className={styles.footer}>
         <ul className={styles.social_list}>
            <li>
               <FaFacebook/>
            </li>
            <li>
               <FaInstagram/>
            </li>
            <li>
               <FaLinkedin/>
            </li>
         </ul>
       <p className={styles.copy_right}>
         <span>BestCosts</span> &copy; 2023</p>

       <p className={styles.madeBy}>Feito por Carlos</p>

       <p className={styles.madeBy}>Empresa fictícia</p>
      </footer>
   )
}

export default Footer