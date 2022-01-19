import React from 'react';
import InputMensaje from './InputMensaje';

const Chat = () => {
  return (
    <>
        <div className='container mt-3'>
            <div className='text-end'>
                <span className="badge bg-primary">Primary</span>
            </div>
            <div className='text-start'>
                <span className="badge bg-secondary">Secondary</span>
            </div>
        </div>
        <InputMensaje />
    </>  
  )
};

export default Chat;
