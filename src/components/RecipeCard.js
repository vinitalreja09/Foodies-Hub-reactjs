import CustomImage from "./CustomImage.js"

export default function RecipeCard({recipe}){
    return(
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Quae impedit vitae quidem aspernatur, magnam corporis blanditiis.</p>
                 <a className="view" href="/recipes">View Recipe</a>
            </div>
        </div>
    )
}