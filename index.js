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


// -------------------

const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["src/1.jpg", "src/2.jpg", "src/3.jpg", "src/4.jpg", "src/5.jpg", "src/6.jpg", "src/7.jpg", "src/8.jpg",];
console.log(photos);

let i = 0;
next.addEventListener('click', () => {
i++;
if (i>photos.length-1){
    i=0;
}
document.querySelector("#pictures").src = photos[i]
})

back.addEventListener('click', () => {
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector("#pictures").src = photos[i]
})


