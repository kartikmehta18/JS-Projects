const url =` https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

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