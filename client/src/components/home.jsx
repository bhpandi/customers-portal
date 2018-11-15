import React from "react";
import Profile from "./Profile";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const Home = props => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
          <Profile orderDetails={props.orderDetails} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
