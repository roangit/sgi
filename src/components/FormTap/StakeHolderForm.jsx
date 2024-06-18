import React from 'react'

const StakeHolderForm = () => {
  return (
    <>
       <h2 style={{marginBottom: '2%'}}>StakHolders</h2>
        <label htmlFor='stakes'>StakHolders diretos</label>
        <input type="text" id="stakes" name="stakes" maxLength="120" placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."/>
    </>
  )
}

export default StakeHolderForm