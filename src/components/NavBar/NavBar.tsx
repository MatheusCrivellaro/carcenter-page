import {motion} from 'framer-motion';
import {useEffect, useState} from "react";
import {FaWhatsapp} from "react-icons/fa";
import {NavLink} from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

    const [isOpenOptions, setIsOpenOptions] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [widthAtual, setWidthAtual] = useState(window.innerWidth);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > ((widthAtual>992) ? 40 : 30)) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', () => setWidthAtual(window.innerWidth));
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname])

    return (
        <div className="nav-container">
            <div className="div-horarios-nav">
                <span>Horário de atendimento</span>: Seg a Sex - 9h às 18h | Sáb - 9h às 16h
            </div>
            <div className={isSticky ? "suspense-nav" : ""}>
                <nav>
                    <div className="title-div-nav">
                        <img src="/logo.png" alt="" />
                    </div>
                    <div className='optionals-div-nav'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                        >
                            Início
                        </NavLink>
                        <NavLink
                            to="/veiculos"
                            className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                        >
                            Veiculos
                        </NavLink>
                        <NavLink
                            to="/venda-seu-veiculo"
                            className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                        >
                            Venda seu veículo
                        </NavLink>
                        <NavLink
                            to="/financiamento"
                            className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                        >
                            Financiamentos
                        </NavLink>
                        <NavLink
                            to="/sobre-nos"
                            className={({ isActive }) => isActive ? "active-button-nav button-nav" : "deactivated-button-nav button-nav"}
                        >
                            Sobre nós
                        </NavLink>
                        <a href="https://api.whatsapp.com/send/?phone=5511934524004&text&type=phone_number&app_absent=0"
                            className="text-decoration-none">
                            <button className='whatsapp-button-nav button-nav'>
                                <p className='text-whatsapp-button-nav text-button-nav'>(11) 3682-4544</p>
                                <FaWhatsapp className="icon-wpp-nav" />
                            </button>
                        </a>
                    </div>
                    <div className="button-open-options">
                        <div
                            onClick={() => setIsOpenOptions(!isOpenOptions)}
                            style={{
                                cursor: 'pointer',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                        >
                            <motion.div
                                animate={isOpenOptions ? { rotate: 45, y: 0 } : { rotate: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="button-open-options-linha"
                            />
                            <motion.div
                                animate={isOpenOptions ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="button-open-options-linha"
                            />
                            <motion.div
                                animate={isOpenOptions ? { rotate: -45, y: 0 } : { rotate: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                                className="button-open-options-linha"
                            />
                        </div>
                    </div>
                </nav>
                <motion.div
                    initial={{ height: 0, opacity: 1 }}
                    animate={{ height: isOpenOptions ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                    className="nav-collapse-div"
                >
                    <div className="collapse-options-nav">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "active-button-nav-collapse button-nav-collapse" : "deactivated-button-nav-collapse button-nav-collapse"}
                        >
                            Início
                        </NavLink>
                        <NavLink
                            to="/veiculos"
                            className={({ isActive }) => isActive ? "active-button-nav-collapse button-nav-collapse" : "deactivated-button-nav-collapse button-nav-collapse"}
                        >
                            Veiculos
                        </NavLink>
                        <NavLink
                            to="/venda-seu-veiculo"
                            className={({ isActive }) => isActive ? "active-button-nav-collapse button-nav-collapse" : "deactivated-button-nav-collapse button-nav-collapse"}
                        >
                            Venda seu veículo
                        </NavLink>
                        <NavLink
                            to="/financiamento"
                            className={({ isActive }) => isActive ? "active-button-nav-collapse button-nav-collapse" : "deactivated-button-nav-collapse button-nav-collapse"}
                        >
                            Financiamentos
                        </NavLink>
                        <NavLink
                            to="/sobre-nos"
                            className={({ isActive }) => isActive ? "active-button-nav-collapse button-nav-collapse" : "deactivated-button-nav-collapse button-nav-collapse"}
                        >
                            Sobre nós
                        </NavLink>
                    </div>

                    <a href="https://api.whatsapp.com/send/?phone=5511934524004&text&type=phone_number&app_absent=0" className='whatsapp-button-nav-collapse'>
                        <p>(11) 3682-4544</p>
                        <FaWhatsapp className="icon-wpp-nav-collapse" />
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default NavBar
