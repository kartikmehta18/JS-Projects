const upperSet= "ABCDEFGHIJKLMNOPQRSTXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numSet = "1234567890";
const symboolSet= "~_!@#$%^&*()+/";
const passBox =document.getElementById("pass-box")

const totalChar =document.getElementById("total-char");
const upperInput =document.getElementById("upper-case");
const LowerInput =document.getElementById("lower-case");
const numberInput =document.getElementById("numbers");
const symbolInput=document.getElementById("symbols");

const getRandom = (dataSet)=>{
    return dataSet [Math.floor(Math.random()* dataSet.length)]
}

const generatePassword =(password="")=>{
        if (upperInput.checked){
            password+= getRandom(upperSet) ;
        }
        if (LowerInput.checked){
            password+= getRandom(lowerSet) ;
        }
        if (numberInput.checked){
            password+= getRandom(numSet) ;
        }
    
      if (symbolInput.checked){
        password+= getRandom(symboolSet) ;
        }
        
      if (password.length<=totalChar.value){
                    return  generatePassword(password);
                }

    passBox.innerHTML=password;
        console.log(password)
}

document.getElementById("btn").addEventListener("click",()=>{
    generatePassword();
})

