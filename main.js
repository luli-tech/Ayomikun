let screen=document.querySelector('.input')
let buttons=document.querySelectorAll('button')
let result=document.querySelector('.result')
let symbols=['√','x','/','+','-','=','AC','DEL','%','^']
let clear=document.querySelector('.red')

let value=''
let firstVariable=''
let secondVariable=''
let symbol=''
let finalResult=''



let showAnswer=()=>{
  firstVariable=parseFloat(firstVariable)
  secondVariable=parseFloat(secondVariable)
  result.innerHTML=''
if(symbol==='+')
    finalResult=firstVariable+secondVariable
else if(symbol==='^')
    finalResult=firstVariable**secondVariable
else if(symbol==='x')
    finalResult=firstVariable*secondVariable
else if(symbol==='/')
    finalResult=firstVariable/secondVariable
else if(symbol==='-')
    finalResult=firstVariable-secondVariable
else if(symbol==='%')
    finalResult=(firstVariable/100)*secondVariable

    
result.innerHTML=Math.round(finalResult*100)/100
firstVariable=finalResult
secondVariable=''
  
}
buttons.forEach(button=>{
  button.addEventListener('click',e=>{
    value=e.target.innerHTML
    let getsymbols=symbols.includes(value)
    if(firstVariable && getsymbols){
      screen.innerHTML=result.innerHTML
      secondVariable && showAnswer()
      symbol=value
    }
    else if (!symbol) {
      firstVariable+=value
    }
    else if (symbol) {
     secondVariable+=value 
    }
   if(value !== '='){
     result.innerHTML+=value
   }
   if(value==='DEL'){
    firstVariable=secondVariable=symbol=''
    return result.innerHTML=screen.innerHTML=''
   }
  })
})
