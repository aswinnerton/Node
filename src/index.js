"use strict";

import { getSearchAndOutput } from "./recipe.js";

function clicker() {
    document.getElementById("resultsTable").innerHTML = "";
    const ing = document.getElementById("ingredientSearch").value;
    const sear = document.getElementById("searchQuery").value;
    getSearchAndOutput(ing,sear);
}

window.clicker = clicker;
