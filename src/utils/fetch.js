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
        console.log(e, "Error occured at fetchIngredients");
    }
}

async function fetchFood(x, setLoading){
    try{
        const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=${x}`);
        const data = await response.json();
        setLoading(false);
        return data.meals[0];
    }catch(e){
        console.log(e, "Error occured at fetchIngredients");
    }
}

async function fetchIngredients(setIngredients, setLoading){
    try{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const result = data.meals.map(x => x.strIngredient);
        if(data.meals){
            setLoading(false);
            shuffle(result);
            setIngredients(result);
        } else setLoading(false);
    }catch(e){
        console.log(e, "Error occured at fetchIngredients");
    }
}

function shuffle(arr){
    let i = arr.length;
    while(1 < --i){
        const x = Math.floor(Math.random() * i)
        [arr[i], arr[x]] = [arr[x], arr[i]];
    }
}
    
export {fetchData, fetchFood, fetchIngredients}