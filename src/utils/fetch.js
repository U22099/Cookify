async function fetchData(input, setFood, setError, setLoading){
    setFood([]);
    input = input.replace(/ /g, "_");
    try{
        setLoading(true);
        setError("")
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${input}`);
        const data = await response.json();
        setLoading(false);
        if(data.meals) setFood(data.meals);
        if(!data.meals) setError("Recipe not found");
    } catch(e) {
        console.log(e, "Error occured at fetchData");
    }
}
async function fetchCategory (input, setFood, setError, setLoading){
    setFood([]);
    input = input.replace(/ /g, "_");
    try{
        setLoading(true);
        setError("")
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${input}`);
        const data = await response.json();
        setLoading(false);
        if(data.meals) setFood(data.meals);
        if(!data.meals) setError("Food for this category not found");
    } catch(e) {
        console.log(e, "Error occured at fetchCategory");
    }
}
async function fetchArea (input, setFood, setError, setLoading){
    setFood([]);
    input = input.replace(/ /g, "_");
    try{
        setLoading(true);
        setError("")
        const response = await fetch(`https://themealdb.com/api/json/v1/1/filter.php?a=${input}`);
        const data = await response.json();
        setLoading(false);
        if(data.meals) setFood(data.meals);
        if(!data.meals) setError("Food not available for this area");
    } catch(e) {
        console.log(e, "Error occured at fetchArea");
    }
}

async function fetchFood(id, setLoading, setIngredients){
    try{
        setLoading(true);
        const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setLoading(false);
        const ingredients = [];
        for(let x = 1; x < 21; x++){
                const measure = data.meals[0][`strMeasure${x}`];
                const ingredient = data.meals[0][`strIngredient${x}`];
                if((measure.includes("null") || !measure) && !(ingredient.includes("null"))){
                    ingredients.push(
                        `${ingredient}`
                    );
                } else {
                    ingredients.push(
                        `${measure} ${ingredient}`
                    )
                }
            }
        setIngredients(ingredients);
        return data.meals[0];
    } catch(e) {
        console.log(e, "Error occured at fetchFood");
    }
}

async function fetchCategories(setCategories, setLoading){
    try{
        setLoading(true);
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if(data.meals){
            const result = data.meals.map(x => x.strCategory);
            setLoading(false);
            setCategories(result);
        } else setLoading(false);
    } catch(e) {
        console.log(e, "Error occured at fetchCategories");
    }
}
async function fetchAreas(setAreas, setLoading){
    try{
        setLoading(true);
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if(data.meals){
            const result = data.meals.map(x => x.strArea);
            setLoading(false);
            setAreas(result);
        } else setLoading(false);
    } catch(e) {
        console.log(e, "Error occured at fetchAreas");
    }
}

async function fetchIngredients(setIngredients, setLoading){
    try{
        setLoading(true);
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if(data.meals){
            const result = data.meals.map(x => x.strIngredient);
            setLoading(false);
            setIngredients(shuffle(result));
        } else setLoading(false);
    } catch(e) {
        console.log(e, "Error occured at fetchIngredients");
    }
}

function shuffle(input){
    if(!input) return []
    let arr = [...input];
    let i = arr.length;
    while(1 < --i){
        const x = Math.floor(Math.random() * i);
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }
    return arr.slice(0, 50);
}
    
export {fetchData, fetchFood, fetchIngredients, fetchAreas, fetchCategories, fetchCategory, fetchArea}