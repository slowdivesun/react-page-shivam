import Options from "./Components/Options/index"
import Bar from "./Components/Bar/index"
import Order from "./Components/Order/index"
import Total from "./Components/Total/index"
import Address from "./Components/Address/index"
import Dropship from "./Components/Dropship/index"
import Finish from "./Components/Finish/index"
import "./App.css"

const details = {option: "Shipping"}
const payment = {option: "Payment"}

const order = {
  title: "ORIGINAL XYZONE BRAND TR1255",
  variant: "Variant: RED, 40",
  pc: "1PCS (1.100gr)",
  price: "Rp. 100.000"
}

const total = {
  quant: 2,
  wt: 2.2000,
  price: 360.000,
  vouch: 0,
  shipping: 0,
  total: 360
}

const App = () => {
  return (
  <div class="container">
    <Bar />
    <Address />
    {/* <Dropship /> */}
    <Options options={details} />
    <Options options={payment} />
    <div className="orders">
      <Order orderDetails={order} />
      <Order orderDetails={order} />
    </div>
    <Total orderDetails={total} />
    <Finish />
  </div>
  )
}

export default App;
