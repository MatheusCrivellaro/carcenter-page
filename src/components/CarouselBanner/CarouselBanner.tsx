import './CarouselBanner.css'

const CarouselBanner = () => {
    return (
        <div id="carouselExample" className="carousel slide carousel-banner">
            <div className="carousel-inner carousel-div-banner">
                <div className="carousel-item active div-banners-carousel">
                    <img src="https://resized-images.autoconf.com.br/1440x338/filters:format(webp)/site/912/72a94062-ce7f-4d25-8dbf-a81ea86733bf.jpeg" alt=""/>
                </div>
                <div className="carousel-item div-banners-carousel">
                    <img src="https://resized-images.autoconf.com.br/1440x338/filters:format(webp)/site/912/5d449fb9-40e3-4dff-949f-2ea47ef1a867.png" alt=""/>
                </div>
                <div className="carousel-item div-banners-carousel">
                    <img src="https://resized-images.autoconf.com.br/1440x338/filters:format(webp)/site/912/be907c1b-c8d0-4d69-811a-cbf5fe8424b6.jpeg" alt=""/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default CarouselBanner
