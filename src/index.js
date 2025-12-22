function generateRecipe(event){
event.preventDefault();

new Typewriter("recipe", {
  strings: ["Explore thousands of tested recipes"],
  autoStart: true,
  delay:1,
  cursor:""
});

}

let recipeFormElement =document.querySelector("#recipe-generator-form")
recipeFormElement.addEventListener("submit", generateRecipe);