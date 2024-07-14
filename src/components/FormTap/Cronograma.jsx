import React from 'react'
import { saveAs } from 'file-saver';
import { BlobProvider} from '@react-pdf/renderer';
import MyDoc from '../../reports/Report1';


//import icones
import { FaRegPlusSquare, FaTrashAlt } from "react-icons/fa";

import { useFormContext, useFieldArray } from "react-hook-form"

const Cronograma = () => {
  const {register, control, handleSubmit, watch, getValues  } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control,  name: "interessados" });

  function exportFile() {
    let lyrics =
    "But still I'm having memories of high speeds when the cops crashed\n" +
    "As I laugh, pushin the gas while my Glocks blast\n" ; 
    
  
    var blob = new Blob([lyrics], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "testfile1.txt");
  }

  return (
    <>
       <h2 style={{marginBottom: '2%'}}>Cronograma</h2>
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
            <select 
              {...register(`interessados.${index}.tipoInteresse` , { required: true })} >
              <option value="Positivo">Positivo</option>
              <option value="Negativo">Negativo</option>
            </select>
          </td>

          <td>
            <select 
              {...register(`interessados.${index}.grauInteresse` , { required: true })} >
              <option value="Negativo">Alto</option>
              <option value="Positivo">Baixo</option>
            </select>
          </td>

          <td>
            <select 
              {...register(`interessados.${index}.grauInfluencia` , { required: true })} >
              <option value="Negativo">Alto</option>
              <option value="Positivo">Baixo</option>
            </select>
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

        <BlobProvider document={<MyDoc/>}>
          {({ url, ...rest }) => {
            console.log(url);
            return (
              <a href={(url != null) ? url : ""} target="_blank">Veja em pdf</a>
            );
          }}
      </BlobProvider>

      <button onClick={() => exportFile()}>exportFile</button>

    </>
  )
}

export default Cronograma