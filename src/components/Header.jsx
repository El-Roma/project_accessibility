import React from 'react';

function Header() {
    return (
        <header role="banner" aria-label="haut de page" className="header">
            <div className="header-left">
                <img
                    src="/images/ski-sport-logo-vintage-vector-logo-Graphics-22202736-1.webp"
                    alt="Logo de la station de ski Valthorens"
                    className="img-ski"
                />
                <h1>Mon Blog de Ski</h1>
            </div>
            <nav role="navigation" aria-label="Menu principal">
                <a href="/" className="login-link" tabindex="1">Home</a>
                <a href="/login" className="login-link" tabindex="2">Connexion</a>
            </nav>
        </header>
    );
}

export default Header;
