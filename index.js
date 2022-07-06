let input = document.getElementById('input');

const keypadClicked = (val) => {
   if(val==='c'){
     clearInput();
     return;
   }
   if(val==='sqrt'){
     setInput(Math.sqrt(parseFloat(input.value)))
     return;
   }
   if(val==='cbrt'){
    setInput(Math.cbrt(parseFloat(input.value)))
    return;
   } 
   if(val==='sqr'){
    setInput(Math.pow(parseFloat(input.value),2));
    return;
   }
   if(val==='='){
     setInput(math.evaluate(input.value));
     return;
   }    
   setInput(input.value+val)
}

const setInput = (val) => {
    if(val===0) clearInput();
    input.value = val;
}

const clearInput = () => {
    input.value = "";
    currentInputValue = "";
}