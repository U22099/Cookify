import FoodRecipe from './FoodRecipe'
import { useState } from 'react'
import {fetchFood} from '../utils/fetch'
import {AiOutlineLoading} from 'react-icons/ai'

function Food(f){
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [ingredients, setIngredients] = useState([]);
    
    function closeDialog(){
        setShow(false);
    }
    return(
        <div className="flex flex-col p-[10px] border-black border-[2px] rounded-xl">
            <img className="w-[100%] h-[250px] rounded-xl" src={f.img}/>
            <h1 className="text-[1.8em] text-black mx-auto">{f.name}</h1>
            <button className="bg-black text-white w-[200px] mx-auto shadow-[1px_2px_3px_3px_rgba(0,0,0,0.5)] rounded-lg text-black active:shadow-none text-[1.5em] py-2" onClick={async ()=>
                {setShow(true); setData(await fetchFood(f.id, setLoading, setIngredients)); }}>Get Recipe</button>
            <div className={show ? ((loading ? "flex justify-center items-center ":"") +"visible fixed w-[90vw] md:w-[50vw] h-[90vh] backdrop-blur-2xl border-[var(--primary-color)] border-[2px] rounded-lg p-[20px] z-10 transition duration-1000 overflow-hidden overflow-y-scroll selfScroll top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]") : "hidden"}>
                {loading&&<AiOutlineLoading className="flex mx-auto p-1 bg-gray-100 fill-yellow-400 text-[3em] md:text-[5em] roll rounded-full"/>}

                {!loading&&<FoodRecipe
                    showDialog={closeDialog}
                    name={data.strMeal}
                    category={data.strCategory}
                    img={data.strMealThumb}
                    area={data.strArea} 
                    tags={data.strTags} 
                    ingredients={ingredients}
                    recipe={data.strInstructions} 
                    youtube={data.strYoutube}/>}
                </div>
        </div>
    )
}
export default Food