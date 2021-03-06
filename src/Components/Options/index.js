import "./index.css"
import {ChevronRightIcon} from "@heroicons/react/outline"
const Options = props => {
    const {options} = props
    const {option} = options
    console.log(option)
    return (
        <div className="options-container">
            <a href="#">
            <div className="options-heading">
                <h3>{option} Option</h3>
                <ChevronRightIcon className="arrow"/>
                {/* <i class="fas fa-chevron-right"></i> */}
            </div>
            </a>
            
            <p className="select-opt">Please Choose your {option.toLowerCase()} method.</p>
        </div>
    )
}

export default Options