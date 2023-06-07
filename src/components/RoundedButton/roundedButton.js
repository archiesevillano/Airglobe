import "./roundedButton.css";

const RoundedButton = ({ text, roundness, action }) => {

    const roundLevel = () => {
        switch (roundness) {
            case "none":
                return ""; // no round edges
                break;
            case "default":
                return "rounded";
                break;
            case "pill":
                return "rounded-pill";
                break;
            case "circle":
                return "rounded-circle";
                break;
            default:
                return "rounded";
        }
    }

    return (
        <button type="button" className={`roundButton ${roundLevel()}`} onClick={action}>
            {text}
        </button>
    );
}

export default RoundedButton;