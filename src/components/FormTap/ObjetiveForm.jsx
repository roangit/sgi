import React from 'react'
import { useFormContext, useFieldArray } from "react-hook-form"

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

const ObjetiveForm = () => {
  const {register, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "objetivos" });


return (
  <>
  <h2 style={{marginBottom: '2%'}}>Objetivos</h2>
  <label>O projeto será considerado um sucesso se...</label>
  <ul>
    {fields.map((field, index) => (
      <li>
          <input key={field.id}
            type="text"
            placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."
            {...register(`objetivos.${index}.descri`)}
          />
          <i onClick={() => {append({ name: "objetivos"  }); }}><FaRegPlusSquare/></i>
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
export default ObjetiveForm