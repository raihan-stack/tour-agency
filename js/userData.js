import { sign } from "./sgin.js"


export  const userData = (data,returns,login)=>{
let getData = localStorage.getItem("userData")||[]
 console.log(typeof getData )
 if(typeof getData ==="string"){
    getData =JSON.parse(getData)
 }
if(login){
    let filter = getData.filter((user)=>user.email === data.email && user.password ===data.password)
    if(filter.length >=1){
        localStorage.setItem("signUp",JSON.stringify({signUP:"login"}))
        console.log("hi")
        location.href ="index.html"
        return false
    }else{
        "ok"
    }
}

// if(data){
//     getData.push(data)
// }
 
    if(getData && data){
        let filter = getData.filter((user)=>user.email === data.email && user.password ===data.password)


        if(filter.length >=1){
            let  login ="this account alredy has please log in"
            return {login}
        }

        localStorage.setItem("signUp",JSON.stringify({singUP:true}))
        getData.push(data)
        localStorage.setItem("userData",JSON.stringify(getData))
    }
      if(data){
        location.href ="index.html"
      }
    if(returns){
        const user = localStorage.getItem("userData")
        console.log(user)

        return JSON.parse(user)
    }
}