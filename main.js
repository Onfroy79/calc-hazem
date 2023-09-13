const clear=document.querySelector('.clear')
const equal=document.querySelector('.equal')
const numbers=document.querySelectorAll('.number')
const plus=document.querySelector('.plus')
const minus=document.querySelector('.minus')
const times=document.querySelector('.times')
const over=document.querySelector('.over')
const power=document.querySelector('.power')
const screen=document.querySelector('.imTheScreenNigga')

 
let first= '';
let sec='';
let _operator='';



  
  
 
  plus.addEventListener('click', function(){
   
   
    _operator='+'
    
  })

  minus.addEventListener('click', function(){
    _operator='-'
  })

  times.addEventListener('click', function(){
    _operator='*'
  })

  over.addEventListener('click', function(){
    _operator='/'
  })

  power.addEventListener('click', function(){
    _operator='^'
  })

  numbers.forEach(function(button){
  button.addEventListener('click', function(){
    
    if(_operator===''){
    first+=button.textContent
    screen.textContent=first
    } else{
     sec+=button.textContent
     screen.textContent=sec
    }
    } )})

let value;

  function operate(){
    first=Number(first)
    sec=Number(sec)
    if(_operator=='+'){
  
      value= first + sec
      return value
    } 
      if(_operator=='-'){
  
      value= first - sec
      return value
    }
      if(_operator=='*'){
  
      value= first * sec
      return value
    }
      if(_operator=='/'){
  
      value= first / sec
      return value
    }
      if(_operator=='^'){
  
      value= Math.pow(first,sec)
      return value
    }
    
  }
  
 



  equal.addEventListener('click', function(){
    screen.textContent=operate()
    sec=''
    first=''
    _operator=''
  })

  

  clear.addEventListener('click', function(){
    sec=''
    first=''
    _operator=''
    screen.textContent=''
  })

 