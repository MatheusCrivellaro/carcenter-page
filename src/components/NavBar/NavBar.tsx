import { FaWhatsapp } from "react-icons/fa";
import {NavLink} from "react-router-dom";
import './NavBar.css';
import {useEffect, useState} from "react";

const NavBar = () => {

    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > 40) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname])

    return (
        <div className="nav-container">
            <div className="div-horarios-nav">
                <span>Horário de atendimento</span>: Seg a Sex - 9h às 18h | Sáb - 9h às 16h
            </div>
            <nav className={isSticky ? "suspense-nav" : ""}>
                <div className="title-div-nav">
                    <img src="https://static.autoconf.com.br/site-car-center-912/build/logo.png" alt=""/>
                </div>
                <div className='optionals-div-nav'>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                    >
                        Início
                    </NavLink>
                    <NavLink
                        to="/veiculos"
                        className={({isActive}) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                    >
                        Veiculos
                    </NavLink>
                    <NavLink
                        to="/venda-seu-veiculo"
                        className={({isActive}) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                    >
                        Venda seu veículo
                    </NavLink>
                    <NavLink
                        to="/financiamento"
                        className={({isActive}) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                    >
                        Financiamentos
                    </NavLink>
                    <NavLink
                        to="/sobre-nos"
                        className={({isActive}) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                    >
                        Sobre nós
                    </NavLink>
                    <a href="https://api.whatsapp.com/send/?phone=5511934524004&text&type=phone_number&app_absent=0" className="text-decoration-none">
                        <button className='whatsapp-button-nav button-nav'>
                            <p className='text-whatsapp-button-nav text-button-nav'>(11) 3682-4544</p>
                            <FaWhatsapp className="icon-wpp-nav"/>
                        </button>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
