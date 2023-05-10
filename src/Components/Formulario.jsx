import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Ro, Probabilidad, numeroSistema, numeroCola, tiempoSistema, tiempoCola } from "../js/Funciones_Modelo";
import { agregarValores } from '../js/resultado';
import Table from './Table';
import "../css/Formulario.css"
const miObjetoJSON = {};
import Cola from './Cola';


function Formulario() {


  const [simulador, setSimulador] = useState(0)
  const [arrayResult ,setArrayResult] = useState([])
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const defaultValues = { landa: "", miu: "", capacidad: "" }
  const [id , setId] = useState(1)
  const [landa , setLanda] = useState(0)
  const [capacidadSimulacion , setCapacidadSimulacion] = useState(0)
  
  
  const onSubmit = (data) => {

    setLanda(data.landa)
    setCapacidadSimulacion(data.capacidad)
    const capacidad = data.capacidad
    
    const ro = Ro(data.miu, data.landa);
  
    const probabilidad = Probabilidad(ro, capacidad);
  
    const L = numeroSistema(ro, capacidad);
  
    const Lq = numeroCola(probabilidad, L);
  
    const W = tiempoSistema(L, data.landa);
  
    const Wq = tiempoCola(Lq, data.landa);
  
    const miNuevoObjetoJSON = {
      id: id,
      landa:data.landa,
      miu:data.miu,
      capacidad:data.capacidad,
      p: ro,
      probabilidad: probabilidad,
      L: L,
      Lq: Lq,
      W: W,
      Wq: Wq
    }
  
    const arrayResultados = agregarValores(miNuevoObjetoJSON)
  
    setArrayResult(arrayResultados) 
    setId(id + 1);
    setSimulador(1 + simulador)
  }
  

  useEffect(() => {
    console.log(simulador);
    reset(defaultValues);
  }, [simulador])


  return (
    <article className='Principal'>

      <form className='form_Formulario' onSubmit={handleSubmit(onSubmit)}>
        <div>
           <h3> Sistema de Simulacion para la Salas de Estudio de la Bilioteca Josué Trinidad Buitrago Acevedo </h3>
        </div>
        
        <div className='input-bloque'>
          
          
          <input type="number" {...register('landa', { required: "true" })} placeholder='Landa (λ)' />
          {errors.landa?.type === 'required' && <div className='bloque-error'><p className='error'>El Campo landa es Requerido</p></div>}
         
          
          <input type="number" {...register('miu', { required: "true" })}  placeholder='Miu (μ)'/>
          {errors.miu?.type === 'required' && <div className='bloque-error'><p className='error'>El Campo Miu es Requerido</p></div>}
         
          
          <input type="number" {...register('capacidad', { required: "true" })} placeholder='Capacidad (K)' />
          {errors.capacidad?.type === 'required' && <div className='bloque-error'><p className='error'>El Campo Capacidad es Requerido</p></div>}
        
          </div>
          <input className='btn' type="submit" value="Enviar" />
      </form>

      {arrayResult.length > 0 && 
      
      <Cola landa={landa}  capacidadSimulacion ={capacidadSimulacion}  />
      }
      {arrayResult.length > 0 && 
      
  <Table arrayResult={arrayResult} />
}

   
    </article>

  )
}

export default Formulario