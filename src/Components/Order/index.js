import "./index.css"
import purse from "./purse.jpg"
const Order = (props) => {
    const {orderDetails} = props
    const {title, variant, pc, price} = orderDetails
    return (
        <div class="order-full-details">
            <div className="order-container">
                <div className="product-icon"><img src={purse} alt="icon"/></div>
                <div className="order-info">
                    <span className="title">{title}</span>
                    <p className="variant">{variant}</p>
                    <div>
                        <span className="pc">{pc} @ </span>
                        <span className="price">{price}</span>
                    </div>
                </div>
            </div>
            {/* <div className="message"> */}
                <input type="text" placeholder="Optional message here"/>
            {/* </div> */}
        </div>
    )
}

export default Order