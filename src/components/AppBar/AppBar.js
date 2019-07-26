import React from "react";
import "./appbar.scss";
import { Link } from 'react-router-dom'
// Importações ant

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class AppBar extends React.Component { 

    state = {
    collapsed: false,
  };
  
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

 

  render() {
    return (
      
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="menuAnt">
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

              <Menu.Item key="1">
                  <Link to="/">
                      <Icon type="home" />
                      <span>Home</span>
                  </Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/list">
                    <Icon type="team" />
                    <span>Elenco</span>
                  </Link>
              </Menu.Item>
              
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
            </div>
          </Sider>
        
    );
  }
}

export default AppBar;