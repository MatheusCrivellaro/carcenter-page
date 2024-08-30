import './CustomPaginationVerMais.css'
import {useEffect, useState} from "react";

type props = {
    swiper: any;
}

const CustomPaginationVerMais = ({ swiper }:props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = swiper?.slides.length || 0;
    const numButtons = Math.max(totalSlides - 2, 0);

    useEffect(() => {
        swiper && swiper.on('slideChange', () => {
            setActiveIndex(swiper.activeIndex);
        });
    }, [swiper]);

    const handleClick = (index: number) => {
        swiper && swiper.slideTo(index);
    };

    return (
        <div className="custom-pagination">
            {[...Array(numButtons)].map((_: any, index: number) => (
                <button
                    key={index}
                    className={`pagination-button ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                </button>
            ))}
        </div>
    );
}

export default CustomPaginationVerMais
