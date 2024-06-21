import React from 'react'
import { useFormContext } from "react-hook-form"

const IdentifyForm = () => {
  const { register } = useFormContext() // retrieve all hook methods
  return(
    <>
      <h2 style={{marginBottom: '2%'}}>Identificação</h2>
        <label htmlFor='projId'>Projeto id:</label>
        <input 
          id="projId"
          type="number"
          min="1"
          max="999999" 
          placeholder=""
          {...register("projId", {required: true })}
        />  
        <label htmlFor="tipoProj">Tipo de projeto:</label>
        <select 
          id="tipoProj"
          {...register("tipoProj", {required: "selecione das opções"})}>
          <option value="Implantação">Implantação</option>
          <option value="Re-implantação">Re-implantação</option>
          <option value="Consultoria">Consultoria</option>
        </select>

        <label htmlFor='nomeCli'>Nome cliente:</label>
        <input
          id="nomeCli"
          placeholder=""
          {...register("nomeCli", { required: true, maxLength: 120 })}
        />
        
        <label htmlFor='respTec'>Responsável técnico:</label>
        <input
          id="respTec"
          placeholder=""
          {...register("respTec", { required: true, maxLength: 120 })}
        />

        <label htmlFor='liderProj'>Lider do projeto:</label>
        <input
          id="liderProj"
          placeholder=""
          {...register("liderProj", { required: true, maxLength: 120 })}
        />
    </>
  )
}

export default IdentifyForm