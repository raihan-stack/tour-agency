import { commited } from "./committ.js"
import { imgs } from "./img.js"


export const  exp =  async ()=>{


     let id = localStorage.getItem("deatils")
    id = JSON.parse(id)

const res  = await fetch("../popularDestination.json")
const data = await res.json()

const filterdDes = data.filter((des)=>des.id === id.id)
// console.log(filterdDes)
const body = document.querySelector('body')
const main = document.querySelector("#main")

filterdDes.forEach((des,indx) => {


  
    const div5 =document.querySelector("div")
   let  {name,description,imageUr,id ,transport,price,accommodation,meals,activities}=des


   const mainClone = document.importNode(main.content,true)
   
   console.log(mainClone)


   mainClone.querySelector("img").src=imageUr

mainClone.querySelector(".id").textContent=id
mainClone.querySelector(".name").textContent=`Tour_name :${name}`


mainClone.querySelector(".discription ").textContent=`Tour_disCription ${description}`

mainClone.querySelector(".price").textContent=`Tour_Cost ${price}`
mainClone.querySelector(".tranasport ")



mainClone.querySelector(".meals")










const div4 = document.createElement("div")
accommodation.forEach((hote)=>{

    const p= document.createElement("p").innerText ="hi"
    

    let{hotel,nights,pricePerNight,rating}= hote

    let HotelTemp = document.querySelector("#hotel")
    let hotelClone = document.importNode(HotelTemp.content,true)


    hotelClone.querySelector(".hotelName").textContent = ` Hotel Name : ${hotel}`
    hotelClone.querySelector(".nights").textContent =`StayTime: Nights ${nights}`
    hotelClone.querySelector(".rating").textContent = `Rating :   ${rating}`
    hotelClone.querySelector(".hotelcost").textContent =` perNight Cost : ${pricePerNight}`
    mainClone.querySelector(".accommodation").append(hotelClone)
console.log(hotel)
})
for ( let trn in transport){
  
   
    console.log( transport[trn])
    const div = document.createElement("div")
    let obj = transport[trn]
    for ( let t in obj){
        console.log(obj[t])
        let transp = document.querySelector("#tranasport")
        let transpClone = document.importNode(transp.content, true)
        transpClone.querySelector(".frm").textContent=`${trn} : ${t} cost: ${obj[t]} `
        // trnsptClone.querySelector(".frm").textContent = `${trn}:${t}`




console.log(trn)
// trnsptClone.querySelector(".frm").textContent = `${t} :${trn}`
     div.innerHTML =`
     <div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">
   <h2 class="card-title"> ${trn} tranaspot ${t}  </h2>
    
    
  
  </div>
</div>
     
     
     
     `
     
     mainClone.querySelector(".tranasport ").append(transpClone)

    }


}








for ( let activity in activities){

const div5 =document.querySelector("div")
activities[activity].forEach((atv)=>{



   let activiti = document.querySelector('#activites')
    let activitiClone = document.importNode(activiti.content, true)

activitiClone.querySelector(".activity").textContent =  `${activity} ${atv} `
    // activitiClone.querySelector(".activity").textContent =`${activity} ${atv}`
    //
  
    console.log(activity ,atv )
//     div.innerHTML=`
//    <div class="card bg-base-100 w-96 shadow-sm">
//       <div class="card-body">
//         <div class="card-actions justify-end">
//           <button class="btn btn-square btn-sm">
//           ${activity}
//           </button>
//         </div>
//         <p>${atv}</p>
//       </div>
//     </div>
//     `
    mainClone.querySelector(".activites").append(activitiClone)
// div4.append(div) 


})









}


// const {day1day2,day3,day4}=    meals

// let div2=   document.createElement("div")
for(let meal in meals){
     const{lunch,dinner} = meals[meal]


     console.log(meals)
let food = document.querySelector("#meals")
let foodClone = document.importNode(food.content,true)

foodClone.querySelector(".lunch").textContent = `  ${meal} :lunch   ${lunch}`
foodClone.querySelector(".dinner").textContent = `  ${meal} : dinner ${dinner}`

// console.log(lunch,dinner,)
 const p1 = document.createElement("p").innerHTML = `${meal}  lunch${ lunch ? lunch : ""}  `

 const p2 = document.createElement("p").innerHTML = `${meal}  dinner:${dinner ? dinner : ""} `
// div2.append(p1,p2)
mainClone.querySelector(".meals").append(foodClone)
}




const div = document.createElement("div")
// div.innerHTML =`<div class="card bg-base-100 w-96 shadow-sm">
// <figure>
// <img
// src="${imageUr}"
// alt="Shoes" />
// </figure>
// <div class="card-body">
// <h2 class="card-title">
// Tour-place:${name}
// <div class="badge badge-secondary">Price: ${price}</div>
// </h2>
// <p>pa${description}</p>
// <div class="card-actions justify-end">
// <div class="badge badge-outline deateils">Deatils</div>
// <div class="badge badge-outline book">Book now</div>
// </div>
// </div>

// <div>
// <h5 class="meal">hotel</h5>


// </div>

// </div>`


div.addEventListener("click",(e)=>{



})
// div.append(div2,div4,div5)
// btnClone.querySelector(".comment").addEventListener("click",()=>{
//   console.log("hello")
// })






const btn = document.querySelector("#btns")

const btnClone = document.importNode(btn.content,true)

btnClone.querySelector(".book").addEventListener("click",(e)=>{
  if(e.target.classList.contains("book")){
    location.href="book.html"
    console.log("hello")
  } else if (e.target.classList.contains("deateils")){
    location.href="deatils.html"
    console.log("hi")
  }
localStorage.setItem("deatils",JSON.stringify({id}) )
})

btnClone.querySelector(".comment").addEventListener("click",(e)=>{
 commited(e,div,indx)
})


mainClone.querySelector(".btns").append(btnClone)





body.append(mainClone)

});



}
exp()