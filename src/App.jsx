import Food from './Components/Food';
import {useState, useEffect} from 'react';
import {AiOutlineLoading} from 'react-icons/ai';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa6';
import {fetchData, fetchIngredients, fetchCategories, fetchCategory, fetchAreas, fetchArea} from './utils/fetch';

function App (){
    const [food, setFood] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [showCategory, setShowCategory] = useState(true);
    const [showArea, setShowArea] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [input, setInput] = useState();
    useEffect(() => {
        fetchIngredients(setIngredients, setLoading);
        fetchCategories(setCategories, setLoading);
        fetchAreas(setCategories, setLoading);
    }, [])
    return(
        <div className="flex flex-col w-[95vw] justify-center gap-3">
            <div className="bg-white p-[20px] flex justify-center items-center flex-col md:mx-auto">
                <h1 className="primary-color text-[2em] md:text-[2.5em] text-bold font-serif">Recipe Generator</h1>
                <div className="flex flex-col md:flex-row justify-center gap-[20px] bg-white p-[20px] rounded-xl">
                    <input id="input" className=" bg-white focus:outline-none border-yello-400 border-[4px] rounded-[20px] p-[10px] text-[1.2em] md:text-[1.5em] w-[80vw] md:w-auto text-black font-serif" type="text" placeholder="Input any ingredient" onChange={(e) => setInput(e.target.value)}/>
                    <button className="bg-primary-color shadow-[1px_2px_3px_3px_rgba(0,0,0,0.5)] p-5 py-3 md:p-12 md:py-5 rounded-2xl text-black text-[1.5em] active:shadow-none md:max-w-3/4 mx-auto" onClick={()=> fetchData(input, setFood, setError, setLoading)}>Find Food</button>
                </div>
                <div className="bg-white md:mx-auto px-2 gap-2 flex flex-wrap w-[95vw]">
                        {ingredients.map((x, i)=> (
                                <div 
                                    onClick={async (e) => {
                                        console.log(x)
                                        document.getElementById("input").value = x;
                                        document.querySelectorAll(".list")?.forEach(li => li.classList.remove("bg-primary-color"));
                                        e.target.classList.add("bg-primary-color");
                                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                                        await fetchData(x, setFood, setError, setLoading);
                                    }} 
                                    className={(i > 10 ? "hidden md:flex ": "") +"cursor-pointer bg-gray-100 rounded-full p-2 w-fit h-fit list"}>{x}
                                </div>
                            )
                        )}
                </div>
                <h1 className="text-black text-[1.5em] md:text-[2em] font-serif">Categories {!showCategory ?<FaChevronUp onClick={()=> setShowCategory(false)}/> : 
                <FaChevronDown onClick={()=> setShowCategory(true)} />
                }</h1>
                <div className={showCategory ? "": "hidden " +"bg-white md:mx-auto px-2 gap-2 flex flex-wrap w-[95vw] transition-all"}>
                        {categories.map((x, i)=> (
                                <div 
                                    onClick={async (e) => {
                                        document.querySelectorAll(".list")?.forEach(li => li.classList.remove("bg-primary-color"));
                                        e.target.classList.add("bg-primary-color");
                                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                                        await fetchCategory(x, setFood, setError, setLoading);
                                        setShowCategory(false);
                                    }} 
                                    className="cursor-pointer bg-gray-100 rounded-full p-2 w-fit h-fit list">{x}
                                </div>
                            )
                        )}
                </div>
                <h1 className="text-black text-[1.5em] md:text-[2em] font-serif">Areas {!showArea ?<FaChevronUp onClick={()=> setShowArea(false)}/> : 
                <FaChevronDown onClick={()=> setShowArea(true)} />
                }</h1>
                <div className={showArea ? "": "hidden " +"bg-white md:mx-auto px-2 gap-2 flex flex-wrap w-[95vw] transition-all"}>
                        {areas.map((x, i)=> (
                                <div 
                                    onClick={async (e) => {
                                        document.querySelectorAll(".list")?.forEach(li => li.classList.remove("bg-primary-color"));
                                        e.target.classList.add("bg-primary-color");
                                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                                        await fetchArea(x, setFood, setError, setLoading);
                                        setShowAreas(false);
                                    }} 
                                    className="cursor-pointer bg-gray-100 rounded-full p-2 w-fit h-fit list">{x}
                                </div>
                            )
                        )}
                </div>
            </div>
            {loading&&<AiOutlineLoading className="flex mx-auto p-1 bg-gray-100 fill-yellow-400 text-[3em] md:text-[5em] roll rounded-full"/>}
            {error&&<p className="text-red-600 font-mono text-bold mx-auto">Recipe Not Found </p>}
            <div id="recipe" className="mt-5 md:mt-8 bg-white mx-auto w-[90vw] rounded-[20px] gap-[20px] grid-cols-1 grid md:grid-cols-3">
                {food.map((f,i)=> <Food img={f.strMealThumb} id={f.idMeal} key={i} name={f.strMeal}/>)}
            </div>
        </div>
    )
}
export default App
