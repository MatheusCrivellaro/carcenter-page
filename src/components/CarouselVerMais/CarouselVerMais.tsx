import './CarouselVerMais.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useRef, useState} from "react";
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from "react-icons/md";
import {Fancybox} from "@fancyapps/ui";
import {Foto} from "../../interfaces/Foto.ts";
type props = {
    images: Foto[]
}

const CarouselVerMais = ({ images }:props) => {

    const [sliderPerView, setSliderPerView] = useState(3);
    const swiperRef = useRef<any>(null);
    // const [swiperInstance, setSwiperInstance] = useState<any>(null);

    Fancybox.bind('[data-fancybox="gallery"]', {
        Carousel: {
            infinite: true,
        },
        Toolbar: {
            display: {
                left: ["infobar"],
                middle: [
                    "zoomIn",
                    "zoomOut",
                    "toggle1to1",
                    "rotateCCW",
                    "rotateCW",
                    "flipX",
                    "flipY",
                ],
                right: ["slideshow", "thumbs", "close"],
            },
        },
    });

    useEffect(() => {
        // swiperRef.current && setSwiperInstance(swiperRef.current);
        const handleResize = () => {
            setSliderPerView(() => window.innerWidth < 720 ? 1 : 3)
        }
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, []);

    return (
        <div className="carousel-ver-mais">
            <button onClick={() => swiperRef.current.slidePrev()} className="button-prev-carousel-ver-mais button-arrow-carousel-ver-mais"><MdOutlineArrowBackIos /></button>
            <Swiper
                slidesPerView={sliderPerView}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{clickable: true}}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="item-carousel-ver-mais">
                        <a href={image.uri} data-fancybox="gallery">
                            <img src={image.uri} alt=""/>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={() => swiperRef.current.slideNext()}
                    className="button-next-carousel-ver-mais button-arrow-carousel-ver-mais"><MdOutlineArrowForwardIos/>
            </button>
            {/*<CustomPaginationVerMais swiper={swiperInstance} />*/}
        </div>
    );
}

export default CarouselVerMais
