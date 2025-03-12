export const commitd =(div,indx)=>{
    
    const arr = JSON.parse(localStorage.getItem(`comment${indx}`))
    
    if(arr){
        arr.forEach((c,i)=>{
            const{comment} =c;
        
          
             let commitP = document.createElement("p")
           commitP.innerText = comment
          div.append(commitP)
           
           
           
           })
    }
}