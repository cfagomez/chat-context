import React from 'react'
import {chatContext} from './context/ChatProvider'
import Navbar from "./components/Navbar"
import Chat from "./components/Chat"

function App() {

  const {usuario} = React.useContext(chatContext)

  return (
    <div className="App">
      <Navbar />
      {
        usuario.activo ? (
          <Chat />
        ) : (
          null
        )
      }
      
    </div>
  );
}

export default App;
