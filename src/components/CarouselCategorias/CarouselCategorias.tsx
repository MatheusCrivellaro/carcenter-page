import './CarouselCategorias.css'
import CategoriaCard from "../CategoriaCard/CategoriaCard.tsx";
import useGetLogoEmpresas from "../../hooks/useGetLogoEmpresas.tsx";
import {useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions} from "swiper/types";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import {CCardText, CPlaceholder} from "@coreui/react";

type props = {
    marcas: string[],
    handleSelectedMarca: (selectMarca: string) => void,
    categoriasPerView?: number,
    isLoading: boolean
}

const CarouselCategorias = ({ marcas, handleSelectedMarca, categoriasPerView, isLoading }: props) => {

    const { getLogo } = useGetLogoEmpresas()

    const swiperRef = useRef<any>(null);

    const settingsSwiper: SwiperOptions = {
        slidesPerView: categoriasPerView ? categoriasPerView : 3,
        spaceBetween: '16px',
        loop: true,
        grabCursor: true,
        breakpoints: {
            992: {
                slidesPerView: categoriasPerView ? categoriasPerView : 9,
            }
        }
    };

    return (
        <div className="carousel-categorias">
            <Swiper
                {...settingsSwiper}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {
                    isLoading ?
                        Array.from({ length: 12 }).map(() => (
                            <SwiperSlide>
                                <CPlaceholder as={CCardText} animation="wave" className="categorias-card-placehoader">
                                    <CPlaceholder color="secondary" xs={3} />
                                    <CPlaceholder color="secondary" xs={5} />
                                </CPlaceholder>
                            </SwiperSlide>
                        ))
                        :
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
            <div className="carousel-categorias-button carousel-categorias-button-prev">
                <button onClick={() => swiperRef.current.slidePrev()}>
                    <MdArrowBackIosNew/>
                </button>
            </div>
            <div className="carousel-categorias-button carousel-categorias-button-next">
                <button onClick={() => swiperRef.current.slideNext()}>
                    <MdArrowForwardIos/>
                </button>
            </div>
        </div>
    )
}

export default CarouselCategorias
