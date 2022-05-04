import CustomImage from "./CustomImage"

export default function Explore(){
    const imgs = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return(
        <div className="explore">
            <div className="col">
                <h1 className="title">
                    What are we about
                </h1>
                <p className="info">
                    FoodiesHub is a place where you can soul and tummy with delicious food
                    recipes of all cuisines. Experience divine taste that will charm your appetite and seduce you into having more.
                </p>
                <button className="btn">Explore</button>
            </div>
            <div className="col gallery">
                {imgs.map((src, index)=> (
                    <CustomImage key={index} imgSrc={src} pt={"90%"}/>
                ))}
            </div>
        </div>
    )
}