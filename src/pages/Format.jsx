import { useContext } from "react";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';


//css
import styles from './styles/Format.module.css'

const Format = () => {
   const {sideClose} = useContext(SidebarStateContext);

   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Formatações padronizadas'></MainHeader>          
     </div>
  )
}

export default Format