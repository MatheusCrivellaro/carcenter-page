import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa6";
import img_financiamento_1 from "../../../public/1_Mesa de trabajo 1.png";
import img_financiamento_2 from "../../../public/2.png";
import img_financiamento_3 from "../../../public/3.png";
import img_financiamento_4 from "../../../public/4.png";
import img_financiamento_5 from "../../../public/5.png";
import img_financiamento_6 from "../../../public/6.png";
import img_form from "../../../public/img-financiamento-formulario.png";
import ArrowFinanciamento from "../../components/ArrowFinanciamento/ArrowFinanciamento.tsx";
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import CardIntituicoesParceiras from "../../components/CardIntituicoesParceiras/CardIntituicoesParceiras.tsx";
import CardPassoFinanciamento from "../../components/CardPassoFinanciamento/CardPassoFinanciamento.tsx";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import './Financiamento.css';
import FormFinanciamento from "../../components/FormFinanciamento/FormFinanciamento.tsx";

const Financiamento = () => {

    const { getLogoUrl } = useGetLogoEmpresas()
    const formRef = useRef<HTMLDivElement>(null);

    const handleScrollForm = () => {
        if (formRef.current)
            formRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const listInstitucion = [
        { name: "Bradesco", url: "bradesco.com.br", img: "" },
        { name: "Banco Pan", url: "bancopan.com.br", img: "" },
        { name: "BV", url: "bv.com.br", img: "" },
        { name: "Creditas", url: "creditas.com.br", img: "" },
        { name: "Daycoval", url: "daycoval.com.br", img: "" },
        { name: "Digimais", url: "digimais.com.br", img: "" },
        { name: "Itaú", url: "itau.com.br", img: "" },
        { name: "omni", url: "omni.com.br", img: "" },
        { name: "Santander", url: "santander.com.br", img: "" },
        { name: "Safra", url: "safra.com.br", img: "" },
    ];

    return (
        <div className="financiamento">
            <ButtonSuspense />
            <div className="financiamento-container">
                <div className="passos-financiamento-container">
                    <h1>Fazer um financiamento</h1>
                    <div className="passos-financiamento">
                        <CardPassoFinanciamento img={img_financiamento_1} title="1º passo - Pesquisa" description="Pesquisamos por taxas dos bancos com base nos seus dados pessoais, dados do veículo e valor a ser financiado." />
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img={img_financiamento_2} title="2º passo - Aprovação" description="Você escolhe a melhor opção e passamos todos os seus dados ao banco para te aprovar." />
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img={img_financiamento_3} title="Pronto" description="Agora é só assinar o contrato conosco e realizar o pagamento." />
                    </div>
                    <div className="button-container-passoas-financiameto">
                        <button onClick={handleScrollForm}>
                            Fazer um financiamento
                            <FaArrowDown className="button-icon-passoas-financiameto" />
                        </button>
                    </div>
                </div>
                <div className="passos-financiamento-container">
                    <h1>Fazer um refinanciamento</h1>
                    <div className="passos-financiamento">
                        <CardPassoFinanciamento img={img_financiamento_4} title="Dinheiro no bolso" description="Faça empréstimos, deixando seu veículo como forma de garantia." />
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img={img_financiamento_5} title="Aprovação" description="Pré-aprovação em minutos, após finalizar cadastro." />
                        <ArrowFinanciamento />
                        <CardPassoFinanciamento img={img_financiamento_6} title="Por que contratar?" description="Facilidade em emprestar quantias maiores com prazo maior de pagamento, além de taxas competitivas." />
                    </div>
                    <div className="button-container-passoas-financiameto">
                        <button onClick={handleScrollForm}>
                            Fazer refinanciamento
                            <FaArrowDown className="button-icon-passoas-financiameto" />
                        </button>
                    </div>
                </div>
                <div className="instituicoes-financiamento">
                    <h1>Instituições parceiras</h1>
                    <div className="container-cards-instituicoes-financiamento">
                        {listInstitucion.map((value, index) =>
                            <CardIntituicoesParceiras img={getLogoUrl(value.url)} titulo={value.name} key={index} />
                        )}
                    </div>
                </div>
                <div className="formilario-financiamento" ref={formRef}>
                    <div>
                        <h1>Quer financiar ou refinanciar seu veículo?</h1>
                        <h2>Preencha os campos abaixo com os dados do seu veículo e com os seus dados.</h2>
                        <FormFinanciamento />
                    </div>
                    <div className="img-financiamento-form">
                        <img src={img_form} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financiamento

