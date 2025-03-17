import { after } from "./ater.js"
import { user } from "./user.js"
import { userData } from "./userData.js"






const submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click",(e)=>{

    let email =  document.querySelector("#email").value
    let password = document.querySelector("#password").value
    

    e.preventDefault()
    console.log("submited")
    console.log("submit" ,email,password,)

    const obj = {email,password}

    userData(obj,"ret","login")
       


console.log("hi")





})