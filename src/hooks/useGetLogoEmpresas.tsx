import audi from "/logos/audi.png"
import fiat from "/logos/fiat.png"
import ford from "/logos/ford.png"
import chevrolet from "/logos/gm-chevrolet.png"
import hyundai from "/logos/hyundai.png"
import land_hover from "/logos/land-rover.png"
import mercedes from "/logos/mercedes-benz.png"
import renault from "/logos/renault.png"
import toyota from "/logos/toyota.png"
import volkswagen from "/logos/vw-volkswagen.png"
import honda from "/logos/honda.png"
import jeep from "/logos/jeep.png"
import peugeot from '/logos/peugeot.png'
import kia from "/logos/kia.png"
import mitsubishi from "/logos/mitsubishi.png"
import nissan from "/logos/nissan.png"
import chery from "/logos/chery.png"

const useGetLogoEmpresas = () => {

    const logos: { [key: string]: string } = {
        audi: audi,
        fiat: fiat,
        ford: ford,
        chevrolet: chevrolet,
        hyundai: hyundai,
        "land-hover": land_hover,
        "mercedes-benz": mercedes,
        renault: renault,
        toyota: toyota,
        volkswagen: volkswagen,
        honda: honda,
        jeep: jeep,
        peugeot: peugeot,
        kia: kia,
        mitsubishi: mitsubishi,
        nissan: nissan,
        chery: chery
    };

    const getLogo = (nome: string) => {
        nome = nome.replace(/\s+/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, '');
        const nomeToLowerCase = nome.toLowerCase();
        return nomeToLowerCase in logos ? logos[nomeToLowerCase] : "https://logo.clearbit.com/" + nomeToLowerCase + ".com";
    };

    const getLogoUrl = (url: string) => {
        return "https://logo.clearbit.com/" + url
    }

    return {
        getLogo,
        getLogoUrl,
    }
}

export default useGetLogoEmpresas
