import React, { useEffect } from 'react'

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"

const CalcTempoForm = () => {
  const {register, setFocus, setValue, control, handleSubmit, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "golive" });

  useEffect(() => {
    setFocus("golive.0.nome")
    setValue("golive.0.qtdEmpDia",50000)
    setValue("golive.0.qtdEmpSem",30000)
    setValue("golive.0.qtdDiasTotal",9990)
  }, [setFocus])

  return (
    <>
       <h2 style={{marginBottom: '2%'}}>Cálculo do tempo x esforço empregado</h2>
        <label>Simulador</label>
        <table className="table_1">
        <thead>
        <tr>
        <th style={{width: '200px'}}>Departamento</th>
        <th style={{width: '130px'}}>Go Live</th>
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
              placeholder="Depto/área"
              list="listaDeptos"
              {...register(`golive.${index}.nome` , { required: true, maxLength: 90 })} 
            />
            <datalist id="listaDeptos">
              <option value="Contabil"></option>
              <option value="Financeiro"></option>
              <option value="Fiscal"></option>
              <option value="Rh/Pessoal"></option>             
              <option value="Societário"></option>
            </datalist>
          </td>
     
          <td>
              <input
                type="date"
                placeholder="Dt. conclusão"
                {...register(`golive.${index}.golive` , { required: true })} 
              />
          </td>

          <td>
              <input
                style={{width: '100px'}}
                type='number'
                min='1'
                {...register(`golive.${index}.qtdPessoas` , { required: true })} 
              />
          </td>
          <td>
              <input
                style={{width: '100px'}}
                type='number'
                min='1'
                {...register(`golive.${index}.qtdEmpresas` , { required: true,  })} 
              />
          </td>
          <td>
              <input
                style={{width: '100px'}}
                type='text'
                disabled
                {...register(`golive.${index}.qtdEmpDia` , { required: true,  })} 
              />
          </td>
          <td>
              <input
                style={{width: '100px'}}
                type='text'
                disabled
                {...register(`golive.${index}.qtdEmpSem` , { required: true,  })} 
              />
          </td>
          <td>
              <input
                style={{width: '100px'}}
                type='text'
                disabled
                {...register(`golive.${index}.qtdDiasTotal` , { required: true,  })} 
              />
          </td>
          <td>
              <i onClick={() => {append({ name: "golive" }); }}><FaRegPlusSquare/></i>
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