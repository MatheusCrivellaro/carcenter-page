import {FilterConfig} from "../../interfaces/FilterConfig.ts";
import OptionFiltroContainer from "../OptionFiltroContainer/OptionFiltroContainer.tsx";

type props = {
    filtros: FilterConfig[];
}

const FiltroListGenerator = ({ filtros }: props) => {
    return (
        <>
            {filtros.map((filtro, index) => <OptionFiltroContainer key={index + "filtro"} title={filtro.title} value={filtro.value} group={filtro.group} handle={filtro.handle} todos={filtro.todos} selected={filtro.selected} />)}
        </>
    )
}

export default FiltroListGenerator
