import React from 'react'

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"

const CalcTempoForm = () => {
  const {register, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "interessados" });
  return (
    <>
       <h2 style={{marginBottom: '2%'}}>Cálculo do tempo x esforço empregado</h2>
        <label>Simulador</label>
        <table className="table_1">
        <thead>
        <tr>
        <th style={{width: '200px'}}>Departamento</th>
        <th style={{width: '120px'}}>Go Live</th>
        <th style={{width: '120px'}}>Qtd. Colaboradores</th>
        <th style={{width: '120px'}}>Qtd. Empresas</th>
        <th style={{width: '120px'}}>Qtd Diária de empresas por colaborador</th>
        <th style={{width: '120px'}}>Qtd Semanal de empresas por colaborador</th>
        <th style={{width: '120px'}}>Dias úteis em implantação</th>
        <th style={{width: '65px'}}>Ações</th>

        </tr>
        {fields.map((field, index) => (
        <tr key={field.id}> 
          <td>
            <input
              type="text"
              maxLength="120"
              placeholder="Nome"
              {...register(`interessados.${index}.nome` , { required: true, maxLength: 90 })} 
            />
          </td>
     
          <td>
            <input
              type="text"
              maxLength="60"
              placeholder="Funcão"
              {...register(`interessados.${index}.funcao` , { required: true, maxLength: 60 })} 
            />
          </td>

          <td>
            <input
              type="text"
              maxLength="60"
              placeholder="(ddd) + telefone"
              {...register(`interessados.${index}.fone` , { required: true })} 
            />
          </td>

          <td>
            <input
              type="text"
              maxLength="60"
              
              {...register(`interessados.${index}.fone` , { required: true })} 
            />
          </td>


          <td></td>
          <td></td>
          <td></td>
          <td>
              <i onClick={() => {append({ name: "interessados"  }); }}><FaRegPlusSquare/></i>
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

export default CalcTempoForm