import React, { useEffect } from 'react';

//import icones
import { FaRegPlusSquare, FaTrashAlt } from 'react-icons/fa';

import { useFormContext, useFieldArray } from 'react-hook-form'

const StakeHolderForm = () => {
  const {register,setFocus, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "interessados" });
  
  useEffect(() => {
    setFocus("interessados.0.nome")
  }, [setFocus])
  
  return (
    <>
       <h2 style={{marginBottom: '2%'}}>StakHolders</h2>
        <label>Indique as partes interessadas</label>
        <table className="table_1">
        <thead>
        <tr>
        <th style={{width: '350px'}}>Nome</th>
        <th style={{width: '200px'}}>Participação</th>
        <th style={{width: '120px'}}>Telefone</th>
        <th style={{width: '120px'}}>Tipo de interesse</th>
        <th style={{width: '120px'}}>Grau de interesse</th>
        <th style={{width: '120px'}}>Grau de influência</th>
        <th style={{width: '65px'}}>Ações</th>

        </tr>
        {fields.map((field, index) => (
        <tr key={field.id}> 
          <td>
            <input style={{textTransform: 'capitalize'}}
              type="text"
              maxLength="120"
              placeholder="Nome"
              required
              {...register(`interessados.${index}.nome` , { required: true, maxLength: 90 })} 
            />
          </td>
     
          <td>
            <input
              type="text"
              maxLength="60"
              placeholder="Funcão"
              required
              {...register(`interessados.${index}.funcao` , { required: true, maxLength: 60 })} 
            />
          </td>

          <td>
            <input
              type="tel"
              placeholder="(99) 9999-9999"             
              required
              {...register(`interessados.${index}.fone` , { required: true })} 
            />
          </td>

          <td>
            <select 
            required
              {...register(`interessados.${index}.tipoInteresse` , { required: true })} >
              <option value="Positivo">Positivo</option>
              <option value="Negativo">Negativo</option>
            </select>
          </td>

          <td>
            <select 
            required
              {...register(`interessados.${index}.grauInteresse` , { required: true })} >
              <option value="Negativo">Alto</option>
              <option value="Positivo">Baixo</option>
            </select>
          </td>

          <td>
            <select 
            required
              {...register(`interessados.${index}.grauInfluencia` , { required: true })} >
              <option value="Negativo">Alto</option>
              <option value="Positivo">Baixo</option>
            </select>
          </td>

          <td>
              <i onClick={() => {append({ nome: '',funcao: '', fone:'', tipoInteresse:'', grauInteresse:'', grauInfluencia:''  }); }}><FaRegPlusSquare/></i>
              {(() => {
                if (index > 0) {
                  return <i onClick={() => remove(index)}><FaTrashAlt/></i>
                }
              })()}
          </td>
        </tr>
        ))}
        </thead>
        <tbody></tbody>
        </table>
    </>
  )
}

export default StakeHolderForm