import { useContext } from "react";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';

//css
import styles from './styles/Cadastro.module.css'



const Cadastro = () => {
   
   const {sideClose} = useContext(SidebarStateContext);
   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`

   return (
     <div className={mainContainer}>
        <MainHeader titulo='Cadastro'></MainHeader>   
        <div className={styles.bodyContainer}>
            <div className={styles.centro}>
               
         


            </div>
         </div>
     </div>
   )
}

export default Cadastro