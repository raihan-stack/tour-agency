
import { commited } from "./committ.js";
import { sign } from "./sgin.js";
import { showPopularDestination } from "./showPopularDestnation.js";
sign()
showPopularDestination("stop" ,"serch") 
document.querySelector(".logout").addEventListener("click",()=>{
    localStorage.removeItem("signUp" )
    sign()
})
document.querySelector(".sign").classList.remove("hidden") 
// commited()
// const initMap =()=>{
//     let location = {lat:23.685 ,lng:90.3563}
//     let map = new google.maps.Map(document.querySelector("#map"),{
//         zoom:7,
//         center:location

//     })
//     let marker = new google.maps.Marker({
//         position:location,
//         map:map,
//         title:"Bangladesh"
//     })
// }
// window.initMap = initMap