import React from 'react'

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"

const StakeHolderForm = () => {
  const {register, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "responsaveis" });
  return (
    <>
       <h2 style={{marginBottom: '2%'}}>StakHolders</h2>
        <label>StakHolders diretos</label>
        <ul>
          {fields.map((field, index) => (
          <li>
            <input key={field.id}
              type="text"
              maxLength="120"
              placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."
              {...register(`responsaveis.${index}.nome` , { required: true, maxLength: 120 })} 
            />
              <i onClick={() => {append({ name: "responsaveis.nome"  }); }}><FaRegPlusSquare/></i>
              {(() => {
                if (index > 0) {
                  return <i onClick={() => remove(index)}><FaTrashAlt/></i>
                }
              })()}
          </li>
          ))}
        </ul>
    </>
  )
}

export default StakeHolderForm