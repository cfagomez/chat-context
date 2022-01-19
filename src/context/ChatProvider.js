import React from 'react';
import { auth, db, firebase } from '../firebase';

export const chatContext = React.createContext()

const ChatProvider = (props) => {

  const estadoInicial = {
      email: null,
      uid: null,
      activo: false
  }  

  const [usuario, setUsuario] = React.useState(estadoInicial)
  const [mensajes, setMensajes] = React.useState([])

  React.useEffect(() => {
      detectarUsuario()
  },[])
  
  const detectarUsuario = () => {
      auth.onAuthStateChanged(user => {
          if (user) {
            setUsuario({
                email: user.email,
                uid: user.uid,
                activo: true
            })
            //leerMensajes()
          } else {
            setUsuario(estadoInicial)
          }
      })
  }

  const iniciarSesion = async () => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider()
        const res = await auth.signInWithPopup(provider)
        console.log(res)
      } catch (error) {
          console.log(error)
      }
  }

  const cerrarSesion = () => {
      auth.signOut()
  }

  const leerMensajes = () => {
      db.collection('chat')
        .onSnapshot(query => {
            const arrayMensajes = query.docs.map(item => item.data())
            setMensajes(arrayMensajes)
        })
  }

  const agregarMensajes = async (mensaje, usuario) => {
      try {
        await db.collection('chat').add({
            texto: mensaje,
            fecha: Date.now(),
            uid: usuario.uid
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <chatContext.Provider value={{iniciarSesion, cerrarSesion, usuario, mensajes, agregarMensajes}}>
        {props.children}
    </chatContext.Provider>
  ) 
};

export default ChatProvider;
