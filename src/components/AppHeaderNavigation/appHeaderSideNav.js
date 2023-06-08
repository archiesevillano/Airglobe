import { NavLink } from "react-router-dom";
import { NavItems, dropdownitems } from "./appHeaderNav";
import "./appHeaderNav.css";

const AppHeaderSideNav = ({ state, close }) => {

    return (
        <div className="app-header-side-nav" style={{ transform: state ? "scaleX(1)" : "scaleX(0)" }}>
            <i style={{ transition: "all 0.2s ease-in-out", transform: state ? "scale(1)" : "scale(0)" }} className="fa-solid fa-xmark" onClick={close}></i>
            <div className="side-nav-hero">
                <div className="header-caption">
                    <h1>About Earth</h1>
                    <p className="rounded-pill">Know more about our planet</p>
                </div>
            </div>
            <ul className="topic-nav">
                {dropdownitems.map((item, index) => <li key={index + 1}><NavLink to={item.path} className={`topic-nav-items`} onClick={close}>{item.label}</NavLink></li>)}
            </ul>
            <ul className="page-nav">
                {NavItems(close)}
            </ul>
        </div>
    );
}

export default AppHeaderSideNav;