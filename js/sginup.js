import { after } from "./ater.js"
import { popUp } from "./popup.js"
import { user } from "./user.js"
import { userData } from "./userData.js"






const submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click",(e)=>{
 let  userName =  document.querySelector("#user-name").value
    let email =  document.querySelector("#email").value
    let password = document.querySelector("#password").value
    let confirmPassword =document.querySelector("#confirm-password").value

    e.preventDefault()
    console.log("submited")
    console.log("submit" ,email,password,confirmPassword)

  
const obj = {email,password,confirmPassword,signUP:"true"}
    if(email.includes("@")&& password.length>=4 && confirmPassword === password){
        let data =  userData(obj ,"ret")
        if(data.login){
           document.querySelector(".txt").classList.add("text-red-300")
           popUp("Please log in")
        }else{
            popUp("done")  
        }




    }
//     if(email.includes("@")&& password.length>=4 && confirmPassword === password){
// location.href ="index.html"
//     }



})