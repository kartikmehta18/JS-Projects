let quote = document.getElementById("quote");
let author =document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

async function getQuote(){
    const rel= await fetch(url);
    const data = await rel.json();
    console.log(data)
    quote.innerHTML =`${data.content}`;
    author.innerHTML =`${data.author}`;
}
getQuote();