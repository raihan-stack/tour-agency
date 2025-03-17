export const after = (email,password)=>{
    let userData = localStorage.getItem("userData")

 if(userData){
       userData = JSON.parse(userData)
   
    let isUser = userData.filter((user)=>user.email ===email && user.password ===password)
   
console.log(isUser.length)


    if(isUser.length >0 ){
     const div =     document.createElement("div")
isUser.forEach(element => {
       div.innerHTML= ` <P>${element.email}</P>`
       console.log("hi")
});
   document.querySelector("body").append(div)
        return isUser
    }else{
        return null
    }
 }
}