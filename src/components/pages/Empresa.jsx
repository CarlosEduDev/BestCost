import Writer from '../../img/simulation_writer.svg'

import styles from '../pages/Home.module.css'


import LinkButton from '../layout/LinkButton'

function Empresa(){
   return (
      <div className={styles.home_container}>
         <h1>Sobre a empresa</h1>
         <p>BestCost é uma das empresas de gerenciamento de projetos com maior impacto no mundo dos negócios.</p>

         <img src={Writer}alt="Costs" />

         <p>Estamos em constante mudanças e melhorias para dar o devido suporte que os nossos clientes merecem!</p>

         <p>Para saber mais sobre nós, clique no botão abaixo!</p>

         <LinkButton to='/contact' text='Entrar em contato'/>
      </div>
   )
}

export default Empresa