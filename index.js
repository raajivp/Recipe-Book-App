const API_KEY = "bd2736cc440841bf94940511b88a84d5";
const recipelistE1 = document.getElementById("recipe-list");



function displayRecipes(recipes)
{
    recipelistE1.innerHTML = "" ; 
   recipes.forEach((recipe) => 
   {
      const recipeItemE1 = document.createElement("li");
      recipeItemE1.classList.add("recipe-item");

      recipeImageE1 = document.createElement("img");
      recipeImageE1.src = recipe.image ;
      recipeImageE1.alt = "recipe image" ;

      recipeTitleE1 = document.createElement("h2");
      recipeTitleE1.innerText = recipe.title;

      recipeIngredientsE1 = document.createElement("p") ;
      recipeIngredientsE1.innerHTML = `
      <strong>Ingredients: </strong> ${recipe.extendedIngredients
      .map((ingredient)=>ingredient.original)
      .join(", ")}`;

      recipelinkE1 = document.createElement("a");
      recipelinkE1.href = recipe.sourceUrl;
      recipelinkE1.innerText="View Recipe";

      recipeItemE1.appendChild(recipeImageE1);
      recipeItemE1.appendChild(recipeTitleE1);
      recipeItemE1.appendChild(recipeIngredientsE1);
      recipeItemE1.appendChild(recipelinkE1);
      recipelistE1.appendChild(recipeItemE1);
   }); 
}

async function getRecipes ()
{
   const response = await fetch (`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`) 
   const data = await response.json();
   return data.recipes;
}

async function init ()
{
   const recipes = await getRecipes()
   displayRecipes(recipes);
}

init(); 
//This Funtions Triggers API