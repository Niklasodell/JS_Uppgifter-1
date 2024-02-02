let title = document.getElementById("title")
console.log( title )

let mainDiv = document.querySelector(".main-div")
console.log(mainDiv)

let listItems = document.querySelectorAll("ul.list > li")
console.log(listItems)

//------------------ Nu ska elementet ändras ----------------

title.innerText = "This is a new title with innerText"
title.innerHTML = "<p>This is a innerHTML</p>"


let image = document.querySelector("img")
image.setAttribute("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png")
image.classList.add("img-fluid") 


mainDiv.style.backgroundColor = "blue"


let oldDiv = document.querySelector(".old-div")
document.body.removeChild(oldDiv)


let newDiv = document.createElement("div")
newDiv.innerText = "This is a new DIV"
document.body.appendChild(newDiv)
