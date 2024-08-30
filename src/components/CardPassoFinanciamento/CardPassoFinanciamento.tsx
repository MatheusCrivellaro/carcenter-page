import './CardPassoFinanciamento.css'

type props = {
    img: string,
    title: string,
    description: string
}

const CardPassoFinanciamento = ({ img, title, description }:props) => {
    return (
        <div className="passos-financiamento-card">
            <img src={img} alt="" className="passos-financiamento-img"/>
            <h2 className="title-card-passo-financiamento">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default CardPassoFinanciamento
