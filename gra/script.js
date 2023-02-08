window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var gap = document.getElementById("gap");
    var block = document.getElementById("block");
    var bird = document.getElementById("bird");
    
    

    gap.addEventListener("animationiteration", () => {
        var random = -((Math.random() * 375) + 125);
        //console.log(random);
        gap.style.top = random + "px";

    });
   
    
    document.addEventListener("keyup", event => {
        if (event.code ==='Space'){
            fly();
            
        }
    })
    setInterval(gravity, 10);


    function fly(){
        var jump =  parseInt(window.getComputedStyle(bird).getPropertyValue("top")) - 70;
           bird.style.top = jump + "px";
    }
    function gravity(){
        var down = parseInt(window.getComputedStyle(bird).getPropertyValue("top")) +2;
        bird.style.top = down + "px";
    }
});

 