const items = document.querySelectorAll(".plant");
console.log(items);

items.forEach(item =>{
    item.addEventListener("mouseover", () =>{
        removeFocus();
        item.classList.add("selected");
       
    })

    removeFocus = () => {
        items.forEach (item => {
            item.classList.remove("selected");
        })
    }
})
