import { useContext } from "react";

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';


//css
import styles from './styles/Dash.module.css'

const Dash = () => {
      
   const {sideClose} = useContext(SidebarStateContext);
   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Dashboards'></MainHeader>

     </div>
  )
}

export default Dash