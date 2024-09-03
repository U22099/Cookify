import {MdClose} from 'react-icons/md'

function FoodRecipe(f){
    const ingArr = f.ingredients.filter(k=> !(k.includes("null")));
    return(
        <div className="flex flex-col justify-center text-black text-bold gap-[10px]">
            <div className="flex items-center relative w-[100%]">
                <img src={f.img} className="rounded-lg w-[80%] mx-auto"/>
                <MdClose className="text-[2em] absolute left-[95%] top-[0%] bg-black text-white rounded-full cursor-pointer" onClick={f.showDialog}/>
            </div>    
            <p className="mx-auto max-w-[90%] flex flex-wrap">{f.tags}</p>
            <div className="ml-[5px] flex flex-col">
                <p className="text-[1.4em]">Name: <span className="text-[orangered]">{f.name}</span></p>
                <p className="text-[1.4em]">Category: <span className="text-[orangered]">{f.category}</span></p>
                <p className="text-[1.4em]">Area: <span className="text-[orangered]">{f.area}</span></p>
                <p className="text-[1.4em]">Youtube Link: <a className="text-[orangered] underline decoration-[orangered] underline-offset-1" href={f.youtube}>Watch Video</a></p>
                <p className="text-[1.4em]">Ingredients:
                </p> 
                <ul className="text-[1.4em] max-h-[200px] overflow-y-auto selfScroll w-max pr-[20px]">
                    {ingArr.map((k, i)=><li key={i}>{k}</li>)}
                </ul>
            </div>
            <div>
                <h1  className="text-[2em] text-bold flex justify-center items-center w-[100%]">RECIPE</h1>
                <p  className="text-[1.2em] text-justify w-[100%]">{f.recipe}</p>
            </div>
        </div>
    )
}
export default FoodRecipe