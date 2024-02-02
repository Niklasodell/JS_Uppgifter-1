//addEventListener

let button = document.querySelector("button")
button.addEventListener("click", ()=> {
    alert("this is alert")
})


// Nu börjar vi skapa en lista med objekt på ett
// dynamiskt sätt med hjälp av JavaScript


let input = document.getElementById("itemInput")
let addButton = document.getElementById("addButton")
let list = document.getElementById("dynamicList")


addButton-addEventListener("click", ()=>{

    if(input.value.trim() !== ""){
        let newItem = document.createElement("li")
        newItem.innerText = input.value;

        list.appendChild(newItem);
        input.value = ""
    }

})



const filterInput = document.getElementById("filterInput")
const itemList = document.querySelector(".list")

filterInput.addEventListener("keyup", ()=> {

    const term = filterInput.value.toLowerCase()
    const items = itemList.getElementsByTagName("li")
    
    Array.from(items).forEach((item)=> {
        if(items.textContent.toLocalLowerCase().indexOf(term) !== -1){
            item.style.display = "Block"; 
        }else {
            item.style.display = "none"
        }
    })

})

