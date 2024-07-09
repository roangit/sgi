import { useContext, useState } from "react";
import { useForm, useFieldArray, FormProvider } from "react-hook-form"


//importando contexto
import { SidebarStateContext} from "../contexts/SidebarStateContext";

//components
import MainHeader from '../components/MainHeader';
import IdentifyForm from '../components/FormTap/IdentifyForm';
import JustifyForm from  '../components/FormTap/JustifyForm';
import ObjetiveForm from '../components/FormTap/ObjetiveForm';
import StakeHolderForm from '../components/FormTap/StakeHolderForm';

//hooks
import { useFormControl } from "../hooks/useFormControl";

//css
import styles from './styles/Projeto.module.css'


const Projeto = () => {
   // sidebar
   const {sideClose} = useContext(SidebarStateContext);
   const mainContainer = sideClose ? `${styles.mainContainer} ${styles.sidebarClose}` : `${styles.mainContainer}`;
 
  
   // stepper     
   const steps = [{id:1, component: <IdentifyForm/>, name: 'identificação'}, {id:2, component: <JustifyForm/>, name: 'Justificativas'},
               {id:3, component: <ObjetiveForm/>, name: 'Objetivos'}, {id:4, component: <StakeHolderForm/>, name: 'StakeHolders'}];
   const {currentStep, currrentComponent, changeStep, isLastStep, isFirstStep } = useFormControl(steps);

   // react-hook-form

   const methods = useForm({
      defaultValues: {
         objetivos: [{ descri: '' }],
         responsaveis: [{ nome: ''}],
      },
      });
   const onSubmit = (data) => console.log(data) //jogando os dados no console


    
   return (
     <div className={mainContainer}>
        <MainHeader titulo='Projetos'></MainHeader>   
      
        <div className={styles.bodyContainer}>
            <div className={styles.centro}>
               <div className={styles.stepContainer}>
                  {steps.map((item, index) => 
                    (<span key={item.id}>{item.name}</span> ))
                  }
               </div>               
               {/**********************  FORMULÁRIO  ******************/}
               <FormProvider {...methods}>
               <form onSubmit=
                        {isLastStep ? 
                        ( methods.handleSubmit(onSubmit))
                        :
                        ((e)=> { changeStep(currentStep + 1, e)})        
                     }>
                     <div className={styles.inputContainer}>
                        {currrentComponent.component}
                     </div>
                     <div className={styles.actions}>
                     {!isFirstStep && ( 
                        <button type='button' style={{textAlign: 'right'}} onClick={() => changeStep(currentStep - 1)}>Anterior</button> 
                        )
                     }
                     {isLastStep ? 
                        (<button type='submit' >Enviar</button>)
                        :
                        (<button type='submit'  >Próximo</button>)
                     }
                     </div>
               </form>
               </FormProvider>
            </div>
         </div>
     </div>
  )
}
export default Projeto