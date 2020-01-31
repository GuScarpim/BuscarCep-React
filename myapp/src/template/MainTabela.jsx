import './Main.css'
import React from 'react'

import Tabela from '../components/tabela/tabela'
import Header from './Header'

export default props =>
	<React.Fragment>
		<Header header="Popular Tabela Dinâmica" subheader="Tabela" icone="fa fa-table icone-header"/>
		<main className="content container-fluid">
			<div className="p-5 mt-3">
				<Tabela />
			</div>
		</main>
	</React.Fragment>
