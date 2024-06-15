import { useContext, useState } from "react";
import Button from '@mui/material/Button';

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';
import HorizontalSteper from '../components/HorizontalStepper';

//css
import styles from './styles/Projeto.module.css'

const Projeto = () => {
   
   const {sideClose} = useContext(SidebarStateContext);
   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`
   
   const [tab, setTab] = useState(0);


   function showTab(n) {
      // This function will display the specified tab of the form...
      let x = document.getElementsByName('tab')
      if (x != null) {
         x[n].style.display = 'block';
      }
      
      
    }

    var currentTab = 0; // Current tab is set to be the first tab (0) default=0
    
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Projetos'></MainHeader>          
        <div className={styles.bodyContainer}>
            <div className={styles.centro}>
               <br />
               {/*<HorizontalSteper />*/}
                  <form id="regForm">
                     <h1 style={{textAlign:'center'}}>Termo Abertura do Projeto</h1>

                     {/*<!-- "tab" 0 para cada step do form -->*/}
                     <div name="tab" className={styles.tab}>
                        <h2>Identificação</h2>
                        <label htmlFor="proj_id">Projeto id:</label>
                        <input type="number" id="proj_id" name="proj_id" min="1" max="6" placeholder=""/>  
                        <label htmlFor="tipo_proj">Tipo de projeto:</label>
                        <select name="tipo_proj" id="tipo_proj">
                           <option value="Implantação">Implantação</option>
                           <option value="Re-implantação">Re-implantação</option>
                           <option value="Consultoria">Consultoria</option>
                        </select>

                        <label htmlFor="nome_cli">Nome cliente:</label>
                        <input type="text" id="nome_cli" name="nome_cli" maxLength="120" placeholder=""/>      

                        
                        <label htmlFor="rt">Responsável técnico:</label>
                        <input type="text" id="rt" name="rt" maxLength="120" placeholder=""/>

                        <label htmlFor="lp">Lider do projeto:</label>
                        <input type="text" id="lp" name="lp" maxLength="120" placeholder=""/>
                     </div>
                     
                     {/*<!-- "tab" 1 para cada step do form -->*/}
                     
                     <div name="tab" className={styles.tab}>
                        <h2>Justificativas</h2>
                        <p><label htmlFor="justif">Quais dores, problemas, situações que buscamos resolver a partir do sucesso desse projeto</label>
                           <textarea id="justif" name="justif" rows="10" cols="100" required></textarea></p>
                     </div>
                     
                     {/*<!-- "tab" 2 para cada step do form -->*/}
                     
                     <div name="tab" className={styles.tab}>
                        <h2>Objetivos</h2>
                        <p><label htmlFor="objetivos">O projeto será considerado um sucesso se...</label>
                           <input type="text" id="Objetivos" name="objetivos" maxLength="120" placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."/>      
                        </p>
                     </div>

                     {/*<!-- "tab" 3 para cada step do form -->*/}
                     
                     <div name="tab" className={styles.tab}>
                       <h2>StakHolders</h2>
                        <p><label htmlFor="stakes">StakHolders diretos</label></p>
                        <p><input type="text" id="stakes" name="stakes" maxLength="120" placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."/></p>      
                     </div>


                     {/*<!-- "tab" 3 para cada step do form -->*/}
                     
                     <div name="tab" className={styles.tab}>
                       <h2>Fases e Principais entregaveis</h2>
                        {/*<!-- Aqui tem que ficar a calculadora do Adam -->*/}
                     </div>

                     <Button variant="contained">Anterior</Button>
                     <Button variant="contained">Próximo</Button>
                  </form>
            </div>
         </div>
         {
                //  showTab(currentTab) // Display the current tab
         }

     </div>
  )
}
export default Projeto