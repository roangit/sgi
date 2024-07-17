import React, { useEffect } from 'react'
import { useFormContext, useFieldArray } from "react-hook-form"

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

const ObjetiveForm = () => {
  const {register, control, setFocus, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "objetivos" });

  useEffect(() => {
    setFocus("objetivos.0.descri")
  }, [setFocus])

return (
  <>
  <h2 style={{marginBottom: '2%'}}>Objetivos</h2>
  <label>O projeto será considerado um sucesso se...</label>
  <ul>
    {fields.map((field, index) => (
      <li key={field.id}>
          <input 
            type="text"
            placeholder="Descreva de forma SMART quais os KPIs/OKRs de sucesso do projeto."
            required
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