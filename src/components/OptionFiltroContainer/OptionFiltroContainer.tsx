import './OptionFiltroContainer.css'
import React, {useState} from "react";
import {MdArrowBackIosNew} from "react-icons/md";

type props = {
    title: string,
    value: string[],
    group: string,
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void,
    todos: boolean,
    selected: string
}

const OptionFiltroContainer = ({ title, value, group, handle, todos, selected}: props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const trataLabel = (nome: string) => {
        if (nome === "gasolina e álcool")
            return "Flex"
        if (nome === "suv / utilitário esportivo")
            return "Suv / Utilitário"
        if (nome === "mercedes-benz")
            return "Mercedes"
        if (!nome) return nome;
        return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    }

    return (
        <div className={`div-options-filtro-veiculos ${isOpen ? "margin-div-options-filtro-veiculos" : ""}`}>
            <button className="button-collapse-filtros-option" data-bs-toggle="collapse" data-bs-target={"#collapse-" + title} aria-expanded="false" aria-controls={"collapse-" + title} onClick={() => setIsOpen(!isOpen)}>
                <h1>{title}</h1>
                <MdArrowBackIosNew className={`icon-button-collapse-filtros-option ${isOpen ? "giro-open-iscon-button-collapse-filtro" : ""}`} />
            </button>
            <div className="collapse" id={"collapse-" + title}>
                <div className="div-options-radios-veiculos">
                    {todos ?
                        <div>
                            <input type="radio" name={group} id={"todos" + group} onChange={handle} value="todos"
                                   checked={selected.length === 0 || selected.includes("todos")}/>
                            <label htmlFor={"todos" + group}>Todos</label>
                        </div> :
                        ""
                    }
                    {value.map((valor, index) =>
                        <div key={index + valor}>
                            <input type="radio" name={group} id={valor} onChange={handle} value={valor}
                                   checked={selected.includes(valor)}/>
                            <label htmlFor={valor}>
                                {trataLabel(valor)}
                            </label>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default OptionFiltroContainer
