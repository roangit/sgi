import React from 'react'

const ObjetiveForm = () => {
  return (
    <>
        <h2>Objetivos</h2>
        <label>O projeto será considerado um sucesso se...</label>
        <input type="text" id="Objetivos" name="objetivos" maxLength="120" placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."/>      
    </>    
  )
}
export default ObjetiveForm