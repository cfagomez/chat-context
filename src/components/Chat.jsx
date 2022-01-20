import React from 'react';
import { chatContext } from '../context/ChatProvider';
import InputMensaje from './InputMensaje';

const Chat = () => {

  const {mensajes, usuario} = React.useContext(chatContext)

  const refZonaChat = React.useRef(null)

  React.useEffect(() => {

    refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight

  }, [mensajes])

  return (
    <>
        <div className='container mt-3' style={{height: '75vh', overflowY: 'scroll'}} ref={refZonaChat}>
          {
            mensajes.map((item, index) => {
              if (item.uid === usuario.uid) {
                return (
                  <div key={index} className='text-end'>
                      <span className="badge bg-primary">{item.texto}</span>
                  </div>
                )
              } else {
                return (
                  <div key={index} className='text-start'>
                      <span className="badge bg-secondary">{item.texto}</span>
                  </div>
                )
              }
            })
          }
        </div>
        <InputMensaje />
    </>  
  )
};

export default Chat;
