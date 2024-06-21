import React from 'react'
import { useFormContext, useFieldArray } from "react-hook-form"

const ObjetiveForm = () => {
  const {register, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "objetivos" });

  return (
    <>
        <h2 style={{marginBottom: '2%'}}>Objetivos</h2>
        <label htmlFor='objetivos'>O projeto será considerado um sucesso se...</label>
        <input
          type="text"
          id="objetivos"
          maxLength="120"
          placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."
          {...register("objetivos", { required: true, maxLength: 120 })} 
        />      

    </>    
  )
}
export default ObjetiveForm