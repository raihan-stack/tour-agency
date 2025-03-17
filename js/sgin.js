import { popUp } from "./popup.js"

export  const sign =(sg,lg)=>{
let signUp =    localStorage.getItem("signUp")
console.log(JSON.parse(signUp))

let btns = document.querySelectorAll(".b")
console.log("called")


if(signUp){
    popUp("done")  
    btns.forEach((btn)=>{
        btn.classList.remove("hidden")
        console.log(btn)
        console.log("hello")   
      
    })
    document.querySelector(".logout").classList.remove("hidden")
  
   
   
}else if(!signUp) {
    btns.forEach((btn)=>{
        btn.classList.add("hidden")
        console.log(btn)
        console.log("hello")   
      
    })
    document.querySelector(".logout").classList.add("hidden")
  
}

else{
    document.querySelector(".login").classList.add("hidden")
    document.querySelector(".sign").classList.remove("hidden")     
}


}