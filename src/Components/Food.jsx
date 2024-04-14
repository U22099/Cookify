import FoodRecipe from './FoodRecipe'
import { useState } from 'react'

function Food(f){
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    
    function closeDialog(){
        setShow(false);
    }
    return(
        <div className="flex flex-col p-[10px] border-[yellow] border-[4px] rounded-xl">
            <img className="w-[100%] h-[250px] rounded-xl" src={f.img}/>
            <h1 className="text-[1.8em] primary-color mx-auto">{f.name}</h1>
            <button className="bg-primary-color w-[200px] mx-auto shadow-[1px_2px_3px_3px_rgba(0,0,0,0.5)] rounded-[20px] text-black active:shadow-none text-[1.5em] " onClick={()=>
                {
                    setShow(true);
                    setData(f.fetch(f.id))}}>Get Recipe</button>
            <div className={show ? "visible fixed w-[90vw] md:w-[50vw] h-[90vh] bg-primary-color border-red-500 border-[4px] rounded-lg p-[20px] z-[2] transition duration-1000 overflow-y-scroll selfScroll top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" : "hidden"}>
                <FoodRecipe
                showDialog={closeDialog}
                    name={data.strMeal}
                    category={data.strCategory}
                    img={data.strMealThumb}
                    area={data.strArea} 
                    measure1={data.strMeasure1} 
                    measure2={data.strMeasure2} 
                    measure3={data.strMeasure3} 
                    measure4={data.strMeasure4} 
                    measure5={data.strMeasure5} 
                    measure6={data.strMeasure6} 
                    measure7={data.strMeasure7} 
                    measure8={data.strMeasure8} 
                    measure9={data.strMeasure9} 
                    measure10={data.strMeasure10} 
                    measure11={data.strMeasure11} 
                    measure12={data.strMeasure12} 
                    measure13={data.strMeasure13} 
                    measure14={data.strMeasure14} 
                    measure15={data.strMeasure15} 
                    measure16={data.strMeasure16} 
                    measure17={data.strMeasure17} 
                    measure18={data.strMeasure18} 
                    measure19={data.strMeasure19} 
                    measure20={data.strMeasure20}
                    tags={data.strTags} 
                    ingredient1={data.strIngredient1} 
                    ingredient2={data.strIngredient2} 
                    ingredient3={data.strIngredient3} 
                    ingredient4={data.strIngredient4} 
                    ingredient5={data.strIngredient5} 
                    ingredient6={data.strIngredient6} 
                    ingredient7={data.strIngredient7} 
                    ingredient8={data.strIngredient8} 
                    ingredient9={data.strIngredient9} 
                    ingredient10={data.strIngredient10} 
                    ingredient11={data.strIngredient11} 
                    ingredient12={data.strIngredient12} 
                    ingredient13={data.strIngredient13} 
                    ingredient14={data.strIngredient14} 
                    ingredient15={data.strIngredient15} 
                    ingredient16={data.strIngredient16} 
                    ingredient17={data.strIngredient17} 
                    ingredient18={data.strIngredient18} 
                    ingredient19={data.strIngredient19} 
                    ingredient20={data.strIngredient20} 
                    recipe={data.strInstructions} youtube={data.strYoutube}/>
                </div>
        </div>
    )
}
export default Food