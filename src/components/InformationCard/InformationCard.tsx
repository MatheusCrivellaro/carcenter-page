import './InformationCard.css'

type props = {
    title: string,
    description: string,
    image: string,
}

const InformationCard = ({ title, description, image }: props) => {
    return (
        <div className="col">
            <div className="informations-card-inicio">
                <img src={image} alt=""/>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default InformationCard
