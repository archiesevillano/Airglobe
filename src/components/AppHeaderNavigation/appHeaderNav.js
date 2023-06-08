import Brand from "../brand/brand";
import "./appHeaderNav.css";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import AppHeaderSideNav from "./appHeaderSideNav";

const AppHeaderNav = () => {

    const [isOpen, setState] = useState(false);
    const [sideNavState, setSideNavState] = useState(false);  // determines if the floating side nav is showing in the screen or not

    const handleDropDown = () => {
        setState(!isOpen); //sets to true, when the current state is false and vice versa
    }

    const handleCloseSideNav = () => {
        setSideNavState(false); //closes the floating side nav
    }

    const handleClose = () => {
        setState(false);
    }

    const nvItems = NavItems(handleClose);

    nvItems.splice(1, 0, <AboutDropDown key={"about"} isOpen={isOpen} setState={setState} handleDropDown={handleDropDown} />);

    return (
        <div className="header-navigation justify-content-between justify-content-sm-center justify-content-lg-between flex-row flex-sm-column flex-lg-row">
            <Brand />
            <div className="hamburger-nav d-sm-none">
                <button type="button" className="hamburger-icon" onClick={() => setSideNavState(true)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <AppHeaderSideNav state={sideNavState} close={handleCloseSideNav} /> {/*remember that floating side nav will only display or visible in mobile or same size screen*/}
            </div>
            <ul className="header-nav-list d-sm-block d-none">
                {nvItems}
            </ul>
        </div>
    );
}

export const dropdownitems = [
    {
        path: "/continents-and-oceans",
        label: "Continents & Oceans",
    },
    {
        path: "/climate-and-weather",
        label: "Climate & Weather",
    },
    {
        path: "/ecosystems",
        label: "Ecosystems",
    },
    {
        path: "/biodiversity",
        label: "Biodiversity",
    },
    {
        path: "/natural-disasters",
        label: "Natural Disasters",
    },
    {
        path: "/human-impact",
        label: "Human Impact",
    },
]

const AboutDropDown = ({ isOpen, setState, handleDropDown }) => {

    //determines whether the dropdown list is showing or not

    return (
        <li key={"about-dropdown"} className={`about-dropdown ${isOpen ? "active" : ""}`}>
            <NavLink key={"about-dropdown"} to="/about" className="header-nav-items" onClick={handleDropDown}>
                About Earth{isOpen ? <RiArrowUpSLine className="dropdown-arrows" /> : <RiArrowDownSLine className="dropdown-arrows" />}
            </NavLink>
            <ul className={`about-dropdown-list ${isOpen ? "active" : ""}`}>
                {
                    dropdownitems.map((item, index) => {
                        return (
                            <li key={index + 1}>
                                <NavLink key={index + 1} to={item.path} className={`about-navlist-items`} onClick={handleDropDown}>
                                    {item.label}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}

export const NavItems = (handleDropDown) => {
    const items = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Fun Facts",
            path: "/fun-facts",
        },
        {
            label: "Resources",
            path: "/resources",
        },
        {
            label: "Contact",
            path: "/contact",
        },
    ];

    return items.map((item, index) => {
        return (<li key={index + 1}>
            <NavLink to={item.path} className="header-nav-items" onClick={handleDropDown}>
                {item.label}
            </NavLink>
        </li>)
    })
}

export default AppHeaderNav;