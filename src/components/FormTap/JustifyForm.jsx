import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

const JustifyForm = () => {
  const { register, setFocus } = useFormContext() // retrieve all hook methods

  useEffect(() => {
    setFocus("justificativa")
  }, [setFocus])

  return (
   <>
   <h2 style={{marginBottom: '2%'}}>Justificativas</h2>
    <label htmlFor='justif'>Quais dores, problemas, situações que buscamos resolver a partir do sucesso desse projeto</label>
    <textarea
      id="justif"
      rows="14"
      cols="100"
      required
      {...register("justificativa", { required: true })} >
    </textarea>
   </>
  )
}

export default JustifyForm