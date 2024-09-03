async function fetchData(input, setFood, setError, setLoading){
    input = input.replace(/ /g, "_");
    try{
        setLoading(true);
        setError(false)
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${input}`);
        const data = await response.json();
        setLoading(false);
        if(data.meals) setFood(data.meals);
        if(!data.meals) setError(true);
    }catch(e){
        console.log(e);
        console.log(input);
    }
}

async function fetchFood(x, setLoading){
    try{
        const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${x}`);
        const data = await response.json();
        setLoading(false);
        return data.meals[0];
    }catch(e){
        console.log(e);
        console.log(x);
    }
}

async function fetchIngredients(setIngredients, setLoading){
    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        const data = await response.json();
        const result = data.meals.map(x => x.strIngredient);
        setIngredients(result);
        setLoading(false)
    }catch(e){
        console.log(e);
        console.log(x);
    }
}
    
export {fetchData, fetchFood, fetchIngredients}