const more = document.querySelector(".more");

more.addEventListener("click",function(){
    imgNum = 8;
    moreImage();
})

let imgCont = document.querySelector(".img-cont");

function moreImage() {
    for(let i=0; i<imgNum; i++){
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*50000)}`
        imgCont.appendChild(newImg);
    }
}