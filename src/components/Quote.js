import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";

export default function Quote(){
    return(
        <div className="quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft}/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo exercitationem consequuntur porro a nisi provident. 
            Vel nam tenetur, sint accusantium at deleniti, repellendus, obcaecati atque alias reprehenderit cupiditate similique.</p>
            <p className="quote-author">-Aaron Blackford</p>
        </div>
    )
}