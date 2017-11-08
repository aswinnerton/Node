
"use strict";
const url = "http://www.recipepuppy.com/api/?";

//example: http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3

async function getIngredients(ingSearch, foodSearch) {
    const response = await fetch(`${url}i=${ingSearch}&q=${foodSearch}`);
    const data = await response.json();
    return data;
}

function ifError(er) {
    document.getElementById("ingredientSearch").placeholder = "Enter a valid ingredient";
    document.getElementById("ingredientSearch").value = "";
    document.getElementById("searchQuery").placeholder = "Enter a valid food title";
    document.getElementById("searchQuery").value = "";
}

function clearData() {
    document.getElementById("testOutput").innerHTML = "";
}

export function getSearchAndOutput(ingredient, title) {

    clearData();

    let foodPromise = Promise.resolve(getIngredients(ingredient, title))
    foodPromise.then((jsonObj) => {
        const foodObject = transformRecipe(jsonObj);
        for (let entry in foodObject) {
            document.getElementById("resultsTable").innerHTML += `
          <tr>
            <td>${foodObject[entry].title}</td>
            <td>${foodObject[entry].ingredients}</td>          
          </tr>       
        `;
        }
        document.getElementById("ingredientSearch").placeholder = "Enter a ingredient";
        document.getElementById("searchQuery").placeholder = "Enter a food title";

    }).catch(ifError);
}

function transformRecipe(jsonFoodObj) {
    const foodObject = {};
    const finalFood = [];
    foodObject.results = jsonFoodObj.results;
    for (let entry in foodObject) {
        for (let key in foodObject[entry]) {
            finalFood.push(foodObject[entry][key]);
        }
    }
    return finalFood;
}