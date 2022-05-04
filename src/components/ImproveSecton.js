export default function ImproveSection(){
    const lst = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips"
    ]
    return(
        <div className="improve-section explore">
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />
            </div>
            <div className="col">
                <h1 className="titlee">
                    Improve your Culinary skills
                </h1>
                {lst.map((item, index) => (
                    <p className="skills" key={index}>{item}</p>
                ))}
                <button className="btn">Signup</button>
            </div>
        </div>
    )
}