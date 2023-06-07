import Brand from "../brand/brand";
import "./appHeaderNav.css";
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const AppHeaderNav = () => {

    const [isOpen, setState] = useState(false);

    const handleDropDown = () => {
        setState(!isOpen); //sets to true, when the current state is false and vice versa
    }

    const handleClose = () => {
        setState(false);
    }

    const nvItems = NavItems(handleClose);

    nvItems.splice(1, 0, <AboutDropDown isOpen={isOpen} setState={setState} handleDropDown={handleDropDown} />);

    return (
        <div className="header-navigation">
            <Brand />
            <ul className="header-nav-list">
                {nvItems}
            </ul>
        </div>
    );
}

const AboutDropDown = ({ isOpen, setState, handleDropDown }) => {

    //determines whether the dropdown list is showing or not

    const dropdownitems = [
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

    return (
        <li key={"about-dropdown"} className={`about-dropdown ${isOpen ? "active" : ""}`}>
            <NavLink to="/about" className="header-nav-items" onClick={handleDropDown}>
                About Earth{isOpen ? <RiArrowUpSLine className="dropdown-arrows" /> : <RiArrowDownSLine className="dropdown-arrows" />}
            </NavLink>
            <ul className={`about-dropdown-list ${isOpen ? "active" : ""}`}>
                {
                    dropdownitems.map((item, index) => {
                        return (
                            <li key={index + 1}>
                                <NavLink to={item.path} className={`about-navlist-items`} onClick={handleDropDown}>
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

const NavItems = (handleDropDown) => {
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