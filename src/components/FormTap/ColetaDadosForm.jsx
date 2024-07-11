import React from 'react'
import { useFormContext } from "react-hook-form"

const ColetaDadosForm = () => {
  const { register } = useFormContext() // retrieve all hook methods
  return(
    <>
      <h2 style={{marginBottom: '2%'}}>Coleta de Dados</h2>
    </>
  )
}

export default ColetaDadosForm