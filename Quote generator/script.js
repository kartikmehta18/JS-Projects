let result = document.getElementById("result");
let btn = document.getElementById("btn");

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userInp = document.getElementById("inp").value;

fetch(url + "pizza")
.then(response => response.json())
.then((data)=> {let myMeal = data.meals[0];
// console.log(data);
console.log(myMeal);
});