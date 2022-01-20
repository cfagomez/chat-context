import React from 'react'
import {chatContext} from './context/ChatProvider'
import Navbar from "./components/Navbar"
import Chat from "./components/Chat"

function App() {

  const {usuario} = React.useContext(chatContext)

  return (
    <div className="App text-center">
      <Navbar />
      {
        usuario.activo ? (
          <Chat />
        ) : (
          <span className='lead'>Debes iniciar sesion</span>
        )
      }
      
    </div>
  );
}

export default App;
