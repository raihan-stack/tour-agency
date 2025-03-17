export const popUp = (text)=>{

    const p = document.createElement("p")
    p.classList.add("bg-red-100","p-5","rounded")
    p.innerText = text
    document.querySelector("body").append(p)
    setTimeout(() => {
        p.remove()
    },3000);




}