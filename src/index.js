function  displayRecipe(response){
 console.log("recipe generated");
  new Typewriter("recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

function generateRecipe(event){
event.preventDefault();
let instructionsInput=document.querySelector("#user-instructions")
let apiKey="3f5te44f20dc10969a23fb1a9afo8c90";
let context=
"You are a creative food expert and love to share recipes.Your mission is to genrate a simple recipe in basic HTML.Make sure to follow the user instructions "
let prompt = `User Instructions:Generate a recipe about ${instructionsInput.value}`;
let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating recipe");
 console.log(`Prompt:${prompt}`);
console.log(`Context:${context}`);

axios.get(UrL).then(displayRecipe);
  }

new Typewriter("recipe", {
  strings: "Explore thousands of tested recipes",
  autoStart: true,
  delay:1,
  cursor:"",
});



let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);