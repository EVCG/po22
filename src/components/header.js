import React from 'react';
import header from '../components/header.module.css';

export default function Header() {
    return (
        <div className={header.header}>
            <div className={header.logo_principal}>
                <img
                    src="https://institucional.uniceub.br/hubfs/BrandCenter/img/logo-ceub-colorida-02.png"
                    className={header.logo}
                    alt="Logo"
                />
            </div>

            {/* Navegação do site */}
            <div className={header.nav}>
                <a href="#" className={header.nav_painel}>Painel</a>
                <a href="#" className={header.nav_base_profesores}>Base Professores</a>
                <a href="#" className={header.nav_manual}>Manual</a>
            </div>

            {/* Usuário */}
            <div className={header.usuario}>
                <h1>SEU NOME</h1>
                <div className={header.avatar}>
                    <div className={header.cabeca}></div>
                    <div className={header.corpo}></div>
                </div>
            </div>
        </div>
    );
}
