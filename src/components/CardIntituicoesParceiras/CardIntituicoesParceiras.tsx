import './CardInstituicoesParceiras.css'

type props = {
    img: string,
    titulo: string
}

const CardIntituicoesParceiras = ({ img, titulo }:props) => {
    return (
        <div className="card-instituicao-financeira">
            <img src={img} alt="" />
            <h3>{titulo}</h3>
        </div>
    )
}

export default CardIntituicoesParceiras
