import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "../Routes";
import AppBar from "../../components/AppBar/AppBar";
import { Layout } from 'antd';
import Elenco from "../../components/Contents/Elenco/Elenco";
import Home from "../../components/Contents/home/Home";
import Rodape from "../../components/Footer/Footer";
import Cabecalho from "../../components/Header/Header";



const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
      };
    
      
    
    render() {
        const {
            elenco
        } = this.state
        return (

        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <AppBar />
                <Layout>

                    <Routes
                        elenco={Elenco}
                        home={Home}
                        >  
                    </Routes>
                    <Rodape/>
                </Layout>
            </Layout>
        </Router>
        );
    }
}
export default App;