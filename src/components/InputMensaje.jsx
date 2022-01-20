import React from 'react';
import { chatContext } from '../context/ChatProvider';

const InputMensaje = () => {

  const {agregarMensajes, usuario} = React.useContext(chatContext)  

  const [mensaje, setMensaje] = React.useState('') 
  
  const enviar = () => {

    if (!mensaje.trim()) {
      console.log('Mensaje vacio')
      return
    }

    agregarMensajes(mensaje, usuario)

    setMensaje('')

  }

  return (
    <div className="input-group fixed-bottom p-3 bg-dark">
        <input value={mensaje} onChange={(e) => setMensaje(e.target.value)} type="text" className="form-control" placeholder="Mensaje"/>
        <button onClick={enviar} className="btn btn-primary" type="button">Enviar</button>
  </div>
  )
};

export default InputMensaje;
