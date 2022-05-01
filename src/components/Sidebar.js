import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({links}){
    return(
        <div className="sidebar">
            {links.map(link => (
                <a href="#!" className="links" >
                <FontAwesomeIcon icon={link.icon}/>
                {link.name}
                </a>
            ))}
        </div>
    )
}