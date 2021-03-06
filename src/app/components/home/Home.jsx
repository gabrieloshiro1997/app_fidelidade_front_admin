import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from 'react-redux';

import { ObterEstabelecimentos } from '../../redux/actions/Estabelecimento/EstabelecimentoActions';
import { ObterUsuarios } from '../../redux/actions/Usuario/UsuarioActions';

import CardHome from '../global/Card';

class Home extends Component {
	constructor(props){
		super(props);
		this.props.ObterUsuarios();
		this.props.ObterEstabelecimentos();
	}

    render(){
        return(
			<div className="animated fadeIn">
				<Row>
					<CardHome classeCor="info" quantidade={this.props.usuarios.length} tipoCard="Clientes" icone="icon-user" />
					<CardHome classeCor="danger" quantidade={this.props.estabelecimentos.length} tipoCard="Estabelecimentos" icone="icon-basket" />
				</Row>
            </div>

        )
    }
}

const MapStateToProps = (state) => {
	return {
		usuarios: state.UsuarioReducer.usuarios,
		estabelecimentos: state.EstabelecimentoReducer.estabelecimentos,
	}
}
export default connect(MapStateToProps, { ObterUsuarios, ObterEstabelecimentos })(Home)