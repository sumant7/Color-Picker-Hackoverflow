
//color code and cards generation
const up = document.getElementById('up')
const generate = document.getElementById('generate')
const code = document.getElementById('code')
const instruction = document.getElementById('instruction')
const message = document.getElementById('message')
let correct
let color
let win =0

generate.onclick = function(){   
    win=0
    up.style.backgroundColor= "rgb(70, 140, 255)"
    message.innerText=""
    instruction.innerText = "Choose From One of the Options Below"
    generate.innerText= "GENERATE AGAIN"
    color= randcolor()
    code.innerText= `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    correct = Math.floor(Math.random()*3) + 1   //decides which of the three options will have correct color 
    for (let i = 0; i < 3; i++) {   //since there are three options
        if(i==(correct-1))   //correct option will display the correct code
        {
            document.getElementById(`box${correct}`).style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            continue
        }
        option = randcolor()  //other options display random code
        document.getElementById(`box${i+1}`).style.backgroundColor = `rgb(${option[0]}, ${option[1]}, ${option[2]})`
    }

}

function randcolor(){  //returns an array with 3 elemets as color code
    let a=[]
    a[0]= Math.floor(Math.random()*255) + 1
    a[1]= Math.floor(Math.random()*255) + 1
    a[2]= Math.floor(Math.random()*255) + 1
    return a
}

//option selection part
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')



//optimised approach don't know why not working
// box1.addEventListener("click", check(1));
// box2.addEventListener("click", check(2));
// box3.addEventListener("click", check(3));


// function check(p){
//     console.log(69)
//     if(correct==p)
//     {
//         message.innerText = "YOU WIN!"
//         win=1
//         box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
//         box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
//         box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
//         up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
//     }
//     else
//     {
//         if(win!=1)
//         {
//             message.innerText = "Try Again"
//             document.getElementById(`box${p}`).style.backgroundColor = "rgb(41, 38, 38)"
//         }
//     }
// }






//hardcode
box1.onclick = function(){
    console.log(69)
    if(correct==1)
    {
        message.innerText = "YOU WIN!"
        win=1
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    else
    {
        if(win!=1)
        {
            message.innerText = "Try Again"
            box1.style.backgroundColor = "rgb(41, 38, 38)"
        }
    }
}
box2.onclick = function(){
    if(correct==2)
    {
        message.innerText = "YOU WIN!"
        win=1
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    else
    {
        if(win!=1)
        {
            message.innerText = "Try Again"
            box2.style.backgroundColor = "rgb(41, 38, 38)"
        }
    }
}
box3.onclick = function(){
    if(correct==3)
    {
        message.innerText = "YOU WIN!"
        win=1
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    else
    {
        if(win!=1)
        {
            message.innerText = "Try Again"
            box3.style.backgroundColor = "rgb(41, 38, 38)"
        }
    }
}