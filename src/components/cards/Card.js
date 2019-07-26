import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

class Cards extends React.Component {
    constructor(props){
        super(props);
      }
    render(){
        self = this.props.dados;
        console.log(self);
        return (
            <div>
                <Card
                    hoverable
                    style={{ width: 170 }}
                    cover={<img alt={this.props.dados.alt} src={this.props.dados.imagem} style={{ width: '167px',height:'100px' }} />}
                    >
                    <Meta title={this.props.dados.titulo} description={this.props.dados.descricao} />
                </Card>
            </div>
            );
    }
}
export default Cards;

