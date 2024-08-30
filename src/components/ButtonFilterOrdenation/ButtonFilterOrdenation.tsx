import './ButtonFilterOrdenation.css'

type props = {
    handle: (ordenation: string, marca: string) => void,
    classeButton: string,
    classeList: string
}

const ButtonFilterOrdenation = ({ handle, classeButton, classeList }:props) => {
    return (
        <div className="dropdown button-filter-ordenation">
            <button className={`dropdown-toggle ${classeButton}`}
                    type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                Ordenar Por
            </button>
            <ul className={`dropdown-menu ${classeList}`}>
                <li><a className="dropdown-item" href="#"
                       onClick={() => handle("maior-preco", "")}>Maior
                    Preço</a></li>
                <li><a className="dropdown-item" href="#"
                       onClick={() => handle("menor-preco", "")}>Menor
                    Preço</a></li>
                <li><a className="dropdown-item" href="#"
                       onClick={() => handle("marca-modelo", "")}>Marca/Modelo</a></li>
                <li><a className="dropdown-item" href="#"
                       onClick={() => handle("ano-mais-novo", "")}>Ano
                    Mais Novo</a></li>
                <li><a className="dropdown-item" href="#"
                       onClick={() => handle("menor-km", "")}>Menor
                    KM</a></li>
            </ul>
        </div>
    )
}

export default ButtonFilterOrdenation
