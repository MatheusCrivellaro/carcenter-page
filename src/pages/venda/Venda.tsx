import './Venda.css';
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import cumprimento from "../../../public/cumprimento.jpeg"
import analise_carro from "../../../public/analise-carro.jpeg"
import conversa from "../../../public/conversa.jpeg"
import FormDadosClienteVenda from "../../components/FormDadosClienteVenda/FormDadosClienteVenda.tsx";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Venda = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="venda">
            <ButtonSuspense />
            <div className="venda-container">
                <div className="venda-form">
                    <div className="venda-form-title">
                        <h1>Quer vender seu veículo?</h1>
                        <h2>Preencha os campos abaixo com os dados do seu veículo e com os seus dados.</h2>
                    </div>
                    <FormDadosClienteVenda />
                </div>
                <div className="venda-como-funciona">
                    <h1 className="venda-como-funciona-title">Como funciona</h1>
                    <div className="container-img-passo-venda">
                        <img src={conversa} alt=""/>
                        <div className="container-text-passo-venda">
                            <h1>1º passo</h1>
                            <p>Entramos em contato com você</p>
                        </div>
                    </div>
                    <div className="container-img-passo-venda-contrario">
                        <div className="container-text-passo-venda">
                            <h1>2º passo</h1>
                            <p>Avaliamos seu veículo</p>
                        </div>
                        <img src={analise_carro} alt=""/>
                    </div>
                    <div className="container-img-passo-venda">
                        <img src={cumprimento} alt=""/>
                        <div className="container-text-passo-venda">
                            <h1>3º passo</h1>
                            <p>Fechamos negócio</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venda

