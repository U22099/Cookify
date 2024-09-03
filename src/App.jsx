import Food from './Components/Food';
import Ingredient from './Components/Ingredient';
import {useState, useEffect} from 'react';
import {AiOutlineLoading} from 'react-icons/ai';
import {fetchData, fetchIngredients} from './utils/fetch';

function App (){
    const [food, setFood] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchIngredients(setIngredients, setLoading);
    })
    return(
        <div className="flex flex-col w-[95vw] justify-center gap-4">
            <div className="bg-white md:w-[60vw] p-[20px] rounded-[20px] flex justify-center items-center flex-col md:mx-auto">
                <h1 className="primary-color text-[2em] md:text-[2.5em]">Recipe Generator</h1>
                <div className="flex flex-col md:flex-row justify-center gap-[20px] bg-white p-[20px] rounded-xl">
                    <input id="input" className=" bg-white focus:outline-none border-[yellow] border-[4px] rounded-[20px] p-[10px] text-[1.2em] md:text-[1.5em] w-[90vw] md:w-auto text-black" type="text" placeholder="Input any ingredient" onChange={(e) => setInput(e.target.value)}/>
                    <button className="bg-primary-color shadow-[1px_2px_3px_3px_rgba(0,0,0,0.5)] p-5 py-3 md:p-12 md:py-5 rounded-2xl text-black text-[1.5em] active:shadow-none md:max-w-3/4 mx-auto" onClick={()=> fetchData(input, setFood, setError, setLoading)}>Find Food</button>
                </div>
            <div className="bg-white md:mx-auto md:w-[70vw] px-2 gap-2 flex flex-wrap w-[95vw]">
                    {ingredients.map((x, i)=> <Ingredient key={i} name={x} no={i} className="list" onClick={async (e) => {
                        setInput(x);
                        document.getElementById("input").value = x;
                        document.querySelectorAll(".list").map(li => li.classList.remove("bg-primary-color"));
                        e.target.classList.add = "bg-primary-color";
                        await fetchData(input, setFood, setError, setLoading);
                    }}/>)}
                </div>
            </div>
            {loading&&<AiOutlineLoading className="flex mx-auto p-1 bg-gray-100 fill-yellow-400 text-[5em] md:text-[10em] roll rounded-full"/>}
            {error&&<p className="text-red-600 font-mono text-bold mx-auto">Recipe Not Found </p>}
            <div className="mt-5 md:mt-8 bg-white mx-auto w-[90vw] rounded-[20px] gap-[20px] grid-cols-1 grid md:grid-cols-3">
                {food.map((f,i)=> <Food img={f.strMealThumb} id={f.idMeal} key={i} name={f.strMeal}/>)}
            </div>
        </div>
    )
}
export default App
