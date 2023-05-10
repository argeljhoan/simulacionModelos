import React, { useState, useEffect} from "react";
import 'boxicons'
import '../css/Cola.css'


const Iconos = ({propsNumero}) => {

  console.log(propsNumero);
  const [iconos, setIconos] = useState(Array(5).fill(false));

  // Actualiza los iconos en los divs correspondientes
  const actualizarIconos = (num) => {
    let nuevosIconos = iconos.map((icono, index) => {
      if (index < num) {
        return true;
      } else {
        return false;
      }
    });
    setIconos(nuevosIconos);
  };

  // Llama a actualizarIconos cuando el numero cambia
  useEffect(() => {
    actualizarIconos(propsNumero);
  }, [propsNumero]);

  // Renderiza los divs con los iconos correspondientes
  return (
    <div className="grid-container">
    <div className="div1">
      {iconos[0] ? <i className="bx bxs-group"></i> : null}
      <h5>Aula 1</h5>
    </div>
    <div className="div2">
      {iconos[1] ? <i className="bx bxs-group"></i> : null}
      <h5>Aula 2</h5>
    </div>
    <div className="div3">
      {iconos[2] ? <i className="bx bxs-group"></i> : null}
      <h5>Aula 3</h5>
    </div>
    <div className="div4">
      {iconos[3] ? <i className="bx bxs-group"></i> : null}
      <h5>Aula 4</h5>
    </div>
    <div className="div5">
      {iconos[4] ? <i className="bx bxs-group"></i> : null}
      <h5>Aula 5</h5>
</div>
</div>
);
};

export default Iconos;