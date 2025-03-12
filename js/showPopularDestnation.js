import { commitd } from "./commit.js"
import { commited } from "./committ.js"
import { imgs } from "./img.js"


export const showPopularDestination = (stop)=>{
 let body =document.querySelector("body")
 let bb = document.createElement('bb')
 bb.classList.add("flex","justify-center" ,"mt-20")
 ;
bb.innerHTML=
  `
  <span class="loading loading-spinner text-primary"></span>
<span class="loading loading-spinner text-secondary"></span>
<span class="loading loading-spinner text-accent"></span>
<span class="loading loading-spinner text-neutral"></span>
<span class="loading loading-spinner text-info"></span>
<span class="loading loading-spinner text-success"></span>
<span class="loading loading-spinner text-warning"></span>
<span class="loading loading-spinner text-error"></span>
`

body.append(bb)
 setTimeout((t)=>{
  let bb= document.querySelector("bb")

  bb.remove()
  if(stop){
    document.querySelector(".destination").addEventListener("click",()=>{
      location.href="destination.html"
    })
   }
      const url = "../popularDestination.json"
  
  const destinatinDiv = document.querySelector(".popular-Destination")
      const poupularDestinantionFech = fetch(url)
  
      poupularDestinantionFech
      .then((res)=>res.json())
      .then((data)=>{
  // console.log(data)
   if(data){
    // console.log("how are you")
   }
  
  const filer = data.filter((fil5,i)=> i<=3)
  
  
  let st = stop? filer : data
  
        
            // for(let des of data)  
              
              st.some((des,indx,arr) =>  {
              // if(stop){
              //   sum++
               
              //           if(sum === 5){
              //             console.log("hi")
              //             break
              //           }
                        
              // }
              // console.log(sum)
             let {name,description,imageUr,id ,transport,price,accommodation,meals,activities}=des
              imageUr = imgs() 
              // console.log(num++ ,sum)
  const div = document.createElement("div")
  div.innerHTML =`<div class="card main  bg-base-100 w-96 shadow-sm">
    <figure>
      <img
        src="${imageUr}"
        alt="Shoes" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
         Tour-place:${name}
        <div class="badge badge-secondary">Price: ${price}</div>
      </h2>
      <p>pa${description}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline  Deatils"><Deatils></div>
        <div class="badge badge-outline btn book">Book now</div>
         <div class="badge badge-outline btn comment">comment</div>
      </div>
    </div>
  <div class="inpt hidden">
        <input class="input" type="" name="" id="">
        

        <input class="input block w-14 ratings" placeholder ="rating"  type="number" name="" id="">
        <button class="ad btn">submit</button>
        <div class="rating">

      
         <input type="radio" name="rating-2" width="" class="mask mask-star-2 " aria-label="1 star" />
     
     
      <input   type="radio" name="rating-2" class="mask mask-star-2  " aria-label="2 star" checked="" />
      <input type="radio" name="rating-2" class="mask mask-star-2 " aria-label="3 star" />
      <input type="radio" name="rating-2" class="mask mask-star-2 " aria-label="4 star" />
      <input type="radio" name="rating-2" class="mask mask-star-2 " aria-label="5 star" />
    </div>
     </div>
       <div>
       <div class="commit flex flex-col"></div>
       <div class="rating"></div>
       </div>
  
  </div>`
  
  
  div.addEventListener("click",(e)=>{
    
    // console.log(name,sum)
    commited(e,div,indx)
    // console.log(indx)
  
    
  }
   )
  
  
  div.addEventListener ("click",(e)=>{
   if(e.target.classList.contains("book")){
     location.href="book.html"
   }else if(e.target.classList.contains("Deatils")){
    localStorage.setItem("deatils",JSON.stringify({id}) )
   location.href="deatils.html"
   }
  
    
  })
  // div.addEventListener("click",()=>{
  //   localStorage.setItem("deatils",JSON.stringify({id}) )
  //  location.href="deatils.html"
  // })
  des
  destinatinDiv.append(div)
  
          });
      })
  
 },1000)
   
}