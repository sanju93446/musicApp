window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    
    const colors = [
     "#ffff00",
        "#ff0000",
        "#008000",
        "#ee82ee",
        "#ff00ff",
        "#663399"   
    ]

    //lets get going with sounds here
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });
    const createBubbles = function(index){
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('load', function(){
            visual.removeChild();
        });
    }
});