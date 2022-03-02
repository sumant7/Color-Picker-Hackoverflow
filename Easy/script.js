
//color code and cards generation
const generate = document.getElementById('generate')
const code = document.getElementById('code')
const instruction = document.getElementById('instruction')

generate.onclick = function(){   
    instruction.innerText = "Choose From One of the Options below"
    generate.innerText= "GENERATE AGAIN"
    color= randcolor()
    code.innerText= `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    correct = Math.floor(Math.random()*3) + 1   //decides which of the three options will have correct color 
    console.log(correct)
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


const message = document.getElementById('message')
const up = document.getElementById('up')