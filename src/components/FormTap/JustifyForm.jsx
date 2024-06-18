import React from 'react'

const JustifyForm = () => {
  return (
   <>
   <h2 style={{marginBottom: '2%'}}>Justificativas</h2>
    <label htmlFor='justif'>Quais dores, problemas, situações que buscamos resolver a partir do sucesso desse projeto</label>
    <textarea id="justif" name="justif" rows="14" cols="100" required></textarea>
   </>
  )
}

export default JustifyForm