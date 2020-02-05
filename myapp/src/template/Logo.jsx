import './Logo.css'
import React from 'react'

import Imagem from '../img/logoBranco.png'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/index" className="logo">
            <img src={Imagem} className="logo" />
           
        </Link>
    </aside>