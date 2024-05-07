const form = document.querySelector("form");
const container = document.querySelector(".image-container");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let query = form.querySelector("input").value;
    console.log(query);
    tvMazeApi(query);
})

async function tvMazeApi(query) {
    const req = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await req.json();
    // console.log(res);
}