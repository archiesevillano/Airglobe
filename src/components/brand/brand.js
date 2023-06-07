import "./brand.css";
import logo from "./../../logo.svg";

const Brand = () => {
    return (
        <div className="app-brand">
            <img src={logo} className="brand" id="brand" />
            <span className="brand-text">Airglobe</span>
        </div>
    );
}

export default Brand;