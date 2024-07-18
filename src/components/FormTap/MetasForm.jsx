import React from 'react'

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"
import { Svg } from '@react-pdf/renderer';
import { height } from '@mui/system';

const MetasForm = () => {
  const {register, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "metas" });

     //Para uso no campo input de data
  
      const dt = new Date();
      const day = ("0" + dt.getDate()).slice(-2);
      const month = ("0" + (dt.getMonth() + 2)).slice(-2);
      const date = dt.getFullYear() + "-" + month + "-" + day;

  return (
    <>
       <h2 style={{marginBottom: '2%'}}>Metas/Prazos</h2>
        <label>Defina as principais entregas e seus prazos</label>
        <table className="table_1">
        <thead>
        <tr>
        <th style={{width: '350px'}}>Meta/KPIs/OKRs</th>
        <th style={{width: '200px'}}>Prazo</th>
        <th style={{width: '40px'}}>Ações</th>

        </tr>
        {fields.map((field, index) => (
        <tr key={field.id}> 
          <td>
            <input
              type="text"
              maxLength="120"
              placeholder="Descreva a meta"             
              {...register(`metas.${index}.descri` , { required: true, maxLength: 90 })} 
            />
          </td>
     
          <td>
            <input
              type="date"
              placeholder="Prazo"
              {...register(`metas.${index}.prazo` , { required: true, maxLength: 60 })} 
            />
          </td>

          <td>
              <i onClick={() => {append({ descri: '', prazo: ''}); }}><FaRegPlusSquare/></i>
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