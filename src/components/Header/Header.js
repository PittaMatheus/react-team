import React from "react";
import { Layout, Menu} from 'antd';
import { Link } from 'react-router-dom'
//sass
import "./Header.scss";

const { Header, Footer, Sider, Content } = Layout;
const Cabecalho = ({
  
}) => (
  <div>
        <Header>
            <div className="logo" />
            <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
            >
         
                <Menu.Item key="1">
                    <Link to="/list/goleiros">GK</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/list/goleiros">
                        ZAG
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/list/goleiros">
                        LAT
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/list/goleiros">
                        MEI
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="/list/goleiros">
                      ATA
                    </Link>
                </Menu.Item>
                <Menu.Item key="6">
                    <Link to="/list/goleiros">
                       TEC
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
  </div>
);

export default Cabecalho;











