import {MdClose} from 'react-icons/md'

function FoodRecipe(f){
    const ingArr = [
        f.measure1+" "+f.ingredient1,
        f.measure2+" "+f.ingredient2,
        f.measure3+" "+f.ingredient3,
        f.measure4+" "+f.ingredient4,
        f.measure5+" "+f.ingredient5,
        f.measure6+" "+f.ingredient6,
        f.measure7+" "+f.ingredient7,
        f.measure8+" "+f.ingredient8,
        f.measure9+" "+f.ingredient9,
        f.measure10+" "+f.ingredient10,
        f.measure11+" "+f.ingredient11,
        f.measure12+" "+f.ingredient12,
        f.measure13+" "+f.ingredient13,
        f.measure14+" "+f.ingredient14,
        f.measure15+" "+f.ingredient15,
        f.measure16+" "+f.ingredient16,
        f.measure17+" "+f.ingredient17,
        f.measure18+" "+f.ingredient18,
        f.measure19+" "+f.ingredient19,
        f.measure20+" "+f.ingredient20,
    ].filter(k=> !(k.includes("null")));
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