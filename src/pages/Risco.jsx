import { useContext } from "react";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';


//css
import styles from './styles/Risco.module.css'

const Risco = () => {
   const {sideClose} = useContext(SidebarStateContext);

   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Gestão do Risco'></MainHeader>          
     
     </div>
  )
}

export default Risco