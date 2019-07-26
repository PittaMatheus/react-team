
import React from "react";
import { Layout } from 'antd';
const { Content } = Layout;
import ListaCards from '../../cards/ListaCards';
import Cabecalho from '../../Header/Header'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "../../../containers/Routes";

//sass
import "../";

const Elenco = () => (
  <div>
    <Router>
        <Cabecalho/>
        <Content>
            <div className="content">
              <h3>Elenco</h3>
              <Routes
                listaCards={ListaCards} 
                />         
              <ListaCards tamanhoCol={6} qtdLinha ="4"/> 
            </div>
        </Content>
    </Router>
  </div>
);

export default Elenco;


