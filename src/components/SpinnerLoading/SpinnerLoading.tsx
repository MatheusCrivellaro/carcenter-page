import './SpinnerLoading.css'
import {GridLoader} from "react-spinners";
import {useEffect, useState} from "react";

const SpinnerLoading = () => {

    const [widthAtual, setWidthAtual] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWidthAtual(window.innerWidth));
    }, []);

    return (
        <div className="spinner-loading">
            <GridLoader className="spinner-loading-content" color="#dfab21" size={widthAtual > 992 ? 30 : 24} />
        </div>
    )
}

export default SpinnerLoading
