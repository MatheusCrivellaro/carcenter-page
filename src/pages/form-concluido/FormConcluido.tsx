import './FormConcluido.css'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const FormConcluido = () => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="formConcluido">
            <h1>Obrigado por entrar em contato conosco!</h1>
            <h2>Já recebemos sua proposta e em breve entraremos em contato para continuar o processo!</h2>
            <button onClick={() => navigate("/")}>
                Voltar para o Início
            </button>
        </div>
    )
}

export default FormConcluido
