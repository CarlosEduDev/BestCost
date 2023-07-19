import styles from './Home.module.css'
import savings from '../../img/projectsIMG.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
   return(
      <section className={styles.home_container}>
         <h1>Bem-vindo ao <span>BestCosts!</span></h1>
         <p>Comece a gerenciar os seus projetos com facilidade!</p>

        <LinkButton to='/newProject' text='Criar projeto'/>

         <img src={savings}alt="Costs" />
      </section>
   )
}

export default Home