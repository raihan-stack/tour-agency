export const user = (email,password)=>{
    let userData = localStorage.getItem("userData")

 if(userData){
       userData = JSON.parse(userData)
   
    let isUser = userData.filter((user)=>(user.email === email && user.password ===password) )
   
    

    return  {isUser}


 }
}