import { useContext, useState } from "react";
import Button from '@mui/material/Button';

//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';
import HorizontalSteper from '../components/HorizontalStepper';
import IdentifyForm from '../components/FormTap/IdentifyForm';
import JustifyForm from  '../components/FormTap/JustifyForm';
import ObjetiveForm from '../components/FormTap/ObjetiveForm';
import StakeHolderForm from '../components/FormTap/StakeHolderForm';

//hooks
import { useForm } from "../hooks/useForm";

//css
import styles from './styles/Projeto.module.css'



const Projeto = () => {
   
   const {sideClose} = useContext(SidebarStateContext);
   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`;
 
   const [tab, setTab] = useState(0);
   
   const formComponents = [ <IdentifyForm/>, <JustifyForm/>, <ObjetiveForm/>, <StakeHolderForm/>];

   const {currentStep, currrentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);
 
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Projetos'></MainHeader>          
        <div className={styles.bodyContainer}>
            <div className={styles.centro}>
               <br />
               {/*<HorizontalSteper />*/}
                  <form onSubmit={(e)=> changeStep(currentStep + 1, e) }>
                     <div className={styles.inputContainer}>
                        {currrentComponent}
                     </div>
                     <div className={styles.actions}>
                     {!isFirstStep && ( 
                        <button type='button' style={{textAlign: 'right'}} onClick={() => changeStep(currentStep - 1)}>Anterior</button> 
                        )
                     }
                     {isLastStep ? 
                        (<button type='submit'  >Enviar</button>)
                        :
                        (<button type='submit'  >Próximo</button>)
                     }
                     </div>
                  </form>
            </div>
         </div>
     </div>
  )
}
export default Projeto