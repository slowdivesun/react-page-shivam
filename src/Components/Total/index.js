import "./index.css"
const Total = (props) => {
    const {orderDetails} = props
    const {quant, wt, price, vouch, shipping, total} = orderDetails
    return (
        <div className="total-container">
            <div className="items">
                <p>Total items</p>
                <p>Total Weight</p>
                <p>Total Order</p>
                <p>Voucher</p>
                <p>Shipping Cost</p>
                <p>Grand Total</p>
            </div>
            <div className="info">
                <p>Total items</p>
                <p>{quant} Item</p>
                <p>{wt} Gram</p>
                <p>Rp {price}</p>
                <p>Rp. {vouch}</p>
                <p>Rp. {shipping}</p>
                <p>Grand {total}</p>
            </div>
            {/* <div className="message"> */}
                {/* <input type="text"/>
            </div> */}
        </div>
    )
}

export default Total