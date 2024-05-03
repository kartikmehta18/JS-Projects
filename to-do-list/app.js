// const item = document.querySelector("#item");
// const toDo = document.querySelector("#list");

// item.addEventListener("keyup",
// function(event){
//     if(event.key == "Enter");
//     { 
//         addTODo(this.value);
//         // console.log(this.value);
//         this.value ="";
//     }
//     }
// )

// const addTODo =(item)=>{
//     const listItem =document.createElement("li");
//     listItem.innerHTML= `${item}
//     <i class="fas fa-times"></i>`;

//     toDo.appendChild(listItem);
// }


const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value);
                 // console.log(this.value);
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener("click",
     function()
    {
        this.classList.toggle("done");
    }
)
listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove();
    })

    toDoBox.appendChild(listItem);
}



// listItem.addEventListener(
//     "click",
//     function() {
//         this.classList.toggle("done");
//     }
// )
// listItem.querySelector("i").addEventListener(
//     "click",
//     function() {
//         listItem.remove()
//     }
// )