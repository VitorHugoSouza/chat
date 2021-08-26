import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import Chat from '../chat/Chat';

export default function Sidebar() {
  return (
    <Layout className="layout">
      <Header>
        <div><h3 style={{ color: '#FFFFFF' }}>Atendimento on-line</h3></div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Chat />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>201611409 - Vitor Hugo de Souza ©2021</Footer>
    </Layout>
  );
}