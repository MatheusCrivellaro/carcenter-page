import './OrdenacaoButton.css'

type props = {
    handle: (value: string) => void
}

const OrdenacaoButton = ({ handle }: props) => {

    // const typesOrdenacao = [
    //     "relevancia",
    //     "maior-preco",
    //     "menor-preco",
    //     "modelo-marca",
    //     "menor-km",
    //     "ano-mais-novo"
    // ]

    return (
        <div className="dropdown">
            <button className="dropdown-toggle ordenar-por-button" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                Ordenar Por
            </button>
            <ul className="dropdown-menu dropdown-menu-div">
                <li>
                    <button className="dropdown-ordenar-por-li"
                            onClick={() => handle("relevancia")}>Relevancia
                    </button>
                </li>
                <li>
                    <button className="dropdown-ordenar-por-li" value="maior-preco"
                            onClick={() => handle("marca-modelo")}>Marca/Modelo
                    </button>
                </li>
                <li>
                    <button className="dropdown-ordenar-por-li" onClick={() => handle("menor-preco")}>Menor
                        Preço
                    </button>
                </li>
                <li>
                    <button className="dropdown-ordenar-por-li" onClick={() => handle("maior-preco")}>Maior
                        Preço
                    </button>
                </li>
                <li>
                    <button className="dropdown-ordenar-por-li" onClick={() => handle("ano-mais-novo")}>Ano
                        mais novo
                    </button>
                </li>
                <li>
                    <button className="dropdown-ordenar-por-li" onClick={() => handle("menor-km")}>Menor KM
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default OrdenacaoButton
