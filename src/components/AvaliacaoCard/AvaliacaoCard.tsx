import './AvaliacaoCard.css'

type props = {
    title: string,
    description: string,
    image: string
}

const AvaliacaoCard = ({ title, description, image }: props) => {
    return (
        <div>
            <div className="avaliacoes-card-inicio">
                <div className="title-card-avaliacoes-inicio">
                    <img src={image} alt=""/>
                    <h1>{title}</h1>
                </div>
                <h2>
                    {description}
                </h2>
            </div>
        </div>
    )
}

export default AvaliacaoCard
