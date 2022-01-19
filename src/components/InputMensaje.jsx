import React from 'react';
import { chatContext } from '../context/ChatProvider';

const InputMensaje = () => {

  const {agregarMensajes, usuario} = React.useContext(chatContext)  

  const [mensaje, setMensaje] = React.useState('')  

  return (
    <div className="input-group fixed-bottom p-3 bg-dark">
        <input onChange={(e) => setMensaje(e.target.value)} type="text" className="form-control" placeholder="Mensaje"/>
        <button onClick={() => agregarMensajes(mensaje, usuario)} className="btn btn-primary" type="button">Enviar</button>
  </div>
  )
};

export default InputMensaje;
