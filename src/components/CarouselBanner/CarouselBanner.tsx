import './CarouselBanner.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperOptions} from "swiper/types";
import {useRef} from "react";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";

const CarouselBanner = () => {

    const settingsSwiper: SwiperOptions = {
        slidesPerView: 1,
        loop: true,
        grabCursor: true,
        autoplay: {delay: 6000}
    };

    const swiperRef = useRef<any>(null);

    return (
        <Swiper
            {...settingsSwiper}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            id="carouselExample" className="carousel-banner"
        >
            <SwiperSlide className="div-banners-carousel">
                <img
                    src="https://resized-images.autoconf.com.br/1440x338/filters:format(webp)/site/912/72a94062-ce7f-4d25-8dbf-a81ea86733bf.jpeg"
                    alt=""/>
            </SwiperSlide>
            <SwiperSlide className="div-banners-carousel">
                <img
                    src="https://resized-images.autoconf.com.br/1440x338/filters:format(webp)/site/912/5d449fb9-40e3-4dff-949f-2ea47ef1a867.png"
                    alt=""/>
            </SwiperSlide>
            <SwiperSlide className="div-banners-carousel">
                <img
                    src="https://resized-images.autoconf.com.br/1440x338/filters:format(webp)/site/912/be907c1b-c8d0-4d69-811a-cbf5fe8424b6.jpeg"
                    alt=""/>
            </SwiperSlide>
            <div className="carousel-banner-button carousel-banner-button-prev">
                <button onClick={() => swiperRef.current.slidePrev()}>
                    <MdArrowBackIosNew/>
                </button>
            </div>
            <div className="carousel-banner-button carousel-banner-button-next">
                <button onClick={() => swiperRef.current.slideNext()}>
                    <MdArrowForwardIos/>
                </button>
            </div>
        </Swiper>
    )
}

export default CarouselBanner
