

export const  deatails =  async ()=>{


     let id = localStorage.getItem("deatils")
    id = JSON.parse(id)

const res  = await fetch("../popularDestination.json")
const data = await res.json()

const filterdDes = data.filter((des)=>des.id === id.id)
console.log(filterdDes)

}
deatails()