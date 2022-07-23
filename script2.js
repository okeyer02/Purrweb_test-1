let slider=[];
let slides=document.querySelectorAll(".SlideBlock");
console.log(slides);

for(let i=0; i< slides.length; i++) {
    slider[i]=slides[i].src;
    slides[i].remove();
}
console.log(slider);

let step=0;
let offset=0;
let imgWidth=800;

function draw(){
    let img=document.createElement("img");
    img.src=slider[step];   
    img.classList.add("SlideBlock");
    img.style.left=(offset)*imgWidth+"px";
    document.querySelector(".slider").appendChild(img);
    
    if(step+1==slider.length){
        step=0;
    } else {
        step++;
    }
    offset = 1;
}

function left(){
    document.querySelector("#leftb").onclick=null;
    let slides2=document.querySelectorAll(".SlideBlock");
    let offset2=0;
    for(let i=0;i< slides2.length;i++){
        slides2[i].style.left=offset2*imgWidth-imgWidth+"px";
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        draw();
        document.querySelector("#leftb").onclick=left;
    }, 1000)
}

function right(){
    document.querySelector("#rightb").onclick=null;
    
}

draw();draw();
document.querySelector("#leftb").onclick=left;