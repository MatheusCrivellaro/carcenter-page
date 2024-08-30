import './Sobre.css';
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import {FaWhatsapp} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";

const Sobre = () => {
    return (
        <div className="sobre-nos">
            <ButtonSuspense/>
            <h1>Sobre nós</h1>
            <p>
                A <span>CAR CENTER MULTIMARCAS</span> está no mercado de vendas de veículos desde o ano de 2001, sempre ajudando seus
                clientes a realizar seus sonhos. Para isso, contamos com uma equipe especializada na avaliação, compra e
                venda de automóveis e isso garante um veiculo com menor preço, melhor avaliação do seu usado na troca,
                as melhores taxas e condições de pagamento. Venha conhecer nossa loja e realizar seu sonho com a gente,
                estamos localizado na Cidade de Osasco. Aguardamos sua visita!
            </p>
            <div className="row d-flex justify-content-between align-items-center mb-5">
                <img src="https://static.autoconf.com.br/site-car-center-912/build/imagem-1.webp" alt="" className="col-3 img-sobre-nos"/>
                <img src="https://static.autoconf.com.br/site-car-center-912/build/imagem-2.webp" alt="" className="col-3 img-sobre-nos"/>
                <img src="https://static.autoconf.com.br/site-car-center-912/build/imagem-3.webp" alt="" className="col-3 img-sobre-nos"/>
            </div>
            <h1 className="text-center">Atendimento</h1>
            <div className="row align-items-center justify-content-center">
                <div className="col-4 px-4">
                    <img src="https://static.autoconf.com.br/site-car-center-912/build/logo.png" alt=""
                         className="img-atendimento-sobre-nos"/>
                    <h2>
                        Vendemos e compramos carros seminovos com transparência, segurança e o conforto que você merece.
                    </h2>
                </div>
                <div className="col-3 text-center div-content-atendimento">
                    <h2>
                        Entre em contato pelo Whatsapp da Car Center Osasco Eireli
                    </h2>
                    <button className="wpp-button-atendimento">
                        <a href="https://api.whatsapp.com/send/?phone=5511934524004&text&type=phone_number&app_absent=0"><FaWhatsapp className="icon-wpp-button-atendimento"/>(11) 93452-4004</a>
                    </button>
                    <h2>
                        Ou ligue agora para:
                    </h2>
                    <h3 className="phone-atendimento">
                        <FaPhone className="icon-phone-atendimento"/>
                        <span>(11) 3682-4544</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Sobre
