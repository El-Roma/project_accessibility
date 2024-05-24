import React from 'react';

function Header() {
    return (
        <header aria-label="haut de page" className="header">
            <div className="header-left">
                <img src="/images/ski-sport-logo-vintage-vector-logo-Graphics-22202736-1.webp" alt="Logo de la station de ski Valthorens" className="img-ski"/>
                <h1>Mon Blog de Ski</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/login" className="login-link">Connexion</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
