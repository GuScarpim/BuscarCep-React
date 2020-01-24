import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            {/* <img src={logo} alt="logo" /> */}
            <h3>Gustavo Scarpim</h3>
        </Link>
    </aside>