import { imgs } from "./img.js"


export const  deatails =  async ()=>{


     let id = localStorage.getItem("deatils")
    id = JSON.parse(id)

const res  = await fetch("../popularDestination.json")
const data = await res.json()

const filterdDes = data.filter((des)=>des.id === id.id)
console.log(filterdDes)
const main = document.querySelector("main")

filterdDes.forEach(des => {
    const div5 =document.querySelector("div")
   let  {name,description,imageUr,id ,transport,price,accommodation,meals,activities}=des
   imageUr = imgs()
const {} =transport
const div4 = document.createElement("div")
accommodation.forEach((hote)=>{

    let{hotel,nights,pricePerNight,rating}= hote
const div = document.createElement("div")

div.innerHTML=`
<div class="card w-96 bg-base-100 card-xs shadow">
  <div class="card-body">
 <img src="${imageUr}" alt="">
    <h2 class="card-title">hotel ${hotel}</h2>
    <p>Nights:    ${nights}</p>
      <p>pricePerNight:  ${pricePerNight}</p>
    <div class="justify-end card-actions">
      <button class="btn btn-primary">${rating}</button>
    </div>
  </div>
</div>

`
div4.append(div)
    
})
for ( let trn in transport){
    console.log(trn)
    const div = document.createElement("div")
    for ( let t in transport[trn]){
     div.innerHTML =`
     <div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">
   <h2 class="card-title"> ${trn} tranaspot ${t}  </h2>
    
    
  
  </div>
</div>
     
     
     
     `
    div4.append(div)

    }


}








for ( let activity in activities){

const div5 =document.querySelector("div")
activities[activity].forEach((atv)=>{
    const div = document.createElement("div")
    div.innerHTML=`
   <div class="card bg-base-100 w-96 shadow-sm">
      <div class="card-body">
        <div class="card-actions justify-end">
          <button class="btn btn-square btn-sm">
          ${activity}
          </button>
        </div>
        <p>${atv}</p>
      </div>
    </div>
    `
div4.append(div)


})









}
const {day1day2,day3,day4}=    meals

let div2=   document.createElement("div")
for(let meal in meals){
     const{lunch,dinner} = meals[meal]

console.log(lunch,dinner,)
 const p1 = document.createElement("p").innerHTML = `${meal}  lunch${ lunch ? lunch : ""}  `

 const p2 = document.createElement("p").innerHTML = `${meal}  dinner:${dinner ? dinner : ""} `
div2.append(p1,p2)
}

for(let hotels of accommodation){

 
const {}=accommodation

}


const div = document.createElement("div")
div.innerHTML =`<div class="card bg-base-100 w-8/10 shadow-sm">
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

<div>
<h5 class="meal">hotel</h5>


</div>

</div>`

div.addEventListener("click",()=>{
localStorage.setItem("deatils",JSON.stringify({id}) )
location.href="deatils.html"
})
div.append(div2,div4,div5)

main.append(div)

});



}
deatails()