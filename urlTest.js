
"use strict";
const url = ""

let express = require("express");
let app = express();

app.get("/", function (req, res) {
    res.send("Get off my page scrub.");

});

app.listen(3000, function () {
    console.log("Example listening on port 3000");
});



function getIngredients() {
    let ingSearch = document.getElementById("ingredientSearch").value;


}

function getSearchQuery() {
    let foodSearch = document.getElementById("searchQuery").value;
}