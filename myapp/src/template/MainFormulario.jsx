import './Main.css'
import React from 'react'

import Formulario from '../components/formulario/formulario'
import Header from './Header'
import { FaMap } from 'react-icons/fa';


export default props =>
	<React.Fragment>
		<Header header="Buscar Endereço" subheader="CEP" icone="fa fa-map icone-header"/>
		<main className="content container-fluid">
			<div className="p-5 mt-3">
				<Formulario />
			</div>
		</main>
	</React.Fragment>
