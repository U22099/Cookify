import img from "./assets/IMG_1221.JPG"
import Food from './Components/Food'
import {useState} from 'react'
import {AiOutlineLoading} from 'react-icons/ai'

function App (){
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);
    async function fetchData(){
        let input = document.getElementById("input").value;
        try{
            setLoading(true);
            const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${input}`);
            const data = await response.json();
            setLoading(false);
            setFood(data.meals);
        }catch(e){
            console.log(e);
            console.log(input);
        }
    }
    async function fetchFood(x){
        try{
            const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${x}`);
            const data = await response.json();
            return data.meals[0];
        }catch(e){
            console.log(e);
            console.log(x);
        }
    }
    return(
        <div className="flex flex-col w-[90vw] justify-center gap-[40px]">
            <div className="bg-white md:w-[60vw] p-[20px] rounded-[20px] flex justify-center items-center flex-col md:mx-auto">
                <h1 className="primary-color text-[2em] md:text-[2.5em]">Recipe Generator</h1>
                <div className="flex flex-col md:flex-row justify-center gap-[20px] bg-white p-[20px] rounded-xl">
                    <input id="input" className=" bg-white focus:outline-none border-[yellow] border-[4px] rounded-[20px] p-[10px] text-[1.2em] md:text-[1.5em] w-[90vw] md:w-auto text-black" type="text" placeholder="Input any ingredient"/>
                    <button className="bg-primary-color shadow-[1px_2px_3px_3px_rgba(0,0,0,0.5)] p-[20px] rounded-[20px] text-black text-[1.5em] active:shadow-none" onClick={fetchData}>Find Food</button>
                </div>
            </div>
            <div className="bg-white mx-auto w-[90vw] p-[30px] rounded-[20px] gap-[20px] grid-cols-1 grid md:grid-cols-3">
                {loading&&<AiOutlineLoading className="flex mx-auto p-1 bg-gray-100 fill-yellow-400 text-[5em] md:text-[10em] roll rounded-full"/>}
                {food.map((f,i)=> <Food img={f.strMealThumb} fetch={fetchFood} id={f.idMeal} key={i} name={f.strMeal}/>)}
            </div>
        </div>
    )
}
export default App