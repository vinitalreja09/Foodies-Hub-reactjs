import Chefcard from "./ChefCard";

export default function TopChef(){
    const chef_list = [
        {
            name: 'Juan',
            recipes: 10,
            cuisine: "Mexican",
            img: "/img/top_chiefs/img_1.jpg"
        },
        {
            name: 'Erich Marta',
            recipes: 22,
            cuisine: "American",
            img: "/img/top_chiefs/img_2.jpg"
        },
        {
            name: 'Yamato',
            recipes: 15,
            cuisine: "Japanese",
            img: "/img/top_chiefs/img_3.jpg"
        },
        {
            name: 'Chris Brown',
            recipes: 13,
            cuisine: "Italian",
            img: "/img/top_chiefs/img_4.jpg"
        },
        {
            name: 'Blake Lively',
            recipes: 54,
            cuisine: "French",
            img: "/img/top_chiefs/img_5.jpg"
        },
        {
            name: 'Ben Affleck',
            recipes: 64,
            cuisine: "Indian",
            img: "/img/top_chiefs/img_6.jpg"
        },
        {
            name: 'Zaid Affleck',
            recipes: 23,
            cuisine: "Chinese",
            img: "/img/top_chiefs/img_2.jpg"
        },
        {
            name: 'Carl Benton',
            recipes: 36,
            cuisine: "Korean",
            img: "/img/top_chiefs/img_1.jpg"
        },

    ]
    
    return(
        <div className="top-chef">
            <h1 className="title">Our Top Chefs</h1>
            <div className="chef-container">
                {chef_list.map(chef => 
                    <Chefcard className="chef-list" key={chef.name} chef={chef} />
                )}
            </div>
        </div>
    )
}