import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './Chat.css';

const initialMessage = [
  'Olá, seja bem vindo', 
  'Olá, seja bem vindo2', 
  'Olá, seja bem vind3o', 
  'Olá, seja bem 4vindo',
]

export default function Chat() {

  const [msg] = useState(initialMessage);
  const [mensagem, setMensagem] = useState("");
  const [listaMensagem, setListaMensagem] = useState([]);

  function addMensagem(e) {
    e.preventDefault();

    if (!!mensagem) {
      setListaMensagem([...listaMensagem, mensagem]);
      setMensagem("");
    }

  }

  return (
    <div>

      <p>Bem vindo ao atendimento on-line, digite sua mensagem!</p>

      <p><b>Atendente diz</b>: 
        {msg.map(msgAtendente => (
          <p key={msgAtendente.index}>{msgAtendente}</p>
        ))}
      </p>

      <p><b>Você diz</b>:
        {listaMensagem.map((msgUser, index) => (
          <p key={msgUser.index}>{msgUser}</p>
        ))}
      </p>

      <div className="form">

        <form onSubmit={addMensagem}>

          <Input 
            name="mensagem"
            onChange={(e) => setMensagem(e.target.value)} 
            value={mensagem} 
            style={{ width: '50ch' }} 
            placeholder="Digite sua mensagem..." 
          />

          <Button onClick={addMensagem} type="primary" icon={<SendOutlined />}>Enviar</Button>

        </form>

      </div>

    </div>
  );
}