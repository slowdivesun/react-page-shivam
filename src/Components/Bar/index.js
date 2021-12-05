import "./index.css"
import {ArrowLeftIcon} from "@heroicons/react/solid"
const Bar = () => {
    return (
        <div className="bar-container">
            <div className="back">
                <a href="https://google.com">
                <ArrowLeftIcon className="left-arrow"/>
                {/* <i class="fas fa-arrow-left"></i> */}
                </a>
            </div>
            <div>
                <h4>ORDER INFORMATION</h4>
            </div>
        </div>
    )
}

export default Bar