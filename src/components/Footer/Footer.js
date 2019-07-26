import React from "react";
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import "./footer.scss";

const Rodape = () => (
  <div>
    <Footer className="foot" >
        <p>São paulo - 2019</p>
    </Footer>
  </div>
);

export default Rodape;


