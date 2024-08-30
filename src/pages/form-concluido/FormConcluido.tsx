import './FormConcluido.css'
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

const FormConcluido = () => {

    const navigate = useNavigate();

    const formConcluidoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (formConcluidoRef.current)
            formConcluidoRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div className="formConcluido" ref={formConcluidoRef}>
            <h1>Obrigado por entrar em contato conosco!</h1>
            <h2>Já recebemos sua proposta e em breve entraremos em contato para continuar o processo!</h2>
            <button onClick={() => navigate("/")}>
                Voltar para o Início
            </button>
        </div>
    )
}

export default FormConcluido
