import "./index.css"
const Options = props => {
    const {options} = props
    const {option} = options
    console.log(option)
    return (
        <div className="options-container">
            <h3>{option} Option</h3>
            <p className="select-opt">Please Choose your {option.toLowerCase()} method.</p>
        </div>
    )
}

export default Options