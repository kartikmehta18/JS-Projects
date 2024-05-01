const getColor =()=>{
    const randomNumber =Math.floor(Math.random()*1677215);
    const randomCode ="#"+randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor= randomCode;
    const txt =document.getElementById("h");
    txt.innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);
} 



document.getElementById("btn").addEventListener("click",
getColor);

getColor();