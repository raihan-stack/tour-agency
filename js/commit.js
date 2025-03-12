export const commitd =(div,indx)=>{
    
    const arr = JSON.parse(localStorage.getItem(`comment${indx}`))
    
    if(arr){
        console.log(arr.length)
        arr.forEach((c,i)=>{
            
            console.log(c)
            const{comment,star} =c;
            const div2 = document.createElement("div")
            
            div2.classList.add("rating")
          div2.innerHTML =`${star}`
             let commitP = document.createElement("p")
           commitP.innerText = comment
           console.log()
          div.append(commitP,div2)
           
           
           
           })
    }
}