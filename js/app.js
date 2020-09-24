console.log('Connected...')
const rotateBtn = document.getElementById('btn-rotate')
const clearBtn = document.getElementById('btn-clear')
const userInputControl = document.getElementById('user-input')
const outputDisplayControl = document.getElementById('input-display')
const selectContainer =  document.getElementById('rotation-number')
let userInput = ''
let rotationNumber = 1


const createOptions = () => {
    for(let i = 1; i<=25;i++){
        const opt = document.createElement('option')
        opt.value = i.toString()
        opt.text = i.toString()
        selectContainer.add(opt)
    }
}

createOptions()

//Get user input 
userInputControl.addEventListener('input',(e) =>{ 
  userInput = e.target.value
  console.log(userInput)
})

// Select rotate number 
selectContainer.addEventListener('change', (e) => {
  rotationNumber = e.target.value
  console.log(e.target.value)
})

const rotateText = () => {
    rotationNumber  = rotationNumber % 26
    const lowerCaseStr = userInput.toLowerCase()
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    let newText = ''
    for(let i=0; i< lowerCaseStr.length; i++){
        let currentLetter = lowerCaseStr[i]
        if( currentLetter === ' ' ){ 
            newText += currentLetter
            continue
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        if( currentIndex === -1 ) newText += currentLetter
        else{
            let newIndex = currentIndex + rotationNumber
            if( newIndex > 25 ) newIndex = newIndex - 26
            if( newIndex < 0 ) newIndex = newIndex + 26
            if(userInput[i] === userInput[i].toUpperCase()){
                newText += alphabet[newIndex].toUpperCase()
            }
        else newText += alphabet[newIndex]
        }
        

    }
    outputDisplayControl.value = newText
    return newText
}


//Rotate user input
rotateBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    rotateText()
 
})
clearBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    userInputControl.value = ""
    userInput = " "
    outputDisplayControl.value = ""
})
