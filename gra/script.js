window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    var gap = document.getElementById("gap");
    var block = document.getElementById("block");
    var bird = document.getElementById("bird");
    var counter =0;
    var flying =0;

    
    
   

    gap.addEventListener("animationiteration", () => {
        var random = -((Math.random() * 375) + 125);
        gap.style.top = random + "px";
        counter ++;

    })

    
   
    setInterval(function () {
        var birdTop=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
        if (flying === 0)
        {
            bird.style.top = (birdTop +2) + "px";
        }
        var blockSide=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var gapTop=parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
        var cTop= (gapTop - 200);
        var dTop= (birdTop - 30);
       
        if ((birdTop  > -250)||((blockSide < 150) && (blockSide > 80) && ((dTop > gapTop) || (birdTop < cTop)))) {
            
            alert("END GAME. SCORE: "+ (counter-1));
            bird.style.top = -400 + "px";
            counter = 0;
        }
    }, 10);
    
    
    function fly() {
        console.log(bird.style.top);
        flying = 1; 
        let flyCount = 0;
        
        var flyInterval = setInterval(() => {
            var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
             
            if((birdTop > -700) && (flyCount < 20)) {
                bird.style.top = (birdTop - 5) + "px"
             }
            if(flyCount > 20) {
                clearInterval(flyInterval);
                flying = 0;
                flyCount = 0; nn   
            }
            flyCount++
        }, 20);

    }
    
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            fly()
        }
    })
});

 