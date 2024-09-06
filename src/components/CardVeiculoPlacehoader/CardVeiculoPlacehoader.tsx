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
                    <CPlaceholder animation="wave" style={{ background:  "#3F3F50", width: "100%", height: widthAtual > 992 ? "35vh" : "30vh", borderRadius: '8px 8px 0 0'}} />
                    <CCardBody style={{background: "#282833", borderRadius: "0 0 8px 8px" }}>
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
                        <CPlaceholder as={CButton} style={{ height: "30px", width: "100%", background: "#71718a"}} xs={6}></CPlaceholder>
                    </CCardBody>
                </CCard>
            ))}
        </>
    )
}

export default CardVeiculoPlacehoader
