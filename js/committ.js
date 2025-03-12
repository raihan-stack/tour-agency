import { commitd } from "./commit.js"

export let commited =(e,div,inx)=>{
 console.log(e)
        if(e.target.classList.contains("comment")){
      
      
      const main = div.querySelector(".main")
      let inp = div.querySelector(".inpt")
      
      let input = inp.querySelector(".input")
      let commit = div.querySelector(".commit")
      let ad = inp.querySelector(".ad")
      const commitaArray = JSON.parse(localStorage.getItem(`comment${inx}`)) ||[]
      commitd(commit,inx) 
     
      ad.addEventListener("click",()=>{
    
      
      

        commitaArray.push({comment: input.value})
        console.log(commitaArray)

        localStorage.setItem(`comment${inx}` ,JSON.stringify(commitaArray))
const arr = JSON.parse(localStorage.getItem(`comment${inx}`))

arr.forEach((c,i)=>{
 const{comment} =c;
 console.log(i)
if(i=== arr.length -1){
  console.log(i)
  let commitP = document.createElement("p")
commitP.innerText = comment
commit.append(commitP)
}


})


         const url =  "../commit.json"

         const post = fetch(url,{
          method:"POST",
          headers:{"content-type" :"application/json"},
          body:JSON.stringify({
            commit:input.value

          })
         })
      post
      .then((res)=> console.log(res))
.then((data)=>console.log(data))

      })
      
      
      
      inp.classList.remove("hidden")
      console.log(inp)
      
      
      
      div.classList.add("h-12/10","z-10", "mb-100"  ,"bg-base-100")
      
        }
      }
