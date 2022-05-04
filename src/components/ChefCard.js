import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function ChefCard({chef}){

    return(
        <div className="chef">
            <img src={chef.img} alt="" />
            <div className="info">
            <h3 className="chef-name">Name: {chef.name}</h3>
            <p className="chef-recipe"><span>Recipes:</span> {chef.recipes}</p>
            <p className="chef-cuisine"><span>Cuisine:</span> {chef.cuisine}</p>
            <p className="chef-icons">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
            </p>
            </div>
            

        </div>
    )
}