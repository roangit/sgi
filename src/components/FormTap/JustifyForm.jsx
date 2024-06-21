import React from 'react'
import { useFormContext } from "react-hook-form"

const JustifyForm = () => {
  const { register } = useFormContext() // retrieve all hook methods
  return (
   <>
   <h2 style={{marginBottom: '2%'}}>Justificativas</h2>
    <label htmlFor='justif'>Quais dores, problemas, situações que buscamos resolver a partir do sucesso desse projeto</label>
    <textarea
      id="justif"
      rows="14"
      cols="100"
      required
      {...register("justificativas", { required: true, maxLength: 120 })} >
    </textarea>
   </>
  )
}

export default JustifyForm