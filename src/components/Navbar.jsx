import React from 'react';
import { chatContext } from '../context/ChatProvider';

const Navbar = () => {

  const {iniciarSesion, cerrarSesion, usuario} = React.useContext(chatContext)

  return (
      <nav className='navbar navbar-dark bg-dark'>
          <div className="container">
              <a href="#" className='navbar-brand'>Chat</a>
              <div className="d-flex">
                  {
                      usuario.activo ? (
                        <button onClick={() => cerrarSesion()} className='btn btn-primary'>Cerrar Sesion</button>
                      ) : (
                        <button onClick={() => iniciarSesion()} className='btn btn-primary mx-2'>Acceder</button>
                      )
                  }
              </div>
          </div>
      </nav>
  );
};

export default Navbar;
