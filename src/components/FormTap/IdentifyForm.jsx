import React from 'react'



const IdentifyForm = () => {
  return (
    <>
      <h2 style={{marginBottom: '2%'}}>Identificação</h2>
        <label htmlFor='proj_id'>Projeto id:</label>
        <input type="number" id="proj_id" name="proj_id" min="1" max="999999" placeholder=""/>  
        <label htmlFor='tipo_proj'>Tipo de projeto:</label>
        <select name="tipo_proj" id="tipo_proj">
          <option value="Implantação">Implantação</option>
          <option value="Re-implantação">Re-implantação</option>
          <option value="Consultoria">Consultoria</option>
        </select>

        <label htmlFor='nome_cli'>Nome cliente:</label>
        <input type="text" id="nome_cli" name="nome_cli" maxLength="120" placeholder=""/>      


        <label htmlFor='rt'>Responsável técnico:</label>
        <input type="text" id="rt" name="rt" maxLength="120" placeholder=""/>

        <label htmlFor='lp'>Lider do projeto:</label>
        <input type="text" id="lp" name="lp" maxLength="120" placeholder=""/>

    </>
  )

  


}

export default IdentifyForm