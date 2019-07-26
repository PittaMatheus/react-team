import React from "react";
import Cards from './Card'
import { Card } from "antd";
import { Row, Col } from 'antd';


class ListaCards extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dados:[{ 
                titulo : "goleiro" ,
                alt: "alt exe",
                posicao: 'goleiro',
                imagem:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            },{
                titulo: "zagueiro", 
                alt: "alt 2", 
                posicao: 'zagueiro',
                imagem:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            },{
                titulo: "lateral", 
                alt: "alt 2", 
                posicao: 'lateral',
                imagem:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            },{
                titulo: "meio campo", 
                alt: "alt 2", 
                posicao: 'meio campo',
                imagem:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            },{
                titulo: "atacante", 
                alt: "alt 2", 
                posicao: 'atacante',
                imagem:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            }
        ]
      }
    }

    render(){
        let jogadores = this.state.dados;
        let aux = [];
        let novaLista = [];
        for(let k=0; k<jogadores.length;k++){
            aux.push(jogadores[k]);
            // verificando se o tamanho da variavel atual é igual ao tamanho do grid por linha
            if(aux.length == this.props.qtdLinha){
                novaLista.push(aux);
                // Se o limite do grid for atingido a lista é zerada
                aux = [];
                // teste se estou na ultima contagem da lista(ex: 4 por linha e restam 3)
            }else if(k == jogadores.length - 1){
                // estou na ultima listagem
                novaLista.push(aux);
            }
        }
        console.log(novaLista);
        let tamanhoCol = this.props.tamanhoCol;
        console.log(tamanhoCol);
        let listaCartoes = function(grupo, self) {
            var i = 0;
            return grupo.map(function(item){
                i = i+1;
                return (
                    <Col span={tamanhoCol} key={i}>
                        <Cards dados={item} />
                    </Col>
                );
            });
        };
        let self = this;
        let linha = novaLista.map(function(grupo){
            return (
                <div >
                    <Row type="flex" justify="start">
                        {listaCartoes(grupo, self)}
                    </Row>
                </div>
            );
        });
        return (
            <div key={1}>
               {linha}
            </div>
        )
    }
}
export default ListaCards;