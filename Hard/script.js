
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
    correct = Math.floor(Math.random()*6) + 1  //decides which of the six options will have correct color 
    console.log(correct)
    for (let i = 1; i <= 6; i++) {   //since there are three options
        if(i==correct)   //correct option will display the correct code
        {
            document.getElementById(`box${correct}`).style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
            continue
        }
        option = randcolor()  //other options display random code
        document.getElementById(`box${i}`).style.backgroundColor = `rgb(${option[0]}, ${option[1]}, ${option[2]})`
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
let box4 = document.getElementById('box4')
let box5 = document.getElementById('box5')
let box6 = document.getElementById('box6')



//hardcode
box1.onclick = function(){
    if(correct==1)
    {
        message.innerText = "YOU WIN!"
        win=1
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box4.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box5.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box6.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
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
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box4.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box5.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box6.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
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
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box4.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box5.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box6.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
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
box4.onclick = function(){
    if(correct==4)
    {
        message.innerText = "YOU WIN!"
        win=1
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box4.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box5.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box6.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    else
    {
        if(win!=1)
        {
            message.innerText = "Try Again"
            box4.style.backgroundColor = "rgb(41, 38, 38)"
        }
    }
}
box5.onclick = function(){
    if(correct==5)
    {
        message.innerText = "YOU WIN!"
        win=1
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box4.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box5.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box6.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    else
    {
        if(win!=1)
        {
            message.innerText = "Try Again"
            box5.style.backgroundColor = "rgb(41, 38, 38)"
        }
    }
}
box6.onclick = function(){
    if(correct==6)
    {
        message.innerText = "YOU WIN!"
        win=1
        box1.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box2.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box3.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box4.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box5.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        box6.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        up.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    }
    else
    {
        if(win!=1)
        {
            message.innerText = "Try Again"
            box6.style.backgroundColor = "rgb(41, 38, 38)"
        }
    }
}