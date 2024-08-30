import './CarouselCards.css'
import {Vehicle} from "../../interfaces/Vehicle.ts";
import imgPadrao from '/imgPadrao.jpg'

type props = {
    veiculo: Vehicle
}

const CarouselCards = ({ veiculo }: props) => {
    return (
        <div id={veiculo.placaVeiculo} className="carousel slide carousel-card image-card-veiculo-estoque">
            <div className="carousel-inner carousel-div-card">
                {veiculo.fotos.foto.map((value, index) => {
                    if (index === 0)
                        return (
                            <div className="carousel-item div-card-carousel active" key={index}>
                                <img src={value.uri} alt="" onError={(e) => (e.currentTarget.src = imgPadrao)}/>
                            </div>
                        )
                    return (
                        <div className="carousel-item div-card-carousel" key={index}>
                            <img src={value.uri} alt="" onError={(e) => (e.currentTarget.src = imgPadrao)}/>
                        </div>
                    )
                })}
            </div>
            {veiculo.fotos.foto.length <= 1 ?
                <div/> :
                <div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#" + veiculo.placaVeiculo} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#" + veiculo.placaVeiculo}
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            }
        </div>
    )
}

export default CarouselCards
