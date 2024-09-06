import './CardVeiculoPlacehoader.css'
import {CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CPlaceholder} from "@coreui/react";

type props = {
    quantidade: number
}

const CardVeiculoPlacehoader = ({ quantidade }: props) => {
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
                    <CCardImage style={{ borderRadius: "8px 8px 0 0" }} as="svg" orientation="top" width="100%" height="30vh" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title><rect width="100%" height="35vh" fill="#3F3F50"></rect>
                    </CCardImage>
                    <CCardBody style={{ background: "#282833", borderRadius: "0 0 8px 8px" }}>
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
