import { commitd } from "./commit.js";

export let commited = (e, div, inx) => {
  if (e.target.classList.contains("comment")) {
    const main = div.querySelector(".main");
    let inp = div.querySelector(".inpt");
    const raings = div.querySelectorAll("input[name='rating-2']");

    let input = inp.querySelector(".input");
    let commit = div.querySelector(".commit");
    // commit.classList.add("flex ")
    let ad = inp.querySelector(".ad");
    const commitaArray =
      JSON.parse(localStorage.getItem(`comment${inx}`)) || [];
    commitd(commit, inx);

    ad.addEventListener("click", () => {
      let ratingsNumber = div.querySelector(".ratings").value;
      let ratingNumber = div.querySelector(".ratings").value;
      // console.log(ratingsNumber)
      let loop = 6;
      for (let rating of raings) {
        let mul = (loop = loop - 1) / (ratingsNumber = ratingsNumber - 1);

        if (mul >= 1) {
          rating.classList.add("bg-orange-400");
        } else {
          rating.classList.remove("bg-orange-400");
        }
      }

      const rain = div.querySelector(".rating");

      let main = rain.innerHTML;

      // console.log(ratingsNumber)
      commitaArray.push({ comment: input.value, star: main });
      // console.log(commitaArray)

      localStorage.setItem(`comment${inx}`, JSON.stringify(commitaArray));
      const arr = JSON.parse(localStorage.getItem(`comment${inx}`));

      arr.forEach((c, i) => {
        const divs = document.createElement("div");
        // divs.classList.add("flex gap-5")
        let { comment, star } = c;

        if (i === arr.length - 1) {
           let convetHtml = document.createElement("div")
          const template = document.querySelector("#rating");
          // console.log(template)
          const clone = document.importNode(template.content, true);
          // console.log(clone)

          let ratio = clone.querySelectorAll("input[name='rating-2']");
          let rat = 0;
          for (let rating of ratio) {
            rat++;

            console.log(rat, star);
            if (rat <= star) {
              console.log("hello");
              rating.classList.add("bg-orange-400");
            } else {
              console.log("are you ok");
            }

            console.log(ratio);
            // if(ratng === star ){
            //   console.log(ratng)
            //   break

            //  }
          }
          // star.classList.add("rating")
convetHtml.innerHTML =`${star}`
convetHtml.classList.add("rating")
console.log(convetHtml)
          let commitP = document.createElement("p");
          commitP.innerText = comment;
star=star.innerHTML
          commit.append(commitP,convetHtml);
        }
      });

      const url = "../commit.json";

      const post = fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          commit: input.value,
        }),
      });
      post.then((res) => res).then((data) => data);
    });

    inp.classList.remove("hidden");
    console.log(inp);

    div.classList.add("h-12/10", "z-10", "mb-100", "bg-base-100");
  }
};
