import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import {useRef} from "react";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import {Swiper, SwiperSlide} from "swiper/react";

type props = {
    marcas: string[],
    handleSelectedMarca: (selectMarca: string) => void,
    categoriasPerView: number
}

const CarouselCategorias = ({ marcas, handleSelectedMarca, categoriasPerView }: props) => {

    const { getLogo } = useGetLogoEmpresas()

    const carouselRef = useRef<any>(null);

    return (
        <div className="categorias-div-inicio">
            <div className="div-button-scroll-categorias bg-arrow-left arrow-left-categoria">
                <button onClick={() => carouselRef.current.slidePrev()}><MdArrowBackIosNew className="arrow-carousel-categoria"/></button>
            </div>
            <Swiper
                slidesPerView={categoriasPerView}
                onSwiper={(swiper) => (carouselRef.current = swiper)}
                loop={true}
                spaceBetween={12}
                className="div-cards-categorias-carousel-inicio"
            >
                {
                    marcas.map((i, index) =>
                        <SwiperSlide key={index}>
                            <CategoriaCard
                                image={getLogo(i)}
                                title={i}
                                key={index + "categoria"}
                                handleSelectedMarca={handleSelectedMarca}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <div className="div-button-scroll-categorias bg-arrow-right arrow-right-categoria">
                <button onClick={() => carouselRef.current.slideNext()}><MdArrowForwardIos className="arrow-carousel-categoria"/></button>
            </div>
        </div>
    )
}

export default CarouselCategorias
