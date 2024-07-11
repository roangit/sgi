import React from 'react'

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"

const MetasForm = () => {
  const {register, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "interessados" });
  return (
    <>
       <h2 style={{marginBottom: '2%'}}>Metas/Prazos</h2>
        <label>Defina as principais entregas e seus prazos</label>
        <table className="table_1">
        <thead>
        <tr>
        <th style={{width: '350px'}}>Meta/KPIs/OKRs</th>
        <th style={{width: '200px'}}>Prazo</th>
        <th style={{width: '65px'}}>Ações</th>

        </tr>
        {fields.map((field, index) => (
        <tr key={field.id}> 
          <td>
            <input
              type="text"
              maxLength="120"
              placeholder="Descreva a meta"
              {...register(`interessados.${index}.nome` , { required: true, maxLength: 90 })} 
            />
          </td>
     
          <td>
            <input
              type="text"
              maxLength="60"
              placeholder="Prazo"
              {...register(`interessados.${index}.funcao` , { required: true, maxLength: 60 })} 
            />
          </td>

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

export default MetasForm