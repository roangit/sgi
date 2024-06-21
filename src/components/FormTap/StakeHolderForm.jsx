import React from 'react'
import { useFormContext } from "react-hook-form"

const StakeHolderForm = () => {
  const {register, handleSubmit, watch } = useFormContext();
  return (
    <>
       <h2 style={{marginBottom: '2%'}}>StakHolders</h2>
        <label htmlFor='stakeHolders'>StakHolders diretos</label>
        <input
          type="text"
          id="stakeHolders"
          maxLength="120"
          placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."
          {...register("stakeHolders" , { required: true, maxLength: 120 })} 
        />
    </>
  )
}

export default StakeHolderForm