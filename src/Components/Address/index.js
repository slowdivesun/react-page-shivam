import "./index.css"
const Address = () => {
    return (
        <div className="address-container">
            <a href="#">
                <div className="address-heading">
                <h3>Delivery Address</h3>
                <i class="fas fa-chevron-right"></i>
                </div>
            </a>
            <p className="add">Please Choose destination address</p>
        </div>
    )
}

export default Address