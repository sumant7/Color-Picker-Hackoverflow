
const ins = document.querySelector('.ins')
ins.onclick = function(){
    const display= document.querySelector('.instruction')
    if(display.innerHTML=="")
    {
        display.innerHTML= "You will be given a random RGB value on top. RGB stands for Red Green Blue. There will be 3 colored cards in easy mode and 6 colored cards in hard mode. One of the colored cards will be of the correct RGB value as displayed on the top. You have to choose between the given options. You choose the correct option you win."
    }
    else{
        display.innerHTML=""
    }
    
};


