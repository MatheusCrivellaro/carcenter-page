import './CategoriaCard.css'

type props = {
    image: string,
    title: string,
    handleSelectedMarca: (selectMarca: string) => void
}

const CategoriaCard = ({ image, title, handleSelectedMarca }:props) => {

    const trataTitle = (value: string) => {
        let result = value
        if (result === "mercedes-benz")
            result = "mercedes"
        if (!result) return result;
        return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
    }

    return (
        <button onClick={() => handleSelectedMarca(title)} className="categorias-card-inicio">
            <div className="div-itens-card-categoria">
                <img src={image} alt=""/>
                <h1 className="title-card-categoria">{trataTitle(title)}</h1>
            </div>
        </button>
    )
}

export default CategoriaCard;
