import './Main.css'
import React from 'react'

import Index from '../components/index/index'
import Header from './Header'

export default props =>
	<React.Fragment>
		<Header header="Buscar Endereço" subheader="CEP" icone="fa fa-map icone-header"/>
		<main className="content container-fluid">
			<div className="p-5 mt-3">
				<Index />
			</div>
		</main>
	</React.Fragment>
