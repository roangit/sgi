import React from 'react'

const StakeHolderForm = () => {
  return (
    <>
        <h2>StakHolders</h2>
        <p><label>StakHolders diretos</label></p>
        <p><input type="text" id="stakes" name="stakes" maxLength="120" placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."/></p>      
    </>
  )
}

export default StakeHolderForm