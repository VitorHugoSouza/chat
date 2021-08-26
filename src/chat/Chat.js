import { Button, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';

import './Chat.css';


export default function Chat() {
  return(
    <div className="camposRodape">
      Bem vindo ao atendimento on-line, digite sua mensagem!
      
      <div >

        <Input placeholder="Digite sua mensagem..." />

        <Button type="primary" icon={<SendOutlined />}>Enviar</Button>

      </div>

    </div>
  );
}