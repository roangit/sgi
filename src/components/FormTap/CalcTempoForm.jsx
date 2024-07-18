import React, { useEffect } from 'react'

//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"

const CalcTempoForm = () => {
  const {register, setFocus, setValue, control, watch  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "golive" });

     // função de datas
  function today() {
    let d = new Date();
    let currDate = d.getDate();
    let currMonth = d.getMonth()+1;
    let currYear = d.getFullYear();
    return currYear + "-" + ((currMonth<10) ? '0'+currMonth : currMonth )+ "-" + ((currDate<10) ? '0'+currDate : currDate );
  }   

  function futureDate() {
    let date= new Date();
    let novaData = new Date(date.setMonth(date.getMonth() + 2)).toISOString().slice(0,10);
    return novaData;
  }
  
  let tam = watch('golive').length;
  let qtdEmpresas = [];
  let qtdPessoasAloc = []

  for (var i = 0; i < tam; i++) {
    qtdEmpresas[i] = watch(`golive.${i}.qtdEmpresas`);
    qtdPessoasAloc[i] = watch(`golive.${i}.qtdPessoasAloc`);
  }

  // set defalt values se necessário
  
  useEffect(() => {
    setFocus("golive.0.nome")
    //setValue(`golive.0.qtdEmpDia`,50000)
    //setValue("golive.0.qtdEmpSem",30000)
    //setValue("golive.0.qtdDiasTotal",9990)
  }, [setFocus])

  return (
    <>
       <h2 style={{marginBottom: '2%'}}>Cálculo do tempo x esforço empregado</h2>
        <label>Simulador</label>
        <table className="table_1">
        <thead>
        <tr>
        <th style={{width: '120px'}}>Departamento</th>
        <th style={{width: '120px'}}>Dt. Inicio</th>
        <th style={{width: '120px'}}>Dt Conclusão</th>
        <th style={{width: '120px'}}>Qtd. Empresas</th>
        <th style={{width: '120px'}}>Qtd. Colaboradores alocados</th>       
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
              {...register(`golive.${index}.depto` , { required: true, maxLength: 90 })} 
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
                placeholder="Dt. inicio"
                {...register(`golive.${index}.dtini` , { required: true })} 
              />
          </td>

          <td>
              <input
                type="date"
                placeholder="Dt_conclusão"
                {...register(`golive.${index}.dtfim` , { required: true })} 
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
                type='number'
                min='1'
                {...register(`golive.${index}.qtdPessoasAloc` , { required: true })} 
              />
          </td>

          <td>
              <input
                style={{width: '100px'}}
                type='text'
                disabled
                value= { String(qtdEmpresas[index] / qtdPessoasAloc[index]) }
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
                {...register(`golive.${index}.qtdTotalDias` , { required: true,  })} 
              />
          </td>
          <td>
              <i onClick={() => {append({ depto:'', dtini:today(), dtfim:futureDate(), qtdEmpresas:'0', qtdPessoasAloc:'0', qtdEmpDia:'0', qtdEmpSem:'0', qtdTotalDias:'0' }); }}><FaRegPlusSquare/></i>
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