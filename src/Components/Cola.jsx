
import React, { useState, useEffect } from 'react'
import '../css/Cola.css'
import Iconos from './Iconos'
import 'boxicons'

const Cola = ({ landa, capacidadSimulacion }) => {

  const [divs, setDivs] = useState([]);
  const [rechazo, setRechazo] = useState([]);
  const [numRechazo, setNumRechazo] = useState(0);
  const [propsNumero, setPropsNumero] = useState(0);


  const crearDivs = (numero) => {
    const divs = [];
    
    for (let i = 0; i < numero; i++) {
      divs.push(
        <div key={i}>
          <div className='icon-container'>
            <i className='bx bx-male'></i>
          </div>
        </div>
      );  
    }


    return divs;
  };

  // Ejecutamos la función crearDivs cada vez que el número cambie
  useEffect(() => {

    setDivs(crearDivs(landa));

    let diferencia = landa - capacidadSimulacion

    
  
    if(diferencia <  0){
      let positivo = Math.abs(diferencia);
      const divs = [];
      let diferenciaNumero = 5 - positivo
      setPropsNumero(diferenciaNumero)
      console.log("numerooooooooo"+propsNumero);
      divs.push("Aulas desocupadas '"+positivo+"' ")
      setRechazo(divs)

    }else{
      const numero = 5
      
      setPropsNumero(numero)
      setNumRechazo(diferencia)
      setRechazo(crearDivs(diferencia));

    }

   

  }, [landa ,capacidadSimulacion,rechazo ]);


  console.log(landa);
  return (
    <div>

      <div className='contenedor_principal'>


        <div className='container'>{divs}</div>

        <div className='servidor'>
          <h5>Servidor</h5>
          <i className='bx bx-user'></i></div>
      </div>

      <div className='contenedorAula'>

        <h3>Aulas de Estudio</h3>

        <Iconos propsNumero={propsNumero} />
        
        <div className='contenedor_principal'>

          <div className='container'>{rechazo}</div>

          <div className='servidor'>
            <h5>Servidor</h5>
            <i className='bx bx-user'></i>
            </div>


        </div>

        <div>Numero de Grupos Rechazados : {numRechazo} Grupos </div>


      </div>


    </div>


  )
}

export default Cola