import './Inicio.css'
import {Link, useNavigate} from "react-router-dom";
import AvaliacaoCard from "../../components/AvaliacaoCard/AvaliacaoCard.tsx";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useCollects from "../../hooks/useCollects.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner.tsx";
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import {useEffect, useState} from "react";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading.tsx";

const Inicio = () => {

    const { data, isLoading } = useGetStock();
    const { marcas  } = useCollects(data)
    const [destaques, setDestaques] = useState<Vehicle[]>()

    const navigate = useNavigate();

    const handleSelectedMarca = (selectedMarca: string) => {
        navigate('/veiculos', { state: { marcaSelecionada: selectedMarca } });
    };

    useEffect(() => {
        setDestaques(data?.slice(0, 4))
    }, [data]);

    return (
        isLoading ?
            <SpinnerLoading />
            :
            <div className="inicio">
                <ButtonSuspense/>
                <CarouselBanner/>

                <div className="div-carousel-categorias">
                    <CarouselCategorias marcas={marcas} handleSelectedMarca={handleSelectedMarca}/>
                </div>

                <div className="veiculos-destaque-div-inicio" id="veiculos-destaque">
                    <h1>Veículos em destaque</h1>
                    <div className="veiculos-destaque-cards-div-inicio">
                        {destaques?.map((i: Vehicle, index) =>
                            <CardVeiculoEstoque veiculo={i} key={"carro" + index}/>
                        )}
                    </div>
                    <div className="col-12 d-flex justify-content-start">
                        <Link to="/veiculos/#veiculos" className="button-veiculos-destaque-inicio">Ver
                            estoque</Link>
                    </div>
                </div>
                <div className="avaliacoes-div-inicio">
                    <div className="avaliacoes-cards-div-inicio row">
                        <h1 className="col-12">Depoimentos dos nossos clientes</h1>
                        <AvaliacaoCard title="Renata queiroz"
                                       description="“Realizei a compra com vendedor Marcos, desde o primeiro contato fui bem atendida, super atencioso e disponivel mesmo no pós venda. e trouxe o carro ate o endereco como cortesia. Recomendo que procurem por ele na loja!”"
                                       image="https://resized-images.autoconf.com.br/100x100/filters:format(webp)/site_depoimento/912/acc68c8d-4744-4bd3-9140-165c9828ff1c.jpeg"/>
                        <AvaliacaoCard title="Gabriel Dantas"
                                       description="“Recentemente comprei um Etios na mão do vendedor do Marcos e me surpreendi positivamente com o tratamento dele para comigo, sempre muito prestativo, disposto a ajudar e resolver todas as questões, mesmo depois da venda. Recomendo demais”"
                                       image="https://resized-images.autoconf.com.br/100x100/filters:format(webp)/site_depoimento/912/11f3c0d5-1a57-411e-9d8a-551e3d051cfc.jpeg"/>
                        <AvaliacaoCard title="Rogerio Barbosa"
                                       description="“atendimento diferenciado, honestidade e qualidade nas informações, carros revisados e com garantia... indico !”"
                                       image="https://resized-images.autoconf.com.br/100x100/filters:format(webp)/site_depoimento/912/968cd3d4-c4e0-47d9-a613-c4ec7eabf844.jpeg"/>
                    </div>
                </div>
            </div>
    )
}

export default Inicio
