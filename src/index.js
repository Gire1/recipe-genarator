function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3f5te44f20dc10969a23fb1a9afo8c90";
  let context =
    "You are a creative food expert and love to share recipes.Your mission is to genrate a simple recipe in basic HTML.Make sure to follow the user instructions ";
  let prompt = `User Instructions:Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `
  <div class="text-style blink-smooth">Generating a recipe about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);