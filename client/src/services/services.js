const basUrl = 'http://localhost:3001/recipes';

//Trae todas las recipes (100)
export const getAllRecipes = async () => {
    const res = fetch(basUrl)
    const recipes = await res.json()
    console.log(recipes)
    return recipes;
} 
