import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const search_list = [
        "Burger", 
        "Pizza",
        "Spicy Chicken",
        "Lasagna",
        "Cookies",
        "Pasta",
        "Biryani",
        "Soup",
        "Salad",
        "Ice cream"
    ]
    return(
        <div>
            <div className="previous-searches">
                <h2 className="title">
                    Previous Searches
                </h2>
                <div className="search-list">
                    {search_list.map((search,search_id) => (
                        <div key={search_id} className="search-item" style={{animationDelay: search_id * .07 + "s"}}>
                            {search}
                        </div>
                    ))}
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Search"/>
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
        </div>
    )
}