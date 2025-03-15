import { commitd } from "./commit.js"
import { commited } from "./committ.js"
import { imgs } from "./img.js"


export  const exploreMore = (data)=>{
    const showPopularDestinations = (stop,searching,data)=>{
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
            
         
        let destinatinDiv = document.querySelector(".popular-Destination")
        destinatinDiv.innerHTML =""
             
         
            
             
             
         
       
         let searchBtn = document.querySelector(".searchBtn")
       
       
       
         if(location.href === "index.html"){
           searchBtn.addEventListener("click",()=>{
             document.querySelector(".popular-Destination").innerHTML=""
             let search = document.querySelector("#search").value.trim()
            
             search = search
            
            
         
         
          
         let num =0;
         // console.log(search)
             let findingData= data.filter((d)=>{
               
         
          
         
         
         if(d.price.includes("BDT")){
           d.price =d.price.replace("BDT","").trim()
           d.price =d.price.replace(/,/g,"").trim()
         }else if(d.price.includes("PKR")){
           d.price =d.price.replace("PKR","").trim()
           d.price =d.price.replace(/,/g,"").trim()
         }else if(d.price.includes("INR")){
           d.price =d.price.replace("INR","").trim()
           d.price =d.price.replace(/,/g,"").trim()
         }
         
         
         
         let price = Number(d.price)
         
         console.log(typeof d.price)
         // d.price = Number(d.price)
         // console.log(typeof search)
         if(search.includes("under")){
         
           let mod = search.replace("under","").trim()
           console.log(d.price <= mod , d.price, mod )
           mod = Number(mod)
           return price <= mod
         } else if (search.includes("over")){
         
           let mod = search.replace("over","").trim()
         
         
         
           console.log(d.price >= mod , d.price, mod )
           mod = Number(mod)
           return price >= mod
         }
         // console.log(search)
         
         
         
         
         
         
         
         
         
         
                 return d.id == search ||        d.name === search || price === search
                }
         
         
         
         
         
             
             )
            data.some((des,indx,arr) =>  {
               console.log(findingData.length)
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
         }
        
       
       
        
       
       
         
         const filer = data.filter((fil5,i)=> i<=3)
         
         
         let st = stop? filer : data
        
                  
                     
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
               <div class="badge badge-outline  Deatils">Explore</div>
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
          location.href="exp.html"
          }
         
           
         })
           // div.addEventListener("click",()=>{
         //   localStorage.setItem("deatils",JSON.stringify({id}) )
         //  location.href="deatils.html"
         // })
         
       destinatinDiv.append(div)

         
                 })


                 
                 let div = document.createElement("div")
          const btns = document.querySelector("#btns")
          const btnClone = document.importNode(btns.content,true)


let sum =10
let sumDe=0 
          btnClone.querySelector(".expolreMore").addEventListener("click",()=>{
           


         
let expData = data.filter((dataExp,indx )=>  indx >= sumDe &&indx <sum )
// exploreMore(expData)
//  sum= sum+10
sumDe= sumDe +10
// console.log(expData) 
// if(data.length === 0){
//   console.log("not find more")
//   sum =10
// sumDe=0 
// }
          })
          btnClone.querySelector(".back").addEventListener("click",()=>{
          
             sum= sum-10
             sumDe= sumDe -10
let expData = data.filter((dataExp,indx )=>  indx >= sumDe &&indx <sum  )
// exploreMore(expData) 
console.log(sum,sumDe)

if(data.length === 0){
    console.log(data.length)
  console.log("not find more")
  sum =data.length
sumDe= sum -10
}
console.log(expData)
           
            
          })
        console.log("btn")
          div.append(btnClone)
          console.log(btnClone)
          destinatinDiv.append(div)
          ;
         
           
        },1000)
          
       }
       showPopularDestinations("","",data)

}