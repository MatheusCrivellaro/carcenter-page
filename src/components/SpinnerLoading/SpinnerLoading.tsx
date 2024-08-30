import './SpinnerLoading.css'

const SpinnerLoading = () => {
    return (
        <div className="spinner-estoque-carros-div">
            <div className="spinner-border spinner-estoque-carros" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default SpinnerLoading
