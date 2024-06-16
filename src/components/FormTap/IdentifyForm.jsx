import React from 'react'

const IdentifyForm = () => {
  return (
    <>
      <h2>Identificação</h2>
        <label>Projeto id:</label>
        <input type="number" id="proj_id" name="proj_id" min="1" max="6" placeholder=""/>  
        <label>Tipo de projeto:</label>
        <select name="tipo_proj" id="tipo_proj">
          <option value="Implantação">Implantação</option>
          <option value="Re-implantação">Re-implantação</option>
          <option value="Consultoria">Consultoria</option>
        </select>

        <label>Nome cliente:</label>
        <input type="text" id="nome_cli" name="nome_cli" maxLength="120" placeholder=""/>      


        <label>Responsável técnico:</label>
        <input type="text" id="rt" name="rt" maxLength="120" placeholder=""/>

        <label>Lider do projeto:</label>
        <input type="text" id="lp" name="lp" maxLength="120" placeholder=""/>
    </>
  )
}

export default IdentifyForm