import React, { useEffect } from 'react';
import { useFormContext } from "react-hook-form"

const IdentifyForm = () => {
  const { register, setFocus  } = useFormContext() // react hook methods

  useEffect(() => {
    setFocus("projId")
  }, [setFocus])

  return(
    <>
      <h2 style={{marginBottom: '2%'}}>Identificação</h2>
        <label htmlFor='projId'>Projeto id:</label>
        <input 
          id="projId"
          type="number"
          min="111111"
          max="9999999" 
          placeholder=""
          required
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

        <label htmlFor="Produto">Produto principal relacionado ao projeto:</label>
        <select 
          multiple={false}
          id="Produto"
          {...register("produto", {required: true})}>
          <option value="Start">Start</option>
          <option value="Plus">Plus</option>
          <option value="Premium">Premium</option>
          <option value="Personalizado">Personalizado</option>
          <option value="Empresarial">Empresarial</option>
        </select>

        <label htmlFor='nomeCli'>Nome cliente:</label>
        <input
          id="nomeCli"
          placeholder=""
          autoComplete="off"
          style={{textTransform: 'uppercase'}}
          required
          {...register("nomeCli", { required: true, maxLength: 120, pattern: /^[A-Z]+$/i } )}
        />
         {/*uppercase / capitalize eh a opção*/}
        
        <label htmlFor="respTec">Responsável Técnico:</label>
        <select 
          id="respTec"
          {...register("respTec", {required: true})}>
          <option value="Daniel Mizerski">Daniel Mizerski</option>
          <option value="Denis Braz">Denis Braz</option>
          <option value="Ederli Reis">Ederli Reis</option>
          <option value="Eduarda Santos">Eduarda Santos</option>
          <option value="Helder Goulart">Helder Goulart</option>
          <option value="Marinaldo Costa">Marinaldo Costa</option>
          <option value="Paulo Correa">Paulo Correa</option>
          <option value="Rafael Cruz">Rafael Cruz</option>
          <option value="Thiago Roloff">Thiago Roloff</option>
        </select>


        <label htmlFor="liderProj">Lider do projeto:</label>
        <select 
          id="liderProj"
          {...register("liderProj", {required: true})}>
          <option value="Daniel Mizerski">Daniel Mizerski</option>
          <option value="Roan Santos">Roan Santos</option>
        </select>
    </>
  )
}

export default IdentifyForm