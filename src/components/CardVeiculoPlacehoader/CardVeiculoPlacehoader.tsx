import './CardVeiculoPlacehoader.css'
import {CButton, CCard, CCardBody, CCardText, CCardTitle, CPlaceholder} from "@coreui/react";
import {useEffect, useState} from "react";

type props = {
    quantidade: number
}

const CardVeiculoPlacehoader = ({ quantidade }: props) => {

    const [widthAtual, setWidthAtual] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWidthAtual(window.innerWidth));
    }, []);

    return (
        <>
            {Array.from({ length: quantidade }).map((_, i) => (
                <CCard
                    style={{
                        border: "none",
                        borderRadius: "8px",
                        background: "transparent"
                    }}
                    key={i}
                >
                    <CPlaceholder animation="wave" className="card-placehoader-img" style={{ width: "100%", height: widthAtual > 992 ? "35vh" : "30vh" }} />
                    <CCardBody className="card-placehoader-body">
                        <CPlaceholder as={CCardTitle} animation="glow" xs={8}>
                            <CPlaceholder xs={6} style={{ background: "#fafafa"}}/>
                        </CPlaceholder>
                        <CPlaceholder as={CCardText} animation="glow">
                            <CPlaceholder xs={7} style={{ background: "#71718a"}}/>
                            <CPlaceholder xs={4} style={{ background: "#71718a"}}/>
                            <CPlaceholder xs={4} style={{ background: "#71718a"}}/>
                            <CPlaceholder xs={6} style={{ background: "#71718a"}}/>
                            <CPlaceholder xs={8} style={{ background: "#71718a"}}/>
                        </CPlaceholder>
                        <CPlaceholder className="card-placehoader-button" as={CButton} style={{ height: "30px", width: "100%" }} xs={6}></CPlaceholder>
                    </CCardBody>
                </CCard>
            ))}
        </>
    )
}

export default CardVeiculoPlacehoader
