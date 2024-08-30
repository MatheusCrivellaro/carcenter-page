import './VerMais.css'
import {useLocation} from "react-router-dom";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import {SlSpeedometer} from "react-icons/sl";
import {MdOutlineCalendarMonth, MdOutlineColorLens, MdOutlineFactCheck} from "react-icons/md";
import {TbEngine, TbManualGearbox} from "react-icons/tb";
import {GoCheckCircle} from "react-icons/go";
import {HiMiniArrowsRightLeft, HiMiniSignal} from "react-icons/hi2";
import {LuFuel} from "react-icons/lu";
import {PiSteeringWheel} from "react-icons/pi";
import {GiAnvil, GiCarDoor} from "react-icons/gi";
import CarouselVerMais from "../../components/CarouselVerMais/CarouselVerMais.tsx";

const VerMais = () => {

    const location = useLocation()
    const veiculo: Vehicle = location.state.veiculo || {}
    const { getLogo } = useGetLogoEmpresas()

    const trataMarca = (valor: string) => {
        if (valor === "GASOLINA E ÁLCOOL")
            return "Flex"
        if (valor === "N")
            return "Não"
        if (valor == "S")
            return "Sim"
        return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
    }

    return (
        <div className="ver-mais">
            <CarouselVerMais images={veiculo.fotos.foto}/>
            <div className="ver-mais-title">
                <img src={getLogo(veiculo.marca)} alt="" />
                <div>
                    <h1>{trataMarca(veiculo.marca)}<span>{veiculo.modelo}</span></h1>
                    <h2>{veiculo.versao}</h2>
                </div>
                <h3>R$ <span>{veiculo.precoVenda}</span></h3>
            </div>
            <div className="informacoes-ver-mais">
                <div className="ficha-tecnica-ver-mais">
                    <h1>Ficha Técnica</h1>
                    <div className="div-item-ficha-tecnica-ver-mais">
                        <div className="item-ficha-tecnica-ver-mais">
                            <TbManualGearbox className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{trataMarca(veiculo.cambio)}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <MdOutlineCalendarMonth className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.anoModelo + "/" + veiculo.anoFabricacao}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <SlSpeedometer className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.km + " km"}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <MdOutlineColorLens className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{trataMarca(veiculo.cor)}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <TbEngine className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.cilindradas + " cv"}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <GiCarDoor className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.quantidadePortas + " portas"}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <PiSteeringWheel className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{veiculo.carroceria}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <LuFuel className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{trataMarca(veiculo.combustivel)}</p>
                        </div>
                        <div className="item-ficha-tecnica-ver-mais">
                            <GiAnvil className="icon-item-ficha-tecnica-ver-mais"/>
                            <p>{"Blindagem: " + trataMarca(veiculo.blindado)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="garantia-ver-mais">
                <h1>Garantia</h1>
                <p>Garantia da Loja (3 meses)</p>
            </div>
            <div className="opcionais-ver-mais">
                <h1>Opcionais</h1>
                <div className="itens-opcionais-ver-mais">
                    {veiculo.opcionais.opcional.map((value, index) =>
                        <div className="item-opcional-ver-mais" key={index}>
                            <GoCheckCircle className="icon-item-opcional-ver-mais"/>
                            <p>{trataMarca(value.descricao)}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="caracteristicas-ver-mais">
                <div className="item-caracteristica-ver-mais">
                    <HiMiniArrowsRightLeft className="icon-item-caracteristica-ver-mais"/>
                    <p>Aceita troca</p>
                </div>
                <div className="item-caracteristica-ver-mais item-caracteristica-centro">
                    <HiMiniSignal className="icon-item-caracteristica-ver-mais"/>
                    <p>Oportunidade</p>
                </div>
                <div className="item-caracteristica-ver-mais">
                    <MdOutlineFactCheck className="icon-item-caracteristica-ver-mais"/>
                    <p>Veículo periciado</p>
                </div>
            </div>
            <div className="mais-informacoes-ver-mais">
                <h1>Informações</h1>
                <p>{veiculo.observacao}</p>
            </div>
        </div>
    )
}

export default VerMais
