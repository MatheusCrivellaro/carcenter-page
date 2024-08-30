import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import {useRef} from "react";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";

type props = {
    marcas: string[],
    handleSelectedMarca: (selectMarca: string) => void
}

const CarouselCategorias = ({ marcas, handleSelectedMarca }: props) => {

    const { getLogo } = useGetLogoEmpresas()

    const carouselRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <div className="categorias-div-inicio">
            <div className="div-button-scroll-categorias bg-arrow-left arrow-left-categoria">
                <button onClick={scrollLeft}><MdArrowBackIosNew className="arrow-carousel-categoria"/></button>
            </div>
            <div className="div-cards-categorias-carousel-inicio" ref={carouselRef}>
                {
                    marcas.map((i, index) =>
                        <CategoriaCard
                            image={getLogo(i)}
                            title={i}
                            key={index + "categoria"}
                            handleSelectedMarca={handleSelectedMarca}
                        />
                    )
                }
            </div>
            <div className="div-button-scroll-categorias bg-arrow-right arrow-right-categoria">
                <button onClick={scrollRight}><MdArrowForwardIos className="arrow-carousel-categoria"/></button>
            </div>
        </div>
    )
}

export default CarouselCategorias
