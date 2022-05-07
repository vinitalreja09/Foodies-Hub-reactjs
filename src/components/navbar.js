import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import {faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const[showSidebar, setShowSidebar] = useState(false)
    const location =useLocation()
    const links= [
        {
            name: "Home",
            path: "/", 
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]
    return(
        <>
        <div className="navbar container">
           <Link to="/" className="logo">F<span>oo</span>diesHub</Link>
           <div className="nav-links">
               {links.map(link => (
                   <Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}>{link.name}</Link>
               ))}
           </div>
           <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
           </div>
        </div>
        {showSidebar && <Sidebar links={links}/>}
        </>
    )
}