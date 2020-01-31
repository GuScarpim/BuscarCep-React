import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
	<aside className="menu-area">
		<nav className="menu">
			<Link to="/index">
				<i className="fa fa-map"></i> Render comboBox
			</Link>
			<Link to="/">
				<i className="fa fa-home"></i> Buscar endereço (CEP)
            </Link>
			<Link to="/validacao">
				<i className="fa fa-users"></i> Validação de usuário
            </Link>
			<Link to="/tabela">
				<i className="fa fa-table"></i> Tabela Dinâmica
            </Link>
		</nav>
	</aside>