import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

/*
Necessário ter um array de string com os steps, e passar para a "prop steps"
const steps = ['Identificação', 'Justificativas', 'Objetivos', 'StackeHolders', 'Cronograma Etapas' , 'Principais marcos entregaveis' ];
*/

export default function HorizontalLinearStepper({stepNames = []}) {
 
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {stepNames.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >Back
            </Button>
            
            <Button onClick={handleNext}>
              {activeStep === stepNames.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
    </Box>
  );
}