import './Footer.css'
import {GrLocation} from "react-icons/gr";
import {FaWhatsapp} from "react-icons/fa";
import {RiPhoneLine} from "react-icons/ri";
import {MdOutlineEmail} from "react-icons/md";
import logo_autodealer from "/logo-autodealer.png"

const Footer = () => {
    return (
        <div>
            <div className="localizacao-div-inicio">
                <div className="mapa-div-localizacao-inicio">
                    <h1>Localização</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5206.475782558568!2d-46.78631856658611!3d-23.533159307665038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff087931c5f9%3A0xaea1621f466d8755!2sAv.%20dos%20Autonomistas%2C%203423%20-%20Vila%20Yara%2C%20Osasco%20-%20SP%2C%2006090-023!5e0!3m2!1spt-BR!2sbr!4v1723821166448!5m2!1spt-BR!2sbr"
                        width="600" height="450" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map-localizacao-inicio"
                    />
                </div>
                <div className="informacoes-localizacao-div-inicio">
                    <h1>Car Center Osasco Eireli</h1>
                    <div className="informacao-localizacao-card-inicio">
                        <GrLocation className="icon-informacao-localizacao-card-inicio"/>
                        <h2>Avenida dos Autonomistas, 3423 - Centro - Osasco/SP - CEP 06090023 </h2>
                    </div>
                    <div className="informacao-localizacao-card-inicio">
                        <FaWhatsapp className="icon-informacao-localizacao-card-inicio"/>
                        <h2>(11) 93452-4004</h2>
                    </div>
                    <div className="informacao-localizacao-card-inicio">
                        <RiPhoneLine className="icon-informacao-localizacao-card-inicio"/>
                        <h2>(11) 3682-4544</h2>
                    </div>
                    <div className="informacao-localizacao-card-inicio">
                        <MdOutlineEmail className="icon-informacao-localizacao-card-inicio"/>
                        <h2>carcentermultimarcasvendas@gmail.com</h2>
                    </div>
                </div>
            </div>
            <div className="direitos-autorais-footer">
                <h3>Powered by</h3>
                <img src={logo_autodealer} alt=""/>
            </div>
        </div>
    )
}

export default Footer
