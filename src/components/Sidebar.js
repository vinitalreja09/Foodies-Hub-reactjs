import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar({links}){
    const location= useLocation()
    return(
        <div className="sidebar">
            {links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "links active" : "links"} >
                <FontAwesomeIcon icon={link.icon}/>
                {link.name}
                </Link>
            ))}
        </div>
    )
}