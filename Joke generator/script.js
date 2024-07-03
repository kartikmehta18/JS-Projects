const jokeContainer =document.getElementById("joke");
const btn = document.getElementById("btn");
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item =>jokeContainer.textContent=`${item.joke}`);
}
getJoke();
//or async or await
async function getJoke1(){
    const fe = await fetch(url);
    const data =await fe.json();
    jokeContainer.innerText=`${data.joke}`;
}
getJoke1();