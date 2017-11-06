import { getSearchAndOutput } from "./recipe.js";

function clicker() {
    const ing = document.getElementById("ingredientSearch").value;
    const sear = document.getElementById("searchQuery").value;

    const inputID = document.getElementById("pokeIDInput").value;
    getSearchAndOutput(ing,sear);
}
