import { imgs } from "./img.js"


export const showPopularDestination = (stop)=>{

 
    const url = "../popularDestination.json"

const destinatinDiv = document.querySelector(".popular-Destination")
    const poupularDestinantionFech = fetch(url)

    poupularDestinantionFech
    .then((res)=>res.json())
    .then((data)=>{
console.log(data)

let sum =0

        // data.some((des,indx,arr) =>
          for(let des of data)    {
          
if(stop){
  sum++
          if(sum === 5){
            console.log("hi")
            return;
          }
}
           let {name,description,imageUr,id ,transport,price,accommodation,meals,activities}=des
            imageUr = imgs() 

const div = document.createElement("div")
div.innerHTML =`<div class="card bg-base-100 w-96 shadow-sm">
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
      <div class="badge badge-outline">Deatils</div>
      <div class="badge badge-outline">Book now</div>
    </div>
  </div>
</div>`

div.addEventListener("click",()=>{
  localStorage.setItem("deatils",JSON.stringify({id}) )
 location.href="deatils.html"
})
destinatinDiv.append(div)

        };
    })
   
}